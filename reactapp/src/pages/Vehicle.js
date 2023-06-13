import { React, useEffect, useState } from "react";
import Footer from "../components/footer";
import ImageSlider from "../components/vehicleComponents/imageSlider";
import MiddleContent from "../components/vehicleComponents/middleContent";
import Categories from "../components/indexComponents/categories";
import ReviewForm from "../components/vehicleComponents/reviewForm";

export default function Vehicle({ userData }) {

  const [data, setData] = useState("")
  const [imageData, setImageData] = useState("")

  useEffect(() => {

    let id = (window.location.href).split("=")[1];

    const fetchData = (id) => {
      const API = 'http://127.0.0.1:8000/prova/car/' + id + "/";
      if (id) {
        fetch(API)
          .then((res) => res.json())
          .then((res) => {
            setData(res);
          });
      }
    };
    const fetchImageData = (id) => {
      const API = 'http://127.0.0.1:8000/prova/carImages/' + id + "/";
      if (id) {
        fetch(API)
          .then((res) => res.json())
          .then((res) => {
            setImageData(res.results);
          });
      }
    };
    fetchData(id);
    fetchImageData(id);
  }, [])

  return (
    <>
      <div className="vehicle">
        <ImageSlider userData={userData} data={data} imageData={imageData} />
        <MiddleContent />
        <div className="carMain">
          <Categories />

        </div>
        <div>
          <ReviewForm userData={userData} data={data} />
        </div>
      </div>
      <Footer />
    </>
  )
}