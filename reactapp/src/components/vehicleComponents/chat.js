import React from "react";
import icon from "../../images/icon.webp"
import { Link } from "react-router-dom";

export default function Chat() {
  return (
    <div className="chat vItem">

      <h1>Do you have a question?</h1> <br />
      <h3>We can answer your questions here:</h3>

      <Link to={"/chatGPT/"}>
        <button className="aiButton">
          Talk to an AI &ensp; <i className="fa-solid fa-code-branch"></i>
        </button>
      </Link>
      <button className="staffButton">Talk to staff &ensp; <i className="fa-solid fa-clipboard-user"></i> </button>

      <br /><br /> <h3>Or you can call us here:</h3>

    </div>
  )
}