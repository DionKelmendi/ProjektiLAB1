import { React, useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/autosallonLogo.png'

export default function Footer() {

  useEffect(() => {

    let rows = document.querySelector(".rows").children;
    let rowsArray = Array.prototype.slice.call(rows)

    let count = 0;

    rowsArray.forEach(element => {

      element.style.borderTop = count + "px solid #BDBDBD";
      if (count != 0) {

        element.style.marginTop = (17 - count) + "px";
      }
      count++;
    });
  }, [])

  return (
    <footer>

      <div className='container'>
        <div className='item'>
          <img id="footerLogo" src={logo} />
          <h4><b>AutosallonParadise</b></h4> <br />
          <p>Prishtine</p>
          <p>Dukagjini Center 10000</p>
          <p>Kosove</p>
        </div>

        <div className='item'>
          <h4><b>Links</b></h4><br />
          <Link to="/vehicles"><p>Vehicles</p></Link>
          <Link to="http://127.0.0.1:8000/chatGPT/"><p>Car Companion</p></Link>
          <Link to="/contact"><p>Contact</p></Link>
          <Link to="/aboutus"><p>About Us</p></Link>
          <Link to="/dashboard"><p>Dashboard</p></Link>
        </div>

        <div className='item'>
          <h4><b>Social Networks</b></h4><br />
          <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-square-snapchat"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>

          <br /><br />
          <p>Subscribe to our newsletter</p>
          <input type="text" placeholder='Enter email'></input>
          <input type="submit" value="Subscribe"></input>
        </div>
      </div>
      <hr />

      <h3>Copyright ©2023 Auto Paradise</h3>

      <div className='rows'>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </footer>
  )
}