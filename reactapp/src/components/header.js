import { React } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Header() {

  useEffect(() => {

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {

      let path = window.location.pathname;
      if (((document.documentElement.scrollTop > (window.innerHeight - 50) && document.documentElement.scrollTop < (2 * window.innerHeight - 50)) || document.documentElement.scrollTop > (3 * window.innerHeight - 50)) || path !== "/") {
        document.querySelectorAll(".listItem").forEach(li => {
          li.style.color = "black";
        });
        document.querySelector(".navBrand").style.color = "black";
      } else {
        document.querySelectorAll(".listItem").forEach(li => {
          li.style.color = "white";
        });
        document.querySelector(".navBrand").style.color = "white";
      }
    }
  }, [])

  return (
    <header>
      <nav>
        <div>
          <Link className="navBrand" to='/'>
            <h1>Auto Paradise</h1>
          </Link>
        </div>
        <ul className="">
          {/* <li><Link className='listItem' to="/about"> ABOUT </Link></li> */}
          <li><Link className='listItem' to="/cars"> VEHICLES </Link></li>
          <li><Link className='listItem' to="/contact"> CONTACT US </Link></li>
          <li><Link className='listItem' to="/signIn"><button className="signInButton">SIGN IN</button></Link></li>
        </ul>
      </nav>
    </header>
  )
}