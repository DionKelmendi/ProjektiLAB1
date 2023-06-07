import { React, useState, useEffect, useRef } from "react";
import Footer from '../components/footer'
import SelectCar from "../components/carComponents/selectCar";
import CarItem from "../components/carComponents/carItem";
import Categories from "../components/indexComponents/categories";
import ExtendedFilter from "../components/carComponents/extendedFilter";

export default function Cars() {

  const [data, getData] = useState([]);
  const [page, setPage] = useState(0); // Current page number
  const [perPage, setPerPage] = useState(12); // Number of cars per page
  
  let API = 'http://127.0.0.1:8000/prova/car/?search=';
  const fetchData = () => {
    
    if(page < 0){
      setPage(0);
    }
    // const url = `${API}?page=${page}&limit=${perPage}`;
    API = "http://127.0.0.1:8000/prova/car/?limit=12&offset=" + (12*page);
    console.log(API)
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        getData(res.results);
        console.log(res.results);
      });
  };

  useEffect(() => {
    fetchData()
  }, [page, perPage])

  function search(e) {
    e.preventDefault();

    setPage(0);

    let search;

    let make = document.querySelector("#make").value;
    let model = document.querySelector("#model").value;
    let category = document.querySelector("#category").value;
    let year = document.querySelector("#year").value;
    let color = "&color=" + document.querySelector("#color").value;
    let mileage = "&mileage=" + document.querySelector("#mileage").value;
    let price = "&price=" + document.querySelector("#price").value;

    let data = make + " " + model + " " + category + " " + year + color + mileage + price;

    API = "http://127.0.0.1:8000/prova/car/?limit=12&offset=" + (12*page) + "&search=" + data;

    console.log(API)
    const fetchSearchData = () => {
      fetch(API)
        .then((res) => res.json())
        .then((res) => {
          getData(res.results)
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

      <div className="pagination">
        <button onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      </section>

      <Categories />

      <Footer />
    </div>
  )
}