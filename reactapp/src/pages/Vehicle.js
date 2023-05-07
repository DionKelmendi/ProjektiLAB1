import { React } from "react";
import Footer from "../components/footer";
import ImageSlider from "../components/vehicleComponents/imageSlider";
import Categories from "../components/indexComponents/categories";

export default function Cars() {

  return (
    <>
      <div className="vehicle">
        <ImageSlider />
        <section className="container">
          <div className="carInfo vItem">
            <h1>Car Name</h1>

            <p>Make <span>Make Name</span></p>
            <p>Model <span>Model Name</span></p>
            <p>Year <span>2000</span></p>
            <p>Mileage <span>0</span></p>
            <p>Fuel <span>Diesel</span></p>
            <p>Transmission <span>Automatic</span></p>
            <p>Color <span>Black</span></p>
            <p>Engine <span>4.0</span></p>
          </div>
          <div className="calculator vItem">
            <h1>Credit Calculator</h1>

            <div>
              <label htmlFor="price"> Car Price </label><br></br>
              <input name="price" type="number" required /><br></br>
            </div>
            <div>
              <label htmlFor="question"> Se di qa osht qekjo </label><br></br>
              <input name="question" type="number" required /><br></br>
            </div>
            <div>
              <label htmlFor="interest"> Interest Rate </label><br></br>
              <input name="interest" type="number" required /><br></br>
            </div>
            <div>
              <label htmlFor="credit"> Credit Length </label><br></br>
              <input name="credit" type="number" required /><br></br>
            </div>
            <input type="submit" value="Calculate" />
          </div>
          <div className="contact vItem">

            <h1>Contact Us</h1>
            <h2>Sale Agents</h2>

            <div>
              <img src={""} />
              <div>
                <h4>Name</h4>
                <h3>+386 49 104 108</h3>
              </div>
            </div>


            <div>
              <img src={""} />
              <div>
                <h4>Name</h4>
                <h3>+386 49 104 108</h3>
              </div>
            </div>

            <button>Talk directly to us</button>

          </div>
        </section>
        <div className="carMain">
          <Categories />
        </div>
      </div>
      <Footer />
    </>
  )
}