import { React } from "react";
import Footer from '../components/footer'
import "../index.css";

export default function AboutUs() {
    return (
      <>
        <div className="about-us-container">
          <h1 className="about-us-title">About Us</h1>
          <p className="about-us-description">
            Welcome to our car showroom! We are passionate about cars and strive
            to provide the best selection and service to our customers. With a
            wide range of vehicles, including sedans, SUVs, trucks, and luxury
            cars, we have something to suit every preference and budget. Whether
            you're a first-time buyer or an avid car enthusiast, our showroom is
            the perfect place to explore and find your dream car.
          </p>
          <p className="about-us-mission">
            Our mission is to deliver exceptional customer satisfaction by
            offering top-quality vehicles, transparent pricing, and a seamless car
            buying experience. We carefully handpick each vehicle in our
            inventory, ensuring that they meet our high standards of quality and
            performance. Our knowledgeable and friendly staff are here to assist
            you every step of the way, from providing detailed vehicle
            information to arranging test drives and helping with financing
            options.
          </p>
          <p className="about-us-visit">
            Visit our showroom today and experience the thrill of owning a
            high-quality car. We are dedicated to making your car buying journey
            enjoyable and memorable. Feel free to browse our inventory online or
            contact our team for personalized assistance. We look forward to
            serving you and helping you find the perfect car that matches your
            style and needs.
          </p>
        </div>
        <Footer />
      </>
    );
  }