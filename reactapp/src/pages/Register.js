import { React } from "react";
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <>
      <section className="signIn">
        <form action="/insert" method="post">
          <div className="formTitle">
            <h1>Register</h1>
            <p>Please enter your email address and password</p>
          </div>
          <label htmlFor="email"> Email address </label><br></br>
          <input name="email" type="email" required />
          <div className="formName">
            <div>
              <label htmlFor="firstName"> First Name </label><br></br>
              <input name="firstName" type="text" required />
            </div>
            <div>
              <label htmlFor="lastName"> Last Name </label><br></br>
              <input name="lastName" type="text" required />
            </div>
          </div>
          <label htmlFor="password"> Password </label><br></br>
          <input name="password" type="password" required />

          <label htmlFor="confirmPassword"> Confirm Password </label><br></br>
          <input name="confirmPassword" type="password" required />

          <label htmlFor="address"> Address </label><br></br>
          <input name="address" type="text" required />

          <label htmlFor="phone"> Phone </label><br></br>
          <input name="phone" type="text" required />

          <input type="submit" value="Create Account" />

          <p className="registerLink">Already have an account? <span><Link to="/signIn">Log in</Link></span> </p>
        </form>
      </section>

    </>
  )
}