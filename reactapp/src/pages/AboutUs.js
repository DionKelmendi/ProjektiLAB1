import { React } from "react";
import Footer from '../components/footer'
import "../index.css";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Porsche from "../images/porscheCar.webp"
import Worker from "../images/worker.webp"
import fillerImage from "../images/fillerImage.webp"

export default function AboutUS() {

  return (
    <>
      <section className="aboutUs">
        <div className="container">
          <div className="aboutHero">
            <h1 className="heroTitle">We Make Car Shopping Hassle Free</h1>
            <p>Since we started we were always ready to provide you one of the best services provided. We always try to handle any problems we face our way, any fight we can muster, all in the name of the client.</p>
            <Link to="/cars">
              <button>Get Started</button>
            </Link>
            <img src={Porsche}></img>
          </div>
          <div className="plan">
            <h1>
              Our greatest features
            </h1>

            <div className="subContainer">
              <div className="item">
                <i className="fa-solid fa-question"></i>
                <h3>Problem solvers</h3>
                <p>We have the answers to your questions, all will gladly respond. If not, you always have our Car Companion™</p>
                <Link to="/cars">Read more</Link>
              </div>

              <div className="item">
                <i className="fa-solid fa-l"></i>
                <h3>On-time deliveries</h3>
                <p>After your car purchase, it won't take long to recieve your new prized possession. Enjoy your new car!</p>
                <Link to="/signIn">Read more</Link>
              </div>

              <div className="item">
                <i className="fa-regular fa-lightbulb"></i>
                <h3>Services by experts</h3>
                <p>Having car problems? Don't you worry! Just write us a <Link to="/contact">message</Link>, and we will gladly schedule an appointment.</p>
                <Link to="/contact">Read more</Link>
              </div>
            </div>
          </div>

          <div className="staff">
            <h1>Our experienced and dedicated team</h1>

            <div className="subContainer">
              <div className="item">
                <img src={Worker} />
                <h3 className="staffName">Erin Orana</h3>
                <p>CEO</p>
              </div>

              <div className="item">
                <img src={Worker} />
                <h3 className="staffName">Erin Orana</h3>
                <p>CEO</p>
              </div>

              <div className="item">
                <img src={Worker} />
                <h3 className="staffName">Erin Orana</h3>
                <p>CEO</p>
              </div>

              <div className="item">
                <img src={Worker} />
                <h3 className="staffName">Erin Orana</h3>
                <p>CEO</p>
              </div>
            </div>
          </div>

          <img src={fillerImage} className="fillerImage"></img>

        </div>
      </section>
      <Footer />
    </>
  )
}