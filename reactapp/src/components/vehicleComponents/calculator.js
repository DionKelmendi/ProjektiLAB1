import React from 'react';
import { useEffect } from 'react';

export default function Calculator() {

  function calc() {

    let form = document.querySelector(".calculator").children;

    let amount = parseInt(form[1].children[2].value);
    let term = parseInt(form[2].children[2].value);
    let interest = parseInt(form[3].children[2].value);
    let compound = parseInt(form[4].children[2].value);

    let message = "";

    console.log(amount);
    console.log(term);
    console.log(interest);
    console.log(compound);

    if (isNaN(amount)) {
      message = message.concat("Amount is not a number or is improperly written. \n")
    }
    if (isNaN(term)) {
      message = message.concat("Term is not a number or is improperly written. \n")
    }
    if (isNaN(interest)) {
      message = message.concat("Interest is not a number or is improperly written. \n")
    }
    if (isNaN(compound)) {
      message = message.concat("Compound is not a number or is improperly written. \n")
    }

    if (message === "") {
      alert(Math.pow(3, -200));
    } else {
      alert(
        "Your credit couldn't be calculated because:\n\n" +
        message
      )
    }
  }

  return (
    <div className="calculator vItem">
      <h1>Credit Calculator</h1>

      <div>
        <label htmlFor="amount"> Loan Amount </label><br></br>
        <input name="amount" type="number" required /><br></br>
      </div>

      <div>
        <label htmlFor="term"> Loan Term </label><br></br>
        <input name="term" type="number" required /><br></br>
      </div>

      <div>
        <label htmlFor="interest"> Interest Rate </label><br></br>
        <input name="interest" type="number" required /><br></br>
      </div>

      <div>
        <label htmlFor="compound"> Compound </label><br></br>
        <input name="compound" type="number" required /><br></br>
      </div>

      <input type="submit" value="Calculate" onClick={calc} />
    </div>
  )
}