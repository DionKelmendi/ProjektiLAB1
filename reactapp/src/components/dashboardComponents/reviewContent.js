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
    <div className="reviewRating">
      <div>
        {star}
        {white}
      </div>
    </div>
  )
}

export default function ReviewContent({ car_name, comment, ratingAmount }) {

  let read = "";

  if (comment.length > 100) {

    comment = comment.substring(0, 100);
    comment = comment + "...";

    read = "Read More";
  }

  const starAmount = stars(ratingAmount)['props']['children'];

  const fullStar = starAmount['props']['children'][0];
  const blankStar = starAmount['props']['children'][1];
  const totalStars = fullStar.concat(blankStar);

  return (

    <div className='reviewContent'>

      <h1>{car_name[0][0] + " " + car_name[0][1]}</h1>

      <div className='reviewRating'>
        <div>
          <i className={totalStars[0]['props']['className']}></i>
          <i className={totalStars[1]['props']['className']}></i>
          <i className={totalStars[2]['props']['className']}></i>
          <i className={totalStars[3]['props']['className']}></i>
          <i className={totalStars[4]['props']['className']}></i>
        </div>
      </div>

      <div className='comment'>

        <p>{comment}</p>
      </div>

      <p className="readMore">{read}</p>

    </div>
  )
}