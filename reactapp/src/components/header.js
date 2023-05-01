import { React } from 'react'
import { Link } from 'react-router-dom';

export default function Header() {


  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {

    if ((document.documentElement.scrollTop > (window.innerHeight - 50) && document.documentElement.scrollTop < (2 * window.innerHeight - 50)) || document.documentElement.scrollTop > (3 * window.innerHeight - 50)) {

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

  return (
    <header>
      <nav>
        <div>
          <Link className="navBrand" to='/'>
            <h1>Autosalloni</h1>
          </Link>
        </div>
        <ul className="">
          <li><Link className='listItem' to="/about"> ABOUT </Link></li>
          <li><Link className='listItem' to="/products"> PRODUCTS </Link></li>
          <li><Link className='listItem' to="/contact"> CONTACT US </Link></li>
        </ul>
      </nav>
    </header>
  )
}