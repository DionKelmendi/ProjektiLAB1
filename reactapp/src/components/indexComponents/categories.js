import { React } from "react";
import CategoryItem from "./categoryItem";
import BMW from "../../images/logos/BMW.webp";
import Mercedes from "../../images/logos/Mercedes.webp";
import Audi from "../../images/logos/Audi.webp";
import VW from "../../images/logos/Volkswagen.webp";
import Ford from "../../images/logos/Ford.webp";
import Hyndai from "../../images/logos/Hyndai.webp";
import Toyota from "../../images/logos/Toyota.webp";
import Mitsubishi from "../../images/logos/Mitsubishi.webp";
import Convertible from "../../images/logos/Convertible.webp";
import Hatchback from "../../images/logos/Hatchback.webp";
import SUV from "../../images/logos/SUV.webp";
import Wagon from "../../images/logos/Wagon.webp";

export default function Categories() {
  return (
    <section className="categories">
      <h2 className="findCar">Find Car By</h2>
      <div className="container">
        <div>
          <h4 className="categoryTitle">Featured Brands</h4>
          <div className="categoryList">
            <CategoryItem categoryLogo={BMW} categoryName='BMW' carAmount='3' />
            <CategoryItem categoryLogo={Mercedes} categoryName='Mercedes' carAmount='5' />
            <CategoryItem categoryLogo={Audi} categoryName='Audi' carAmount='9' />
            <CategoryItem categoryLogo={VW} categoryName='Volkswagen' carAmount='13' />

            <CategoryItem categoryLogo={Ford} categoryName='Ford' carAmount='3' />
            <CategoryItem categoryLogo={Hyndai} categoryName='Hyndai' carAmount='5' />
            <CategoryItem categoryLogo={Toyota} categoryName='Toyota' carAmount='9' />
            <CategoryItem categoryLogo={Mitsubishi} categoryName='Mitsubishi' carAmount='13' />
          </div>
        </div>

        <div>
          <h4 className="categoryTitle">Popular Categories</h4>

          <CategoryItem categoryLogo={Hatchback} categoryName='Hatchback' carAmount='23' />
          <CategoryItem categoryLogo={SUV} categoryName='SUV' carAmount='8' />
          <CategoryItem categoryLogo={Convertible} categoryName='Convertible' carAmount='5' />
          <CategoryItem categoryLogo={Wagon} categoryName='Station Wagon' carAmount='4' />
        </div>
      </div>
    </section>
  )
}