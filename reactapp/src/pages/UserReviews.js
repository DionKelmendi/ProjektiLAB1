import { React, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

export default function UserReviews() {
  const location = useLocation();
  const [id, setId] = useState([])
  const [reviewData, getReviewData] = useState([])

  useEffect(() => {
    if (location.state) {
      setId(location.state);
    } else {
      window.location.replace("/dashboard");
    }
  }, [location.state]);

  useEffect(() => {
    const fetchReviewData = (id) => {
      const reviewAPI = 'http://127.0.0.1:8000/prova/review/user/' + id + "/all/";
      if (id) {
        fetch(reviewAPI)
          .then((res) => res.json())
          .then((res) => {
            getReviewData(res.results);
            console.log(res.results);
          });
      }
    };
    fetchReviewData(id);
  }, [id])


  return (
    <h1>Hi!</h1>
  )
}