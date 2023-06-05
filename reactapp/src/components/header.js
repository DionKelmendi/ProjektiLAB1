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

  function toggleMenu() {

    let content = document.querySelector(".contentList");
    content.classList.toggle("contentHidden");

  }

  return (
    <header>
      <nav>
        <div>
          <Link onClick={() => {

            let content = document.querySelector(".contentList");
            content.classList.add("contentHidden")
          }}
            className="navBrand" to='/'>
            <h1>Auto Paradise</h1>
          </Link>
        </div>
        <div className='content'>
          <ul className="contentList contentHidden">
            {/* <li><Link className='listItem' to="/about"> ABOUT </Link></li> */}
            <li><Link onClick={toggleMenu} className='listItem' to="/cars"> VEHICLES </Link></li>
            <li><a onClick={toggleMenu} className='listItem' href="http://127.0.0.1:8000/chatGPT/"> CAR ASSISTANT </a></li>
            <li><Link onClick={toggleMenu} className='listItem' to="/contact"> CONTACT US </Link></li>
            <li><Link onClick={toggleMenu} className='listItem' to="/signIn"><button className="signInButton">SIGN IN</button></Link></li>
          </ul>

          <a onClick={toggleMenu}>
            <i className="fa-solid fa-bars toggleMenu"></i>
          </a>
        </div>
      </nav>
    </header>
  )
}