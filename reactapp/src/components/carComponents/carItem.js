import { React } from 'react';
import { Link } from 'react-router-dom';

export default function CarItem({ id, image, logo, name, year, mileage }) {

  try {

    return (
      <div className="carItem">
        <Link to={"/vehicle?id=" + id}>

          <img
            src={require('../../images/' +
              image)}
            className="carImg"
            alt="carImg"
          />

          {/* <img src={image} className="carImg" /> */}
          <div className="carDetails">
            <img
              src={require('../../images/logos/' +
                logo + ".webp")}
              className="carLogo" alt="carLogo" />
            <h2>{name}</h2>
            <hr />
            <div>
              <h4><i className="fa-solid fa-calendar-days"></i> <br /> {year} </h4>
              <h4><i className="fa-solid fa-gauge"></i> <br /> {mileage.toLocaleString("en-US")} km</h4>
            </div>
          </div>
        </Link>
      </div>
    )
  } catch (error) {
    // window.location.reload(false);
    console.log(error);
  }
}