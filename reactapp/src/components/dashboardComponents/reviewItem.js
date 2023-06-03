import { Link } from 'react-router-dom';
import ReviewContent from './reviewContent';
import { useEffect, useState } from 'react';

export default function ReviewItem() {
  const [reviewData, setReviewData] = useState([]);

  const ReviewAPI = 'http://127.0.0.1:8000/prova/review/user/6/';

  const fetchReviewData = () => {
    fetch(ReviewAPI)
      .then((res) => res.json())
      .then((res) => {
        setReviewData(res);
        console.log(res);
      });
  };

  useEffect(() => {
    fetchReviewData();
  }, []);

  return (
    <div className='userReviews item'>
      <h1>Most Recent Review</h1>

      {reviewData.length > 0 && (
        <Link to="/vehicle?id=1">
          <ReviewContent car_name={reviewData[0].car_name} comment={reviewData[0].comment} />
        </Link>
      )}

      <Link to="/reviews">
        <button>See all reviews</button>
      </Link>
    </div>
  );
}
