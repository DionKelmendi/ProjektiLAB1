import { React } from "react";
import Footer from "../components/footer";
import ImageSlider from "../components/vehicleComponents/imageSlider";
import MiddleContent from "../components/vehicleComponents/middleContent";
import Categories from "../components/indexComponents/categories";
import ReviewForm from "../components/vehicleComponents/reviewForm";

export default function Cars() {

  return (
    <>
      <div className="vehicle">
        <ImageSlider />
        <MiddleContent />
        <div className="carMain">
          <Categories />

        </div>
        <div>
          <ReviewForm />
        </div>
      </div>
      <Footer />
    </>
  )
}