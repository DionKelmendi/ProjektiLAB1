import { React } from 'react';
import { Link } from 'react-router-dom';

export default function CarItem({ id, image, logo, name, year, mileage, sold, price, userData, fromFavorites }) {

  try {

    return (
      <div className="carItem">
        {fromFavorites ? <></> :
          <>

            {userData.is_staff ? <div className='adminOverlay'>
              <a href={'http://127.0.0.1:8000/en/admin/autosallonApp/car/' + id + '/change/'}><i className="fa-solid fa-bars"></i></a>
            </div> : <></>}

          </>
        }

        <Link to={"/vehicle?id=" + id}>

          <img
            src={require('../../images/' +
              image)}
            className="carImg"
            alt="carImg"
          />

          {/* <img src={image} className="carImg" /> */}
          <div className="carDetails">
            {sold ? <div className='soldOverlay'></div> : ""}
            <img
              src={require('../../images/logos/' +
                logo + ".webp")}
              className="carLogo" alt="carLogo" />
            <h2>{name}</h2>
            <hr />
            {sold ? <h4 className='soldOverlayMessage'> Sold </h4> :
              <div>
                <h4><i className="fa-solid fa-dollar"></i> <br /> {price} </h4>
                <h4><i className="fa-solid fa-calendar-days"></i> <br /> {year} </h4>
                <h4><i className="fa-solid fa-gauge"></i> <br /> {mileage.toLocaleString("en-US")} km</h4>
              </div>
            }
          </div>
        </Link>
      </div>
    )
  } catch (error) {
    // window.location.reload(false);
    console.log(error);
  }
}