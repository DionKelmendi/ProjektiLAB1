import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, Typography, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/userAuthApi'
import { storeToken } from '../../services/LocalStorageService';
import { Link } from 'react-router-dom';

const Registration = () => {

  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
      password2: data.get('password2'),
      first_name: data.get('first_name'),
      last_name: data.get('last_name'),
      address: data.get('address'),
      phone: data.get('phone'),
    }
    const res = await registerUser(actualData)
    if (res.error) {
      console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      storeToken(res.data.token)
      navigate('/dashboard')
    }
  }
  return <>
    {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
    {server_error.username ? console.log(server_error.username[0]) : ""}
    {server_error.email ? console.log(server_error.email[0]) : ""}
    {server_error.password ? console.log(server_error.password[0]) : ""}
    {server_error.password2 ? console.log(server_error.password2[0]) : ""}
    <section className="signIn">
      <form method="post" id='registration-form' onSubmit={handleSubmit}>
        <div className="formTitle">
          <h1>Register</h1>
          <p>Please enter fill the required infomation</p>
        </div>

        <div className="formName">
          <div>
            <label htmlFor="first_name"> First Name </label><br></br>
            <input name="first_name" type="text" required />
          </div>
          <div>
            <label htmlFor="last_name"> Last Name </label><br></br>
            <input name="last_name" type="text" required />
          </div>
        </div>

        <label htmlFor="email"> Email address </label><br></br>
        <input type="email" id='email' name='email' label='Email Address' />
        {server_error.email ? <p className='errorP'>{server_error.email[0]}</p> : ""}
        {server_error.non_field_errors ? (server_error.non_field_errors[0].startsWith('Email') ? <p className='errorP'>{server_error.non_field_errors[0]}</p> : '') : ''}

        <label htmlFor="username"> Username </label><br></br>
        <input type="text" id='username' name='username' label='Username' />
        {server_error.username ? <p className='errorP'>{server_error.username[0]}</p> : ""}

        <label htmlFor="address"> Address (Optional) </label><br></br>
        <input name="address" type="text" />

        <label htmlFor="phone"> Phone (Optional) </label><br></br>
        <input name="phone" type="text" />

        <label htmlFor="password"> Password </label><br></br>
        <input id='password' name='password' label='Password' type='password' />
        {server_error.password ? <p className='errorP'>{server_error.password[0]}</p> : ""}

        <label htmlFor="password2"> Confirm Password </label><br></br>
        <input id='password2' name='password2' label='Confirm Password' type='password' />
        {server_error.password2 ? <p className='errorP'>{server_error.password2[0]}</p> : ""}
        {server_error.non_field_errors ? (server_error.non_field_errors[0].startsWith('Password') ? <p className='errorP'>{server_error.non_field_errors[0]}</p> : '') : ''}

        {isLoading ? <CircularProgress /> : <input type="submit" value="Register" className='logInButton' />}

        <div className="registerLink">
          <p><span><Link to='/sendpasswordresetemail' >Forgot Password?</Link></span></p>
          <p>Already have an account? <span><Link to="/signIn">Log in</Link></span> </p>

        </div>
      </form>
    </section>
  </>;
}
export default Registration;


// export default function SignIn() {
//   return (
//     <>
//       <section className="signIn">
//         <form action="/insert" method="post">
//           <div className="formTitle">
//             <h1>Register</h1>
//             <p>Please enter your email address and password</p>
//           </div>
//           <label htmlFor="email"> Email address </label><br></br>
//           <input name="email" type="email" required />
//           <div className="formName">
//             <div>
//               <label htmlFor="first_name"> First Name </label><br></br>
//               <input name="first_name" type="text" required />
//             </div>
//             <div>
//               <label htmlFor="last_name"> Last Name </label><br></br>
//               <input name="last_name" type="text" required />
//             </div>
//           </div>
//           <label htmlFor="password"> Password </label><br></br>
//           <input name="password" type="password" required />

//           <label htmlFor="confirmPassword"> Confirm Password </label><br></br>
//           <input name="confirmPassword" type="password" required />

//           <label htmlFor="address"> Address (Optional) </label><br></br>
//           <input name="address" type="text" required />

//           <label htmlFor="phone"> Phone (Optional) </label><br></br>
//           <input name="phone" type="text" required />

//           <input type="submit" value="Create Account" />

//           <p className="registerLink">Already have an account? <span><Link to="/signIn">Log in</Link></span> </p>
//         </form>
//       </section>

//       <div className="signInWarning">
//         <h3>
//           Please rotate your phone for a better sign-in / register experience.
//         </h3>
//       </div>
//     </>
//   )
// }

