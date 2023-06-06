import { React } from "react"
import { useEffect, useState } from "react";
import CarItem from "./carItem"

export default function CarListing() {

  const [data, getData] = useState([])
  const API = 'http://127.0.0.1:8000/prova/car/?search=Station';
  const fetchData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        getData(res)
        console.log(res);
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

    </section>
  )
}