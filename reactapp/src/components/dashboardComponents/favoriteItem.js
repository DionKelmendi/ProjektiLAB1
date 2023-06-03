import { React } from "react"
import { Link } from 'react-router-dom';
import Volkswagen from "../../images/logos/Volkswagen.webp";

export default function FavoriteItem({ id, name, img }) {

  return (
    <>
      <Link to={"/vehicle?id=" + id}>
        <div className='favoriteItem'>
          <img
            src={require('../../images/logos/' +
              img + ".webp")}
            alt="carLogo" />
          <p>{name}</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </Link>
    </>
  )
}