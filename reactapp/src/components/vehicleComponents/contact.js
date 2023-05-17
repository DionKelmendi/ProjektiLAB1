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
          <h4>Name</h4>
          <h3>+386 49 104 108</h3>
        </div>
      </div>

      <div>
        <img src={icon} />
        <div>
          <h4>Name</h4>
          <h3>+386 49 104 108</h3>
        </div>
      </div>

      <div>
        <img src={icon} />
        <div>
          <h4>Name</h4>
          <h3>+386 49 104 108</h3>
        </div>
      </div>
    </div>
  )
}