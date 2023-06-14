import { React, useEffect } from "react";
import { useLocation } from 'react-router-dom'

export default function Table() {
  const location = useLocation();
  window.scrollTo(0, 0);

  useEffect(() => {

    const { data } = location.state;
    var table = document.getElementById("table");

    if (!(table.rows.length > 2)) {

      let count = 0;
      let year = 1;

      data.forEach(element => {

        var row = table.insertRow();
        var cell0 = row.insertCell();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();

        cell0.innerHTML = (count + 1) + (12 * (year - 1));
        cell1.innerHTML = "$ " + element[0].toLocaleString("en-US", { maximumFractionDigits: 2 });
        cell2.innerHTML = "$ " + element[1].toLocaleString("en-US", { maximumFractionDigits: 2 });
        cell3.innerHTML = "$ " + element[2].toLocaleString("en-US", { maximumFractionDigits: 2 });
        cell4.innerHTML = "$ " + element[3].toLocaleString("en-US", { maximumFractionDigits: 2 });

        count++;
        if (count === 12) {
          row = table.insertRow();
          cell1 = row.insertCell();
          cell1.colSpan = "5"
          cell1.style.textAlign = 'center'
          cell1.style.color = '#ffc107'
          cell1.innerHTML = "End of year " + year++;

          count = 0;
        }
      });
    }

  }, [])

  return (
    <div className="loanTable">
      <table id="table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Balance</th>
            <th>Interest</th>
            <th>Principal</th>
            <th>Monthly Payment</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}