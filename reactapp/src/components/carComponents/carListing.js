import { React } from "react"
import Golf7 from "../../images/Golf7.webp";
import VW from "../../images/VW.webp";
import A4Avant from "../../images/A4Avant.webp";
import Audi from "../../images/Audi.webp";
import ThreeSeries from "../../images/3Series.webp";
import BMW from "../../images/BMW.webp";
import Taycan from "../../images/Taycan.webp";
import Porsche from "../../images/porscheLogo.webp";
import F_150 from "../../images/F-150.webp";
import Ford from "../../images/Ford.webp";
import C63AMG from "../../images/C63AMG.webp";
import Mercedes from "../../images/Mercedes.webp";
import GRSupra from "../../images/GRSupra.webp";
import Toyota from "../../images/Toyota.webp";
import Civic from "../../images/Civic.webp";
import Honda from "../../images/Honda.webp";
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
      <CarItem id={1} image={Golf7} logo={VW} name={"Volkswagen Golf 7"} year={2018} mileage={14000} />
      <CarItem id={2} image={A4Avant} logo={Audi} name={"Audi A4 Avant"} year={2023} mileage={0} />
      <CarItem id={3} image={ThreeSeries} logo={BMW} name={"BMW 3-Series"} year={2020} mileage={20000} />
      <CarItem id={4} image={Taycan} logo={Porsche} name={"Porsche Taycan"} year={2023} mileage={0} />
      <CarItem id={5} image={F_150} logo={Ford} name={"Ford F-150"} year={2018} mileage={147000} />
      <CarItem id={6} image={C63AMG} logo={Mercedes} name={"Mercedes C63 AMG"} year={2012} mileage={60000} />
      <CarItem id={7} image={GRSupra} logo={Toyota} name={"Toyota GR Supra"} year={2021} mileage={10000} />
      <CarItem id={8} image={Civic} logo={Honda} name={"Honda Civic"} year={2019} mileage={47000} />
    </section>
  )
}