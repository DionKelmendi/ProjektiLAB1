import { React } from 'react'

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

export default function SelectCar() {

  return (
    <>
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

      <div>
        <label htmlFor="category">Category</label><br />
        <select id="category" >
          <option value="">Select Category</option>
          <option value="convertible">Convertible</option>
          <option value="coupe">Coupe</option>
          <option value="suv">SUV</option>
          <option value="station wagon">Station Wagon</option>
          <option value="sedan">Sedan</option>
          <option value="van">Van</option>
          <option value="other">Other</option>
        </select>
      </div>


    </>
  )
}

