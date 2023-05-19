import React from 'react';
import { Link } from 'react-router-dom';

export default function Calculator() {

  let table = [];

  function calc() {

    let form = document.querySelector(".calculator").children;

    let amount = parseInt(form[1].children[2].value);
    let term = parseInt(form[2].children[2].value);
    let interestRate = parseInt(form[3].children[2].value);

    let message = "";

    if (isNaN(amount)) {
      message = message.concat("Amount is not a number or is improperly written. \n")
    }
    if (isNaN(term)) {
      message = message.concat("Term is not a number or is improperly written. \n")
    }
    if (isNaN(interestRate)) {
      message = message.concat("Interest Rate is not a number or is improperly written. \n")
    }

    if (message === "") {

      interestRate = interestRate * 0.01;
      let iPm = interestRate / 12;

      let monthlyPayment = amount * iPm;
      monthlyPayment = monthlyPayment / (1 - Math.pow((1 + iPm), (-12) * term))

      while (amount > 0) {

        let interest = (amount / 12) * interestRate;
        let principal = monthlyPayment - interest;

        let row = [amount, interest, principal, monthlyPayment]
        table.push(row)

        amount -= principal;
      }

      document.querySelector(".loanTableButton").classList.remove("hidden")
      document.querySelector(".loanTableButton").disabled = false;
    } else {
      alert(
        "Your credit couldn't be calculated because:\n\n" +
        message
      )
    }
  }

  function getTable() {
    return table;
  }

  return (
    <div className="calculator vItem">
      <h1>Credit Calculator</h1>

      <div>
        <label htmlFor="amount"> Loan Amount </label><br></br>
        <input name="amount" type="number" required /><br></br>
      </div>

      <div>
        <label htmlFor="term"> Loan Term (In years) </label><br></br>
        <input name="term" type="number" required /><br></br>
      </div>

      <div>
        <label htmlFor="interest"> Interest Rate (%) </label><br></br>
        <input name="interest" type="number" required /><br></br>
      </div>

      <input type="submit" value="Calculate" onClick={calc} />

      <Link to={'/table'} state={{ data: getTable() }}>
        <button type="button" className='loanTableButton hidden' disabled> Show Table </button>
      </Link>
    </div>
  )
}