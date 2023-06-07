import { React, useState, useEffect, useRef } from "react";
import Footer from '../components/footer'
import SelectCar from "../components/carComponents/selectCar";
import CarItem from "../components/carComponents/carItem";
import Categories from "../components/indexComponents/categories";
import ExtendedFilter from "../components/carComponents/extendedFilter";

export default function Cars() {

  const [data, getData] = useState([])
  let API = 'http://127.0.0.1:8000/prova/car/?search=';
  const fetchData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        getData(res)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  function search(e) {
    e.preventDefault();

    let search;

    let make = document.querySelector("#make").value;
    let model = document.querySelector("#model").value;
    let category = document.querySelector("#category").value;
    let year = document.querySelector("#year").value;
    let color = "&color=" + document.querySelector("#color").value;
    let mileage = "&mileage=" + document.querySelector("#mileage").value;
    let price = "&price=" + document.querySelector("#price").value;

    let data = make + " " + model + " " + category + " " + year + color + mileage + price;

    let API = 'http://127.0.0.1:8000/prova/car/?search=' + data;
    const fetchSearchData = () => {
      fetch(API)
        .then((res) => res.json())
        .then((res) => {
          getData(res)
        })
    }
    fetchSearchData();
  }

  return (
    <div className="carMain">
      <section className="cars">

        <div className="container">
          <SelectCar />
          <div>
            <a id="searchCar" onClick={search} href="">
              <input type="submit" value="Show Results" />
            </a>
          </div>
        </div>
      </section>

      <ExtendedFilter />

      <section className="carListing">
        {data.map((item, i) => {
          return <CarItem key={item.id} id={item.id} image={item.imageName} logo={item.make} name={item.make + " " + item.model} year={item.year} mileage={item.mileage} />
        })}
      </section>

      <Categories />

      <Footer />
    </div>
  )
}