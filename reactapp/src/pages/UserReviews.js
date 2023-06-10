import { React, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import ReviewItem from "../components/dashboardComponents/reviewItem";

export default function UserReviews() {
  const location = useLocation();
  const [id, setId] = useState([])
  const [data, getData] = useState([])
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
      const API = 'http://127.0.0.1:8000/prova/review/user/' + id + "/all/";
      if (typeof id == 'number') {
        fetch(API)
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            getData(res.results);
          });
      }
    };
    fetchData(id);
  }, [id])

  function toggleRemove(e) {

    document.querySelector(".removeWindow").classList.toggle("show")
    let rev_id = e.target.id;
    setRemoveId(rev_id);
  }

  function remove() {
    console.log(removeId);

    fetch('http://127.0.0.1:8000/prova/review/' + removeId + '/destroy', {  // Enter your IP address here

      method: 'DELETE',
      mode: 'cors',

    }).then(response => {
      window.location.reload()
    });

  }

  return (
    <>
      <section className="userReviewsMain">
        <h1 className="favoriteTitle">Your Reviews</h1>

        {data && data.length > 0 ? (
          <div className="container">
            {data.map((item, i) => {
              return <>
                <div className="rowContainer" >
                  <ReviewItem key={i} id={item.id} carId={item.car_id} car_name={item.car_name} comment={item.comment} ratingAmount={item.rating} review_date={item.review_date} />
                  <div className="removeRow">
                    <p id={item.id} onClick={toggleRemove}>Remove from reviews</p>
                  </div>
                </div>
                {/* <p key={i}>{item.car_id} {item.car_name[0] + " " + item.car_name[1]} {item.comment} {item.review_date}</p> */}
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
      </section>
    </>
  )
}