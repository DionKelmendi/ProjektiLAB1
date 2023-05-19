import React from "react";
import icon from "../../images/icon.webp"

export default function Contact() {
  return (
    <div className="contact vItem">

      <h1>Contact Us</h1>
      <h2>Sale Agents</h2>

      <div>
        <img src={icon} />
        <div>
          <h4>Dion Kelmendi</h4>
          <h3>+386 49 123 456</h3>
        </div>
      </div>

      <div>
        <img src={icon} />
        <div>
          <h4>Blend Podvorica</h4>
          <h3>+386 49 789 012</h3>
        </div>
      </div>

      <div>
        <img src={icon} />
        <div>
          <h4>Donat Budakova</h4>
          <h3>+386 49 345 678</h3>
        </div>
      </div>
    </div>
  )
}