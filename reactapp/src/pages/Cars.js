import { React, useState, useEffect, useRef } from "react";
import Footer from '../components/footer'
import SelectCar from "../components/carComponents/selectCar";
import CarListing from "../components/carComponents/carListing";
import Categories from "../components/indexComponents/categories";
import ExtendedFilter from "../components/carComponents/extendedFilter";

export default function Cars() {

  const [car, setCar] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/prova/car/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [])

  return (
    <div className="carMain">
      <section className="cars">

        <div className="container">
          <SelectCar />
        </div>
      </section>

      <ExtendedFilter />
      <CarListing />
      <Categories />

      <Footer />
    </div>
  )
}