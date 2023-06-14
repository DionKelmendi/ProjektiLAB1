import { React, useState } from "react";
import SliderItem from "./sliderItem"
import { useRef, useEffect } from "react";

export default function CarSlider() {

  const [data, getData] = useState([])

  useEffect(() => {

    const fetchData = () => {
      const API = 'http://127.0.0.1:8000/prova/car/ads/';

      fetch(API)
        .then((res) => res.json())
        .then((res) => {
          getData(res.results);
        });
    }
    fetchData();

  }, [])


  const prova = useRef();
  const description = "Long description containing exiting informacion about this very car! Yes, it is a very good vehicle, and you should consider buying it! Offer wont last long!!!";

  useEffect(() => {

    if (prova.current.firstChild) {


      let imgWidth = document.querySelector(".sliderItem")['firstChild']['firstChild']['clientWidth'];

      const slider = prova.current;
      const items = slider['childNodes'];

      let count = 1;
      let x = 2 * imgWidth;
      items[1].classList.remove("hidden");

      function loop() {
        console.log("Count " + count);
        console.log("X " + x);
        slider.style.transform = ("translateX(" + x + "px)");
        x -= imgWidth;

        items[(items.length - 1)].classList.add("hidden");

        if (count != 1) {
          items[(count - 1)].classList.add("hidden");
        } else {
          items[(items.length - 2)].classList.add("hidden");
        }

        items[count].classList.remove("hidden");
        count++;

        if (x < -(2 * imgWidth)) {
          x = 2 * imgWidth;
          count = 1;
          items[1].classList.remove("hidden");
        }

        setTimeout(loop, 3000);
      }

      loop();
    }
  }, [data])

  return (
    <section className="carSlider">
      <div className="sliderContainer" ref={prova}>

        <SliderItem image={"fillerCar.webp"} name="Car name" description={description} />

        {data.map((item, i) => {
          return (
            <SliderItem id={item.id} image={item.imageName} name={item.make + " " + item.model} description={description} />
          )
        })}

        <SliderItem image={"fillerCar.webp"} name="Car name" description={description} />
      </div>
    </section >
  )
}
