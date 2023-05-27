import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/userAuthApi'
import { storeToken } from '../../services/LocalStorageService';
import { Link } from 'react-router-dom';

// const Registration = () => {
//   const [server_error, setServerError] = useState({})
//   const navigate = useNavigate();
//   const [registerUser, { isLoading }] = useRegisterUserMutation()
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     const actualData = {
//       name: data.get('name'),
//       email: data.get('email'),
//       password: data.get('password'),
//       password2: data.get('password2'),
//       tc: data.get('tc'),
//     }
//     const res = await registerUser(actualData)
//     if (res.error) {
//       // console.log(typeof (res.error.data.errors))
//       // console.log(res.error.data.errors)
//       setServerError(res.error.data.errors)
//     }
//     if (res.data) {
//       console.log(typeof (res.data))
//       console.log(res.data)
//       storeToken(res.data.token)
//       navigate('/dashboard')
//     }
//   }
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

          <label htmlFor="address"> Address (Optional) </label><br></br>
          <input name="address" type="text" required />

          <label htmlFor="phone"> Phone (Optional) </label><br></br>
          <input name="phone" type="text" required />

          <input type="submit" value="Create Account" />

          <p className="registerLink">Already have an account? <span><Link to="/signIn">Log in</Link></span> </p>
        </form>
      </section>

      <div className="signInWarning">
        <h3>
          Please rotate your phone for a better sign-in / register experience.
        </h3>
      </div>
    </>
  )
}