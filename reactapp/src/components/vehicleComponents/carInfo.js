import { React } from "react";

export default function CarInfo({ carName, make, model, year, mileage, fuel, transmission, color, engine }) {
  return (
    <div className="carInfo">
      <p><span>Make </span> <br /><br />{make}</p>
      <p><span>Model </span> <br /><br />{model}</p>
      <p><span>Year </span> <br /><br />{year}</p>
      <p><span>Mileage </span> <br /><br />{mileage}</p>
      <p><span>Fuel </span> <br /><br />{fuel}</p>
      <p><span>Transmission </span> <br /><br />{transmission}</p>
      <p><span>Color </span> <br /><br />{color}</p>
      <p><span>Engine </span> <br /><br />{engine}</p>
    </div>
  )
}