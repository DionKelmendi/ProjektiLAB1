import { TextField, Button, Box, Alert, Typography, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setUserToken } from '../../features/authSlice';
import { getToken, storeToken } from '../../services/LocalStorageService';
import { useLoginUserMutation } from '../../services/userAuthApi';
import { Link } from 'react-router-dom';


// export default function SignIn() {
//   return (
//     <>
//       <section className="signIn">
//         <form action="/insert" method="post">
//           <div className="formTitle">
//             <h1>Log In</h1>
//             <p>Please enter your email address and password</p>
//           </div>
//           <label htmlFor="email"> Email address </label><br></br>
//           <input name="email" type="email" required />
//           <label htmlFor="password"> Password </label><br></br>
//           <input name="password" type="password" required />

//           <input type="submit" value="Log In" />
//           <p className="registerLink">Don't have an account yet? <span><Link to="/register">Register</Link></span> </p>
//         </form>
//       </section>

//     </>
//   )
// }

const UserLogin = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation()
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get('username'),
      password: data.get('password'),
    }
    const res = await loginUser(actualData)
    if (res.error) {
      console.log(res.error);
      console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      // console.log(typeof (res.data))
      // console.log(res.data)
      storeToken(res.data.token)
      let { access_token } = getToken()
      dispatch(setUserToken({ access_token: access_token }))
      navigate('/dashboard')
    }
  }
  let { access_token } = getToken()
  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }))
  }, [access_token, dispatch])


  // return
  // <>
  //   {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
  //   {server_error.username ? console.log(server_error.username[0]) : ""}
  //   {server_error.password ? console.log(server_error.password[0]) : ""}
  //   <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
  //     <TextField margin='normal' required fullWidth id='username' name='username' label='Username' />
  //     {server_error.username ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.username[0]}</Typography> : ""}
  //     <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
  //     {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
  //     <Box textAlign='center'>
  //       {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>}
  //     </Box>
  //     <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
  //     {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
  //   </Box>
  // </>;

  return (
    <section className="signIn">
      <form noValidate id='login-form' onSubmit={handleSubmit} action="/insert" method="post">
        <div className="formTitle">
          <h1>Log In</h1>
          <p>Please enter your email address and password</p>
        </div>

        <label htmlFor="username"> Username </label><br></br>
        <input type='text' required id='username' name='username' label='Username' />
        {server_error.username ? <p className='errorP'>{server_error.username[0]}</p> : ""}

        <label htmlFor="password"> Password </label><br></br>
        <input required id='password' name='password' label='Password' type='password' />
        {server_error.password ? <p className='errorP'>{server_error.password[0]}</p> : ""}

        {isLoading ? <CircularProgress /> : <input type="submit" value="Log In" className='logInButton' />}

        <div className="registerLink">
          <p><span><Link to='/sendpasswordresetemail' >Forgot Password?</Link></span></p>
          <p>Don't have an account yet? <span><Link to="/register">Register</Link></span> </p>
        </div>
        {server_error.non_field_errors ? <p className='error'><i className="fa-solid fa-circle-exclamation"></i> {server_error.non_field_errors[0]}</p> : ''}
      </form>
    </section>
  )
};

export default UserLogin;

