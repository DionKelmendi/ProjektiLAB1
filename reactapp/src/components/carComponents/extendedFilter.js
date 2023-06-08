import { React } from "react";
import SelectCar from "./selectCar";

export default function ExtendedFilter() {

  function selectMake() {

    let make = document.querySelector("#make").value;
    let models = document.querySelector("#model");
    let length = models.length;

    let label = [];

    if (make === "audi") {
      label = ["A1", "A2", "A3", "A4", "A5", "A6"];
    } else if (make === "bmw") {
      label = ["M3", "M4", "M5", "X6", "X7"];
    } else if (make === "lamborghini") {
      label = ["Aventador", "Diablo", "Huracan", "Veneno"];
    } else if (make === "mercedes") {
      label = ["A-Class", "B-Class", "C-Class", "D-Class", "E-Class"];
    } else if (make === "porsche") {
      label = ["Boxster", "Cayman", "Cayene", "911 Spider"];
    } else if (make === "rangeRover") {
      label = ["Evoque", "Discovery", "Velar", "Vogue"];
    } else if (make === "rollsRoyce") {
      label = ["Cullinan", "Ghost", "Phantom", "Wraith"];
    } else if (make === "volkswagen") {
      label = ["Golf 1", "Golf 2", "Golf 3", "Golf 4", "Golf 5", "Golf 6"];
    }

    for (let i = 0; i < length; i++) {
      models.remove(1);
    }

    if (make !== "") {

      models[0].label = "Select Model";

      label.forEach(i => {
        let option = document.createElement("option");
        option.label = i;
        option.value = i.toLowerCase();
        models.add(option);
      });

    } else {

      models[0].label = "Select Make First";
    }

  }

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
          <label htmlFor="make">Make</label><br />
          <select id="make" onChange={selectMake}>
            <option value="">Select Make</option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="lamborghini">Lamborghini</option>
            <option value="mercedes">Mercedes</option>
            <option value="porsche">Porsche</option>
            <option value="rangeRover">Range Rover</option>
            <option value="rollsRoyce">Rolls Royce</option>
            <option value="volkswagen">Volkswagen</option>
          </select>
        </div>

        <div>
          <label htmlFor="model">Model</label><br />
          <select id="model" >
            <option value="" id="option1">Select Make First</option>
          </select>
        </div>

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

    </div>
  )
}