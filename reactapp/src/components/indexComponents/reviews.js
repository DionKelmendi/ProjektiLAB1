import { React, useEffect, useState } from "react";
import ReviewItem from "./reviewItem";

export default function Reviews() {

  const [reviews, getReviews] = useState([])

  useEffect(() => {
    const fetchData = () => {
      const API = 'http://127.0.0.1:8000/prova/review/';
      fetch(API)
        .then((res) => res.json())
        .then((res) => {
          getReviews(res.results);
          console.log(res.results);
        });

    };
    fetchData();
  }, [])

  return (
    <section className="reviews">
      <h2 className="reviewTitle">What are our clients saying?</h2>
      <div className="container">

        {reviews.map((item, i) => {
          if (i < 4) {
            return (
              <ReviewItem image={item.car_image} key={item.id} name={item.user_name} review={item.comment} ratingAmount={item.rating} />
            )
          }
        })}
      </div>
    </section>
  )
}