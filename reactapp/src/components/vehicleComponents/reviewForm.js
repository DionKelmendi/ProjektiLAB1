import React, { useState } from 'react';
import './vehicle.css';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCarModelChange = (event) => {
    setCarModel(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement the logic to submit the review here
    console.log('Submitting review:', { name, carModel, review, rating });
    // Reset form fields
    setName('');
    setCarModel('');
    setReview('');
    setRating(0);
  };

  return (
    <form className="reviewForm" onSubmit={handleSubmit}>
      <h2 id="reviewId">Car Review Form</h2>
      <div>
        <label htmlFor="name">Your Name:</label><br />
        <input className='reviewInput' type="text" id="name" value={name} onChange={handleNameChange} required />
      </div>
      <div>
        <label htmlFor="carModel">Car Model:</label>
        <input className='reviewInput' type="text" id="carModel" value={carModel} onChange={handleCarModelChange} required />
      </div>
      <div>
        <label htmlFor="review" className="reviewR">Review:</label>
        <textarea
          id="review"
          value={review}
          className='reviewInput'
          onChange={handleReviewChange}
          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          required
        />
      </div>
      <div>
        <label id="reviewLabel" htmlFor="rating">Rating:</label>
        <input className="reviewInput" type="number" id="rating" min="1" max="5" value={rating} onChange={handleRatingChange} required />
      </div>
      <button id="reviewButton" type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
