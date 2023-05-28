import { useState } from 'react';
import { useSendPasswordResetEmailMutation } from "../../services/userAuthApi";

export default function SendPasswordResetEmail() {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [sendPasswordResetEmail, { isLoading }] = useSendPasswordResetEmailMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
    }
    const res = await sendPasswordResetEmail(actualData)
    console.log(res);
    if (res.error) {
      console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      setServerError({})
      setServerMsg(res.data)
      document.getElementById('password-reset-email-form').reset()
    }
  }
  return <>

    <section className="signIn">
      <form noValidate id='password-reset-email-form' onSubmit={handleSubmit}>
        <div className="formTitle">
          <h1>Change Password</h1>
          <p>Please enter your email to get the link to change your password</p>
        </div>

        <label htmlFor="email"> Email </label><br></br>
        <input type="text" id='email' name='email' label='Email Address' />
        {server_error.email ? <p className="errorP"><i className="fa-solid fa-circle-exclamation"></i> {server_error.email[0]}</p> : ""}
        {server_error.non_field_errors ? <p className='errorP'><i className="fa-solid fa-circle-exclamation"></i> {server_error.non_field_errors[0]}</p> : ''}
        {server_msg.msg ? <p className='successP'><i className="fa-solid fa-circle-check"></i> {server_msg.msg}</p> : ''}

        <input type="submit" value="Send Email" className='logInButton' />

      </form>
    </section>
  </>;
};


