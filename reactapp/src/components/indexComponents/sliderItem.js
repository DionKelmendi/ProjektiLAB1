import { React } from "react";

export default function SliderItem({ image, name, description }) {

  return (
    <div className="sliderItem hidden">
      <a href="#"><img src={image} /></a>
      <h1>{name}</h1>
      <h4>{description}</h4>
      <a href="#"><button> View Car </button></a>
    </div>
  )
}