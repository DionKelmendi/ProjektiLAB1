import { React, useState, useEffect, useRef } from "react";
import Footer from '../components/footer'
import SelectCar from "../components/carComponents/selectCar";
import CarListing from "../components/carComponents/carListing";
import Categories from "../components/indexComponents/categories";
import ExtendedFilter from "../components/carComponents/extendedFilter";

export default function Cars() {

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