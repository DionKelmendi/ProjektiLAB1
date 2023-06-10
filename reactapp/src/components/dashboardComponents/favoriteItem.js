import { React } from "react"
import { Link } from 'react-router-dom';
import Volkswagen from "../../images/logos/Volkswagen.webp";

export default function FavoriteItem({ id, name, img, year, mileage, price }) {

  return (
    <>
      <Link to={"/vehicle?id=" + id}>
        <div className='favoriteItem'>
          <img
            src={require('../../images/logos/' +
              img + ".webp")}
            alt="carLogo" />
          <p className="year">{year}</p>
          <p className="name">{name}</p>
          <p className="mileage">{mileage ? mileage + "km" : ""}</p>
          <p className="price">{price ? "$" + price : ""}</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </Link>
    </>
  )
}