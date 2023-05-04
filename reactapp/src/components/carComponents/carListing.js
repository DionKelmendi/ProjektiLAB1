import { React } from "react"
import car from "../../images/car.webp";
import VW from "../../images/VW.webp";
import { useEffect } from "react";
import CarItem from "./carItem"

export default function CarListing() {

  useEffect(() => {

    let listings = document.querySelector(".carListing")['children'];

    for (let i = 4; i < listings.length; i++) {
      const element = listings[i];
      element.style.transform = "translateY(-50px)";

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

    console.log(getMakeModel());

  }, [])

  return (
    <section className="carListing">
      <CarItem id={1} image={car} logo={VW} name={"Car 1"} year={2002} mileage={14000} />
      <CarItem id={2} image={car} logo={VW} name={"Car 2"} year={2020} mileage={1000} />
      <CarItem id={3} image={car} logo={VW} name={"Car 3"} year={2010} mileage={4000} />
      <CarItem id={4} image={car} logo={VW} name={"Car 4"} year={2019} mileage={7000} />
      <CarItem id={5} image={car} logo={VW} name={"Car 5"} year={2009} mileage={8000} />
      <CarItem id={6} image={car} logo={VW} name={"Car 6"} year={2021} mileage={1500} />
      <CarItem id={7} image={car} logo={VW} name={"Car 7"} year={2020} mileage={10000} />
      <CarItem id={8} image={car} logo={VW} name={"Car 8"} year={2016} mileage={147000} />
    </section>
  )
}