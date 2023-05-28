import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, Typography } from '@mui/material';
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
    <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='username' name='username' label='Username' />
      {server_error.username ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.username[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password' />
      {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
    </Box>
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
//               <label htmlFor="firstName"> First Name </label><br></br>
//               <input name="firstName" type="text" required />
//             </div>
//             <div>
//               <label htmlFor="lastName"> Last Name </label><br></br>
//               <input name="lastName" type="text" required />
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