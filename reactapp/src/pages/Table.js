import { React, useEffect } from "react";
import { useLocation } from 'react-router-dom'

export default function Table() {
  const location = useLocation();
  const { data } = location.state;

  useEffect(() => {

    var table = document.getElementById("table");

    if (!(table.rows.length > 2)) {

      data.forEach(element => {

        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();

        cell1.innerHTML = "$ " + element[0].toFixed(2);
        cell2.innerHTML = "$ " + element[1].toFixed(2);
        cell3.innerHTML = "$ " + element[2].toFixed(2);
        cell4.innerHTML = "$ " + element[3].toFixed(2);
      });
    }

  }, [])

  return (
    <div className="loanTable">
      <table id="table">
        <thead>
          <tr>
            <th>Balance</th>
            <th>Interest</th>
            <th>Principal</th>
            <th>Monthly Payment</th>
          </tr>
        </thead>
        <tr>
          <td colSpan={4}> Year One </td>
        </tr>
      </table>
    </div>
  )
}