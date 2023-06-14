import { React } from "react";

function stars(ratingAmount) {

  let star = [];

  for (let i = 0; i < ratingAmount; i++) {

    star.push(<i className="fa fa-star" key={i}></i>)
  }
  let white = [];
  for (var i = 0; i < (5 - ratingAmount); i++) {
    white.push(<i className="fa-regular fa-star" key={i}></i>)
  }

  return (
    <div className="rating">
      {star}
      {white}
    </div>
  )
}

export default function ReviewItem({ image, name, review, ratingAmount }) {

  const starAmount = stars(ratingAmount);

  const fullStar = starAmount['props']['children'][0];
  const blankStar = starAmount['props']['children'][1];
  const totalStars = fullStar.concat(blankStar);

  return (
    <div className="reviewCard">
      <img className="profilePic" src={require('../../images/' +
        image)} />
      <h4>{name}</h4>
      <p>"{review}"</p>
      <div className="star">
        <i className={totalStars[0]['props']['className']}></i>
        <i className={totalStars[1]['props']['className']}></i>
        <i className={totalStars[2]['props']['className']}></i>
        <i className={totalStars[3]['props']['className']}></i>
        <i className={totalStars[4]['props']['className']}></i>
      </div>
    </div >
  )
}