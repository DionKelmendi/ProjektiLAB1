import { React } from "react";
import Footer from '../components/footer'
import "../index.css";

import Aboutimg from '../images/heroImage.webp'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import { BiBook } from 'react-icons/bi';
import  { useState, useEffect } from 'react';

function AboutUS() {
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState('');

  const fullText = "At AutoParadise, we are passionate about cars and dedicated to providing an exceptional car buying experience.";

  useEffect(() => {
    let currentText = '';
    let index = 0;
    let typingInterval;

    if (isHovered) {
      typingInterval = setInterval(() => {
        currentText += fullText[index];
        setText(currentText);
        index++;

        if (index >= fullText.length) {
          clearInterval(typingInterval);
        }
      }, 80);
    } else {
      clearInterval(typingInterval);
      setText('');
    }

    return () => clearInterval(typingInterval);
  }, [isHovered]);

  return (
    <section id='about'>
      <h5>get to</h5>
      <h2>Know me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image"onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
<img src={Aboutimg} alt='hello'></img>
<div className="about__me-text">{text}</div>
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__icon"/>
              <h5>experience</h5>
              <small>5+ Years working </small>

            </article>
            <article className='about__card'>
              <FiUsers className="about__icon"/>
              <h5>clients</h5>
              <small>10,000 + lcients worldwide</small>

            </article>
            <article className='about__card'>
              <BiBook className="about__icon"/>
              <h5>Projects</h5>
              <small>Over 18,000 done projects</small>

            </article>

          </div>
          <p>Car Show Room</p>
        <a href='http://127.0.0.1:8000/chatGPT/' className='btn btn-primary'> let's talk</a>
        </div>
      </div>
      <Footer />
    </section>
    
    
  )
}

export default AboutUS