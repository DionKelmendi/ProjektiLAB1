export default function ReviewContent({ car_name, comment }) {

  let read = "";

  if (comment.length > 120) {

    comment = comment.substring(0, 120);
    comment = comment + "...";

    read = "Read More";
  }

  return (

    <div className='reviewContent'>

      <h1>{car_name[0][0] + " " + car_name[0][1]}</h1>

      <div className='reviewRating'>
        <div>
          <i className="fa fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </div>
      </div>

      <div className='comment'>

        <p>{comment}</p>
      </div>

      <p className="readMore">{read}</p>

    </div>
  )
}