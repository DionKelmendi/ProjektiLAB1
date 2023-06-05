import { React, useEffect } from 'react'

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
          <h4><b>Explore</b></h4><br />
          <a href="#"><p>History</p></a>
          <a href="#"><p>Location</p></a>
          <a href="#"><p>Team</p></a>
          <a href="#"><p>Media</p></a>
        </div>

        <div className='item'>
          <h4><b>Shop</b></h4><br />
          <a href="#"><p>History</p></a>
          <a href="#"><p>Location</p></a>
          <a href="#"><p>Team</p></a>
          <a href="#"><p>Media</p></a>
        </div>

        <div className='item'>
          <h4><b>Support</b></h4><br />
          <a href="http://localhost:3000/contact"><p>Contact</p></a>
          <a href="http://localhost:3000/aboutus"><p>About Us</p></a>
          <a href="#"><p>History</p></a>
          <a href="#"><p>Location</p></a>
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