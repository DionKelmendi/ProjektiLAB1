import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useResetPasswordMutation } from "../../services/userAuthApi";

export default function ResetPassword() {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [resetPassword] = useResetPasswordMutation()
  const { id, token } = useParams()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get('password'),
      password2: data.get('password2'),
    }
    const res = await resetPassword({ actualData, id, token })

    console.log(res);
    if (res.error) {
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      setServerError({})
      setServerMsg(res.data)
      document.getElementById('password-reset-form').reset()
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }

  }
  return <>
    <section className="signIn">

      <form noValidate id='password-reset-form' onSubmit={handleSubmit}>
        <div className="formTitle">
          <h1>Reset Password</h1>
          <p>Please write your new password on the areas below</p>
        </div>

        <label htmlFor="password"> New Password </label><br></br>
        <input id='password' name='password' label='New Password' type='password' />
        {server_error.password ? <p className="errorP"><i className="fa-solid fa-circle-exclamation"></i> {server_error.password[0]}</p> : ""}

        <label htmlFor="password2"> Confirm New Password </label><br></br>
        <input id='password2' name='password2' label='Confirm New Password' type='password' />
        {server_error.password2 ? <p className="errorP"><i className="fa-solid fa-circle-exclamation"></i> {server_error.password2[0]}</p> : ""}
        {server_error.non_field_errors ? <p className="errorP"><i className="fa-solid fa-circle-exclamation"></i> {server_error.non_field_errors[0]}</p> : ''}
        {server_msg.msg ? <p className="successP"><i class="fa-solid fa-circle-check"></i> {server_msg.msg}</p> : ''}

        <input type="submit" value="Change Password" className='logInButton' />

      </form>
    </section>
  </>;
};

