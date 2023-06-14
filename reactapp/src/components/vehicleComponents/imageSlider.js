import { React, useEffect, useState } from 'react'
import './vehicle.css';
import CarInfo from "./carInfo";

export default function ImageSlider({ userData, data, imageData }) {
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
        const carousel = document.querySelector(".carousel"),
          firstImg = carousel.querySelectorAll("img")[0],
          arrowIcons = document.querySelectorAll(".wrapper i");
        let firstImgWidth = firstImg.clientWidth + 20;
        carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
      });
    });
    const autoSlide = () => {
      const carousel = document.querySelector(".carousel"),
        firstImg = carousel.querySelectorAll("img")[0],
        arrowIcons = document.querySelectorAll(".wrapper i");
      if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
      positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
      let firstImgWidth = firstImg.clientWidth + 14;
      let valDifference = firstImgWidth - positionDiff;
      if (carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
      }
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

  const [errorMessage, setErrorMessage] = useState("")

  const favorite = (e) => {

    e.target[2].style.background = "orange";
    e.preventDefault()
    const API = 'http://127.0.0.1:8000/prova/favorite/';
    let data = { user: e.target[0].value, car: e.target[1].value }
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {

        if (result[0]) {
          setErrorMessage(result[0])
        } else {
          setErrorMessage("Added to favorites")
        }
      })
  }

  return (
    <>
      {userData ? (
        <>
          <div className='favoriteButton'>
            <form onSubmit={favorite}>
              <input type='hidden' name="user_id" defaultValue={userData.id} />
              <input type='hidden' name="car_id" defaultValue={data.id} />
              <button type='submit'><i className="fa-regular fa-star" /> Favorite</button>
            </form>
            {errorMessage != "" ? <p className='errorP'><i className="fa-solid fa-circle-exclamation"></i> {errorMessage} </p> : <></>}
          </div>
          {data.sold ? <></> : <>

            {data.reservedlink === null
              ?
              <button type='submit' id="reservebutton" className='favoriteButton'> Payment not yet offered</button>
              :
              <a href={data.reservedlink}>
                <button type='submit' id="reservebutton" className='favoriteButton'> Reserve for 100$ </button>
              </a>}
          </>}

        </>
      ) : (
        <></>
      )}
      <div className='mainSliderContainer'>
        {data ? (
          <img className="carLogoMain" src={require("../../images/logos/" + data.make + ".webp")} alt="img" draggable="false" />
        ) : (
          <></>
        )}
        <h1 className='carName'>{data.make} {data.model}</h1>
        <div className='wrapperContainer'>

          <div className="wrapper">
            <i id="left" className="fa-solid fa-angle-left"></i>
            <div className="carousel">
              {data ? (
                <img src={require("../../images/" + data.imageName)} alt="img" draggable="false" />
              ) : (
                <></>
              )}
              {imageData && imageData.length > 0 ? (
                <>
                  {imageData.map((item, i) => (
                    <img key={i} src={require("../../images/" + item.imageName)} alt="img" draggable="false" />
                  ))}
                </>
              ) : (
                <>
                  <img src={require("../../images/No_Image_Available.jpg")} alt="img" draggable="false" />
                  <img src={require("../../images/No_Image_Available.jpg")} alt="img" draggable="false" />
                </>
              )}
            </div>
            <i id="right" className="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <hr />
        <CarInfo make={data.make} model={data.model} year={data.year} mileage={data.mileage} fuel={data.fuel} transmission={data.transmission} color={data.color} engine={data.engine} />
      </div>
    </>
  )
}