import { React, useState, useEffect, useRef } from "react";
import Footer from '../components/footer'
import SelectCar from "../components/carComponents/selectCar";
import CarItem from "../components/carComponents/carItem";
import Categories from "../components/indexComponents/categories";
import ExtendedFilter from "../components/carComponents/extendedFilter";

export default function Cars() {

  const [error, setError] = useState([""]);
  const [number, setNumber] = useState([]);
  const [query, setQuery] = useState([]);
  const [data, getData] = useState([]);
  const [page, setPage] = useState(1); // Current page number
  const [totalPages, setTotalPages] = useState(1); // Current total page numbers
  const [perPage, setPerPage] = useState(12); // Number of cars per page
  const [count, setCount] = useState(1); // Number of cars per page

  let API = "http://127.0.0.1:8000/prova/car/?limit=12&offset=" + (12 * (page - 1)) + "&search=" + query;
  const fetchData = () => {

    if (page < 1) {
      setPage(1);
    }

    if (document.getElementById("paginationPrevious")) {
      let previous = document.getElementById("paginationPrevious")
      if (previous) {
        previous.disabled = page === 1;
      }
    }

    if (document.getElementById("paginationNext")) {
      let next = document.getElementById("paginationNext")
      if (next) {
        next.disabled = page === totalPages;
      }
    }

    if (document.getElementById("page" + page)) {
      document.getElementById("page" + count).style.background = "";
      document.getElementById("page" + page).style.background = "orange";

      setCount(page);
    }

    window.scrollTo(0, 0);

    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        getData(res.results);
        if (res.count == 0) {
          setError("No results");
        } else {
          setError("");
        }
        setTotalPages(Math.ceil(res.count / 12));
      });
  };

  useEffect(() => {
    const numberArray = []
    for (let i = 0; i < totalPages; i++) {
      numberArray.push(<button key={i} id={"page" + (i + 1)} className="pageCount" onClick={() => setPage(i + 1)}>{i + 1}</button>);
    }

    setNumber(numberArray)
  }, [totalPages])

  useEffect(() => {
    fetchData()
  }, [page, perPage, totalPages])

  function search(e) {
    e.preventDefault();

    setPage(0);

    let search = document.querySelector("#search").value;

    let make = document.querySelector("#make").value;
    let model = document.querySelector("#model").value;
    let category = document.querySelector("#category").value;
    let year = document.querySelector("#year").value;
    let color = "&color=" + document.querySelector("#color").value;
    let mileage = "&mileage=" + document.querySelector("#mileage").value;
    let price = "&price=" + document.querySelector("#price").value;

    window.scrollTo(0, 0);

    let data;
    data = search + " " + make + model + category + " " + year + color + mileage + price;
    setQuery(data)
  }

  useEffect(() => {
    const fetchSearchData = () => {
      fetch(API)
        .then((res) => res.json())
        .then((res) => {
          getData(res.results)

        })
    }
    fetchSearchData();
  }, [query])


  return (
    <div className="carMain">
      <section className="cars">

        <form onSubmit={search} className="container">
          <div className="container">
            <SelectCar />
            <div>
              <a id="searchCar" href="">
                <input type="submit" value="Show Results" />
              </a>
            </div>
          </div>
        </form>
      </section>

      <form onSubmit={search} className="container">
        <ExtendedFilter />
      </form>

      <section className="carListing">
        <div id="listingContainer" className="container">
          {data.map((item, i) => {
            return (
              <>
                <CarItem key={item.id} id={item.id} image={item.imageName} logo={item.make} name={item.make + " " + item.model} year={item.year} mileage={item.mileage} sold={item.sold} />
              </>
            )
          })}
        </div>
        {error != "" ? <p>{error}</p> : ""}
        <div className="pagination">
          <button id="paginationPrevious" onClick={() => setPage(page - 1)}>Previous</button>
          {number}
          <button id="paginationNext" onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </section>

      <Categories />

      <Footer />
    </div >
  )
}