import { React } from "react"
import { useEffect, useState } from "react";
import CarItem from "./carItem"

export default function CarListing() {

  const [data, getData] = useState([])
  const API = 'http://127.0.0.1:8000/prova/car/';
  const fetchData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        getData(res)
        console.log(res);
        console.log(res.imageName);
      })
  }

  function getMakeModel() {

    let url = window.location.href;
    let splitURL, make, model;

    if (url.includes("?")) {
      splitURL = url.split("?")

      if (splitURL[1].includes("&")) {
        let makeModel = splitURL[1].split("&")

        make = makeModel[0].substring(makeModel[0].indexOf('=') + 1);
        model = makeModel[1].substring(makeModel[1].indexOf('=') + 1);
      } else {
        make = splitURL[1].substring(splitURL[1].indexOf('=') + 1);
      }
    }

    return { make, model };
  }

  useEffect(() => {
    fetchData()
    getMakeModel()
  }, [])

  return (
    <section className="carListing">
      {data.map((item, i) => {
        return <CarItem key={item.id} id={item.id} image={item.imageName} logo={item.make} name={item.make + " " + item.model} year={item.year} mileage={item.mileage} />
      })}

      {/* <CarItem id={1} image={Golf7} logo={VW} name={"Volkswagen Golf 7"} year={2018} mileage={14000} /> */}
      {/* <CarItem id={2} image={A4Avant} logo={Audi} name={"Audi A4 Avant"} year={2023} mileage={0} /> */}
      {/* <CarItem id={3} image={ThreeSeries} logo={BMW} name={"BMW 3-Series"} year={2020} mileage={20000} /> */}
      {/* <CarItem id={4} image={Taycan} logo={Porsche} name={"Porsche Taycan"} year={2023} mileage={0} /> */}
      {/* <CarItem id={5} image={F_150} logo={Ford} name={"Ford F-150"} year={2018} mileage={147000} /> */}
      {/* <CarItem id={6} image={C63AMG} logo={Mercedes} name={"Mercedes C63 AMG"} year={2012} mileage={60000} /> */}
      {/* <CarItem id={7} image={GRSupra} logo={Toyota} name={"Toyota GR Supra"} year={2021} mileage={10000} /> */}
      {/* <CarItem id={8} image={Civic} logo={Honda} name={"Honda Civic"} year={2019} mileage={47000} /> */}
      {/* <CarItem id={9} image={Civic} logo={Honda} name={"Honda Civic"} year={2019} mileage={47000} /> */}
      {/* <CarItem id={10} image={Civic} logo={Honda} name={"Honda Civic"} year={2019} mileage={47000} /> */}
      {/* <CarItem id={11} image={Civic} logo={Honda} name={"Honda Civic"} year={2019} mileage={47000} /> */}
      {/* <CarItem id={12} image={Civic} logo={Honda} name={"Honda Civic"} year={2019} mileage={47000} /> */}
    </section>
  )
}