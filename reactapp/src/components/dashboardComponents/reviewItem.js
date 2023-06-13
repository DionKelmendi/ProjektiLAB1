import { Link } from 'react-router-dom';

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

export default function ReviewContent({ id, username, carId, car_name, comment, ratingAmount, review_date }) {

  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  review_date = new Date(review_date).toLocaleString('en-US', options);

  const starAmount = stars(ratingAmount)['props']['children'];

  const fullStar = starAmount['props']['children'][0];
  const blankStar = starAmount['props']['children'][1];
  const totalStars = fullStar.concat(blankStar);


  function openComment(id) {
    if (id != "") {
      let comment = document.querySelector("#comment" + id);
      comment.style.height = "auto";
      comment.style.boxShadow = "0 0px 10px 5px rgba(0, 0, 0, 0.5)";
    }
  }

  function closeComment(id) {
    if (id != "") {
      let comment = document.querySelector("#comment" + id);
      comment.style.height = 50 + "px";
      comment.style.boxShadow = "none";
    }
  }

  return (

    <>
      <Link to={"/vehicle?id=" + carId}>
        <div className='favoriteItem'>
          {car_name ?
            <p className="carNames">{car_name[0][0] + " " + car_name[0][1]}</p>
            : <></>
          }
          {username ?
            <p className="username"><b>{username}:</b></p>
            : <></>
          }
          <div className='reviewRating'>
            <div>
              <i className={totalStars[0]['props']['className']}></i>
              <i className={totalStars[1]['props']['className']}></i>
              <i className={totalStars[2]['props']['className']}></i>
              <i className={totalStars[3]['props']['className']}></i>
              <i className={totalStars[4]['props']['className']}></i>
            </div>
          </div>
          <div id={"comment" + id} onMouseEnter={() => openComment(id)} onMouseLeave={() => closeComment(id)} className='comment'>
            <p>{comment}</p>
          </div>
          {review_date ? <p className='date'>{review_date}</p> : ""}
          {car_name ?
            <div className='arrow'>
              <i className="fa-solid fa-arrow-right"></i>
            </div> : <></>
          }
        </div>
      </Link>
    </>
  )
}