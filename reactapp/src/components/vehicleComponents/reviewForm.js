import { React, useState, useEffect } from 'react';
import './vehicle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReviewItem from '../dashboardComponents/reviewItem';

const ReviewForm = ({ userData, data }) => {

  const [reviewData, getReviewData] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  useEffect(() => {

    const fetchReviewData = () => {
      const reviewAPI = 'http://127.0.0.1:8000/prova/review/car/' + data.id + "/?ordering=-review_date";
      if (data.id) {

        fetch(reviewAPI)
          .then((res) => res.json())
          .then((res) => {
            getReviewData(res.results);
          });
      };
    }
    fetchReviewData();
  }, [data.id])

  const handleSubmit = (event) => {
    event.preventDefault();
    let user = userData.id;
    let car = data.id;
    let reviewBody = { user, car, comment, rating };

    const API = 'http://127.0.0.1:8000/prova/review/';
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewBody)
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      })

    setComment('');
    setRating(0);
    window.location.reload(true);
  }

  return (
    <>
      <div className="reviewForm">
        <div className='container'>
          {userData.id ? (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="comment" className="reviewR">Comment:</label>
                <textarea
                  id="comment"
                  placeholder='Leave a comment...'
                  value={comment}
                  className='reviewInput'
                  onChange={handleCommentChange}
                  onInput={(e) => {
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  required
                />
              </div>
              <div className='bottomRow'>
                <div>
                  <label id="reviewLabel" htmlFor="rating">Rating:</label>
                  <div className="starRating">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <FontAwesomeIcon
                        key={value}
                        icon={faStar}
                        className={`star ${value <= rating ? 'active' : ''}`}
                        onClick={() => handleRatingClick(value)}
                        style={{ cursor: 'pointer' }}
                      />
                    ))}
                  </div>
                </div>
                <input type="hidden" name="rating" value={rating} />
                <button id="reviewButton" type="submit">Submit Review</button>
              </div>
            </form>
          ) : (
            <></>
          )}
          {reviewData ?
            <>
              <div className='allReviews'>
                {reviewData.map((item, i) => {
                  return (
                    <>
                      <ReviewItem id="" carId={data.id} username={item.user_name[0]} ratingAmount={item.rating} comment={item.comment} review_date={item.review_date} />
                      {/* <h1>{item.user_name[0]}: {item.comment} {item.review_date}</h1> */}
                    </>
                  )
                })}
              </div>
            </> :
            <></>}
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
