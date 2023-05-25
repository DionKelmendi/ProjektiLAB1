import { React } from 'react'
import './vehicle.css';
import CarInfo from "./carInfo";
import Golf7 from "../../images/Golf7.webp";
import Golf7_2 from "../../images/Golf7_2.webp";
import backview from "../../images/backview.webp";
import interior1 from "../../images/interior1.webp"
import interior2 from "../../images/interior2.webp"
import interior3 from "../../images/interior3.webp"
import interior4 from "../../images/interior4.webp"
import trunk from "../../images/trunk.webp"
import VW from "../../images/logos/Volkswagen.webp"
import { useEffect } from "react";

export default function ImageSlider() {

  useEffect(() => {

    const carousel = document.querySelector(".carousel"),
      firstImg = carousel.querySelectorAll("img")[0],
      arrowIcons = document.querySelectorAll(".wrapper i");
    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
    const showHideIcons = () => {
      // showing and hiding prev/next icon according to carousel scroll left value
      let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
      arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
      arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
    }
    arrowIcons.forEach(icon => {
      icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
      });
    });
    const autoSlide = () => {
      // if there is no image left to scroll then return from here
      if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
      positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
      let firstImgWidth = firstImg.clientWidth + 14;
      // getting difference value that needs to add or reduce from carousel left to take middle img center
      let valDifference = firstImgWidth - positionDiff;
      if (carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
      }
      // if user is scrolling to the left
      carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    const dragStart = (e) => {
      // updatating global variables value on mouse down event
      isDragStart = true;
      prevPageX = e.pageX;
      prevScrollLeft = carousel.scrollLeft;

    }
    const dragging = (e) => {
      // scrolling images/carousel to left according to mouse pointer
      if (!isDragStart) return;
      e.preventDefault();
      isDragging = true;
      carousel.classList.add("dragging");
      positionDiff = (e.pageX) - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDiff;


      showHideIcons();
    }
    const dragStop = () => {
      isDragStart = false;
      carousel.classList.remove("dragging");
      if (!isDragging) return;
      isDragging = false;
      autoSlide();
    }
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);
    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);

  }, [])

  return (
    <>
      <div className='mainSliderContainer'>
        <img className='carLogoMain' src={VW} />
        <h1 className='carName'>Volkswagen Golf 7</h1>
        <div className='wrapperContainer'>

          <div className="wrapper">
            <i id="left" className="fa-solid fa-angle-left"></i>
            <div className="carousel">
              <img src={Golf7} alt="img" draggable="false" />
              <img src={Golf7_2} alt="img" draggable="false" />
              <img src={backview} alt="img" draggable="false" />
              <img src={interior1} alt="img" draggable="false" />
              <img src={interior2} alt="img" draggable="false" />
              <img src={interior3} alt="img" draggable="false" />
              <img src={interior4} alt="img" draggable="false" />
              <img src={trunk} alt="img" draggable="false" />
            </div>
            <i id="right" className="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <hr />
        <CarInfo make={"Volkswagen"} model={"Golf 7"} year={2020} mileage={10000} fuel={"Diesel"} transmission={"Automatic"} color={"Yellow"} engine={"2.0"} />
      </div>
    </>
  )
}