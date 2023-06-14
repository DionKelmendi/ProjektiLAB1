import { React } from "react";
import SelectCar from "./selectCar";

export default function ExtendedFilter() {

  function selectMake() {

    let make = document.querySelector("#make").value;
    let models = document.querySelector("#model");
    let length = models.length;

    let label = [];

    if (make === "audi") {
      label = ["A7", "A8", "R8", "RS6"];
    } else if (make === "bentley") {
      label = ["Bentayga"];
    }else if (make === "bmw") {
      label = ["5", "7", "M4", "X6"];
    } else if (make === "ferrari") {
      label = ["296 GTB", "812 Superfast", "F8"];
    }else if (make === "lamborghini") {
      label = ["Aventador", "Huracan", "Urus"];
    } else if (make === "maserati") {
      label = ["Grecale"];
    } else if (make === "mclaren") {
      label = ["600LT Spider"];
    } else if (make === "mercedes") {
      label = ["G-Class", "GLE", "GLS", "GT63", "V-Class", "X-Class"];
    } else if (make === "porsche") {
      label = ["Panamera 4s", "Cayene Turbo", "718 Spyder"];
    } else if (make === "volkswagen") {
      label = ["Golf 8", "Arteon"];
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
  return (
    <>
      <div className="extendedContainer">
        <a href="#" onClick={extendFilters} className="filterToggle">More filters <i className="fa-solid fa-filter" /> </a>
        <div className="extendFilter">
          <div className='selectCar'>
            <label htmlFor="make">Make</label><br />
            <select id="make" onChange={selectMake}>
              <option value="">Select Make</option>
              <option value="audi">Audi</option>
              <option value="bentley">Bentley</option>
              <option value="bmw">BMW</option>
              <option value="ferrari">Ferrari</option>
              <option value="lamborghini">Lamborghini</option>
              <option value="maserati">Maserati</option>
              <option value="mclaren">McLaren</option>
              <option value="mercedes">Mercedes</option>
              <option value="porsche">Porsche</option>
              <option value="volkswagen">Volkswagen</option>
            </select>
          </div>

          <div className="selectCar">
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
              <option value="brown">Brown</option>
              <option value="blue">Blue</option>
              <option value="gray">Gray</option>
              <option value="green">Green</option>
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
            <select id="mileage" name="mileage">
              <option value="">Select Mileage</option>
              <option value="10000"> &lt; 10,000 </option>
              <option value="20000"> &lt; 20,000</option>
              <option value="30000"> &lt; 30,000</option>
              <option value="40000"> &lt; 40,000</option>
              <option value="50000"> &lt; 50,000 </option>
              <option value="100000"> &lt; 100,000</option>
              <option value="150000"> &lt; 150,000</option>
              <option value="200000"> &lt; 200,000</option>
            </select>
          </div>

          {/* <div className='selectCar'>
            <label htmlFor="price">Price</label><br />
            <input id="price" name="price" type='text' placeholder='Search Here' />
          </div> */}

          <div className='selectCar'>
            <label htmlFor="price">Price</label><br />
            <select id="price" name="price">
              <option value="">Select Price</option>
              <option value="40000"> &lt; $40,000</option>
              <option value="50000"> &lt; $50,000 </option>
              <option value="100000"> &lt; $100,000</option>
              <option value="150000"> &lt; $150,000</option>
              <option value="200000"> &lt; $200,000</option>
              <option value="300000"> &lt; $300,000</option>
              <option value="500000"> &lt; $500,000</option>
            </select>
          </div>

        </div>
      </div>
    </>
  )
}