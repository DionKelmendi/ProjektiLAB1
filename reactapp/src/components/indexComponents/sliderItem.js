import { React } from "react";
import { Link } from "react-router-dom";

export default function SliderItem({ id, image, name, description }) {

  return (
    <div className="sliderItem hidden">
      {id ?

        <Link to={"/vehicle?id=" + id}><img src={require('../../images/' +
          image)} /></Link>
        : <>
          <a href="#"><img src={require('../../images/' +
            image)} /></a>
        </>}
      <h1>{name}</h1>
      {id ?
        <Link to={"/vehicle?id=" + id}><button> View Car </button></Link>
        : <></>}
    </div>
  )
}