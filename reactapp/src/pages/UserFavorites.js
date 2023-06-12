import { React, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import FavoriteItem from "../components/dashboardComponents/favoriteItem";
import Footer from "../components/footer";
import CarItem from "../components/carComponents/carItem";

export default function UserFavorites() {

  const location = useLocation();
  const [id, setId] = useState([])
  const [data, getData] = useState([])
  const [favId, getFavId] = useState([])
  const [removeId, setRemoveId] = useState([])

  useEffect(() => {
    if (location.state) {
      setId(location.state.id);
    } else {
      window.location.replace("/dashboard");
    }
  }, [location.state]);

  useEffect(() => {
    const fetchData = (id) => {
      const API = 'http://127.0.0.1:8000/prova/favorite/user/' + id + "/all/";
      if (typeof id == 'number') {
        fetch(API)
          .then((res) => res.json())
          .then((res) => {
            getData(res.cars);
            getFavId(res.fav_ids);
          });
      }
    };
    fetchData(id);
  }, [id])


  function toggleRemove(e) {

    document.querySelector(".removeWindow").classList.toggle("show")
    let fav_id = e.target.id;
    setRemoveId(fav_id);
  }

  function remove() {
    fetch('http://127.0.0.1:8000/prova/favorite/' + removeId + '/destroy', {

      method: 'DELETE',
      mode: 'cors',

    }).then(response => {
      window.location.reload()
    });

  }

  return (
    <>
      <section className="userFavoritesMain">
        <h1 className="favoriteTitle">Your Favorite Cars</h1>
        {data && data.length > 0 ? (
          <div className="container">
            {data.map((item, i) => {
              // return <>
              //   <div className="rowContainer" >
              //     <div className="rowHeader">
              //       <p className="brand">Brand</p>
              //       <p className="year">Year</p>
              //       <p className="name">Car Name</p>
              //       <p className="mileage">Mileage</p>
              //       <p className="price">Price</p>
              //     </div>
              //     <FavoriteItem id={item.id} img={item.make} year={item.year} mileage={item.mileage} price={item.price} name={item.make + " " + item.model} />
              //     <div className="removeRow">
              //       <p id={favId[i]} onClick={toggleRemove}>Remove from favorites</p>
              //     </div>
              //   </div>
              // </>
              return <>
                <div className="rowContainer">
                  <CarItem key={item.id} id={item.id} image={item.imageName} logo={item.make} name={item.make + " " + item.model} price={item.price} year={item.year} mileage={item.mileage} sold={item.sold} />
                  <div className="removeRow">
                    <p id={favId[i]} onClick={toggleRemove}>Remove from favorites</p>
                  </div>
                </div>
              </>
            })}
          </div>
        ) : (
          <div>No Results</div>
        )}

        <div className="removeWindow">
          <form>
            <h1>Are you sure?</h1>
            <div className="buttons">
              <p className="yes" onClick={remove}>Yes</p>
              <p className="goBack" onClick={toggleRemove}>Go Back</p>
            </div>
          </form>
        </div>
      </section >
      <Footer />
    </>
  )
}