import { React } from "react";
import SliderItem from "./sliderItem"
import { useRef, useEffect } from "react";
import porsche from "../../images/porsche.webp"
import diablo from "../../images/diablo.webp"
import mclaren from "../../images/mclaren.webp"
import ferrari from "../../images/ferrari.webp"
import audiA8 from "../../images/audiA8.webp"
import filler from "../../images/fillerCar.webp"

export default function CarSlider() {
  const prova = useRef();
  const description = "Long description containing enticing informacion about this very car! Yes, it is a very good vehicle you should consider buying it! Offer wont last long, if there is an offer that is :P";

  useEffect(() => {
    const slider = prova.current;
    const items = slider['childNodes'];

    let count = 1;
    let x = 1500;
    items[1].classList.remove("hidden");

    function loop() {
      slider.style.transform = ("translateX(" + x + "px)");
      x -= 750;

      if (count != 1) {
        items[(count - 1)].classList.add("hidden");
      } else {
        items[(items.length - 2)].classList.add("hidden");
      }

      items[count].classList.remove("hidden");
      count++;

      if (x < -1500) {
        x = 1500;
        count = 1;
        items[1].classList.remove("hidden");
      }

      setTimeout(loop, 3000);
    }

    loop();
  }, [])

  return (
    <section className="carSlider">
      <div className="sliderContainer" ref={prova}>
        <SliderItem image={filler} name="Car name" description={description} />
        <SliderItem image={porsche} name="Porsche 718 Spyder" description={description} />
        <SliderItem image={diablo} name="Lamborghini Diablo VT 6.0" description={description} />
        <SliderItem image={mclaren} name="McLaren 600LT" description={description} />
        <SliderItem image={ferrari} name="Ferrari 812 Superfast" description={description} />
        <SliderItem image={audiA8} name="Audi R8" description={description} />
        <SliderItem image={filler} name="Car name" description={description} />
      </div>
    </section >
  )
}
