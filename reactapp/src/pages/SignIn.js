import { React } from "react";
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <>
      <section className="signIn">
        <form action="/insert" method="post">
          <div className="formTitle">
            <h1>Log In</h1>
            <p>Please enter your email address and password</p>
          </div>
          <label htmlFor="email"> Email address </label><br></br>
          <input name="email" type="email" required />
          <label htmlFor="password"> Password </label><br></br>
          <input name="password" type="password" required />

          <input type="submit" value="Log In" />
          <p className="registerLink">Don't have an account yet? <span><Link to="/register">Register</Link></span> </p>
        </form>
      </section>

    </>
  )
}