import { React } from "react";
import Dwayne from "../../images/dwayne.jpg"
import Person1 from "../../images/person1.webp"
import Person2 from "../../images/person2.webp"
import Person3 from "../../images/person3.webp"
import ReviewItem from "./reviewItem";

const review = "I really had an excellent experience at Auto Paradise.The salesperson was patient and helpful, and I never felt pressured to make a purchase"

export default function Reviews() {

  return (
    <section className="reviews">
      <h2 className="reviewTitle">What are our clients saying?</h2>
      <div className="container">

        <ReviewItem image={Dwayne} name={"Dwayne Johnson"} review={review} ratingAmount={5} />
        <ReviewItem image={Person1} name={"Melihate Sejdiu"} review={review} ratingAmount={3} />
        <ReviewItem image={Person2} name={"Zymer Bregtalia"} review={review} ratingAmount={3} />
        <ReviewItem image={Person3} name={"Erin Orana"} review={review} ratingAmount={3} />
      </div>
    </section>
  )
}