import { React } from "react";
import SelectCar from "./selectCar";

export default function ExtendedFilter() {

  function extendFilters() {

    let eFilter = document.querySelector(".extendFilter");
    eFilter.classList.toggle("show");
  }

  function extendSearch() {

    let search = document.querySelector(".extendSearch");
    search.classList.toggle("show");
  }

  return (

    <div className="extendedContainer">
      <a href="#" onClick={extendFilters} className="filterToggle">More filters</a>
      <div className="extendFilter">

        <div className='selectCar'>
          <label htmlFor="color">Color</label><br />
          <select id="color">
            <option value="">Select Color</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="gray">Gray</option>
            <option value="red">Red</option>
            <option value="white">White</option>
          </select>
        </div>

        <div className='selectCar'>
          <label htmlFor="year">Year</label><br />
          <select id="year">
            <option value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
          </select>
        </div>

        <div className='selectCar'>
          <label htmlFor="mileage">Mileage</label><br />
          <select id="mileage">
            <option value="">Select Mileage</option>
            <option value="5k">5.000km</option>
            <option value="10k">10.000km</option>
            <option value="20k">20.000km</option>
            <option value="30k">30.000km</option>
            <option value="50k">50.000km</option>
            <option value="100k">100.000km</option>
            <option value="125k">125.000km</option>
            <option value="150k">150.000km</option>
            <option value="gt15k"> &gt;150.000km</option>
          </select>
        </div>

        <div className='selectCar'>
          <label htmlFor="price">Price Range</label><br />
          <select id="price">
            <option value="">Select Price Range</option>
            <option value="lt10000"> &lt;10.000€</option>
            <option value="10k_20k"> 10.000€ - 20.000€ </option>
            <option value="20k_30k"> 20.000€ - 30.000€ </option>
            <option value="30k_40k"> 30.000€ - 40.000€ </option>
            <option value="40k_50k"> 40.000€ - 50.000€ </option>
            <option value="50k_70k"> 50.000€ - 70.000€ </option>
            <option value="gt70k"> &gt;70.000€ </option>
          </select>
        </div>

        <div className='selectCar'>
          <label htmlFor="transmission">Transmission</label><br />
          <select id="transmission">
            <option value="">Select Transmission</option>
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
          </select>
        </div>

        <div className='selectCar'>
          <label htmlFor="fuel">Fuel</label><br />
          <select id="fuel">
            <option value="">Select Fuel</option>
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
            <option value="electric">Electric</option>
          </select>
        </div>

      </div>

      <div className="extendSearch">

      </div>
    </div>
  )
}