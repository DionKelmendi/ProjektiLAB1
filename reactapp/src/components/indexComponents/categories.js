import { React, useEffect, useState} from "react";
import CategoryItem from "./categoryItem";
import BMW from "../../images/logos/BMW.webp";
import Mercedes from "../../images/logos/Mercedes.webp";
import Audi from "../../images/logos/Audi.webp";
import VW from "../../images/logos/Volkswagen.webp";
import Ford from "../../images/logos/Ford.webp";
import Hyndai from "../../images/logos/Hyndai.webp";
import Toyota from "../../images/logos/Toyota.webp";
import Mitsubishi from "../../images/logos/Mitsubishi.webp";
import Convertible from "../../images/logos/Convertible.webp";
import Hatchback from "../../images/logos/Hatchback.webp";
import SUV from "../../images/logos/SUV.webp";
import Wagon from "../../images/logos/Wagon.webp";

export default function Categories() {
  const [data, setData] = useState({ makes: [], count: [] });

  useEffect(() => {


    const fetchData = () => {
      const API = 'http://127.0.0.1:8000/prova/car/makes/';
        fetch(API)
          .then((res) => res.json())
          .then((res) => {
            setData({ makes: res.results[0].makes[0], count: res.results[0].makes[1] });
          });
      
    };
    fetchData();
  }, [])


  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <section className="categories">
      <h2 className="findCar">Find Car By</h2>
      <div className="container">
        <div>
          <h4 className="categoryTitle">Featured Brands</h4>
          <div className="categoryList">
            {data.makes.map((make, index) => (
              <CategoryItem key={make} categoryLogo={make} categoryName={make} carAmount={data.count[index]} />
              
            ))}
          </div>
        </div>

        <div>
          <h4 className="categoryTitle">Popular Categories</h4>

          <CategoryItem categoryLogo={"Hatchback"} categoryName='Hatchback' carAmount='23' />
          <CategoryItem categoryLogo={"SUV"} categoryName='SUV' carAmount='8' />
          <CategoryItem categoryLogo={"Convertible"} categoryName='Convertible' carAmount='5' />
          <CategoryItem categoryLogo={"Wagon"} categoryName='Station Wagon' carAmount='4' />
        </div>
      </div>
    </section>
  )
}