import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useChangeUserPasswordMutation } from '../../services/userAuthApi';
import { getToken } from '../../services/LocalStorageService'
const ChangePassword = () => {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [changeUserPassword] = useChangeUserPasswordMutation()
  const { access_token } = getToken()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get('password'),
      password2: data.get('password2'),
    }
    const res = await changeUserPassword({ actualData, access_token })
    if (res.error) {
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      setServerError({})
      setServerMsg(res.data)
      document.getElementById("password-change-form").reset();
    }

  };
  // Getting User Data from Redux Store
  const myData = useSelector(state => state.user)

  function togglePassword() {

    let password = document.querySelector("#password")
    let toggle = document.querySelector("#togglePassword")

    if (password.type == "password") {

      password.type = "text";
      toggle.classList.remove("fa-eye-slash")
      toggle.classList.add("fa-eye")
    } else {
      password.type = "password";
      toggle.classList.remove("fa-eye")
      toggle.classList.add("fa-eye-slash")
    }
  }

  function togglePassword2() {

    let password = document.querySelector("#password2")
    let toggle = document.querySelector("#togglePassword2")

    if (password.type == "password") {

      password.type = "text";
      toggle.classList.remove("fa-eye-slash")
      toggle.classList.add("fa-eye")
    } else {
      password.type = "password";
      toggle.classList.remove("fa-eye")
      toggle.classList.add("fa-eye-slash")
    }
  }

  return (
    <section className='changePassword item'>
      <div className='container'>
        <h1>Change Password</h1>
        <form method="post" noValidate id="password-change-form" onSubmit={handleSubmit}>

          <div>
            <label htmlFor='password'>Password</label>
            <input required name="password" label="New Password" type="password" id="password" />
            <a onClick={togglePassword}><i id="togglePassword" className="fa-solid fa-eye-slash"></i></a>
            {server_error.password ? <p className='errorP'>{server_error.password[0]}</p> : <></>}
          </div>

          <div>
            <label htmlFor='password2'>Confirm Password</label>
            <input required name="password2" label="Confirm New Password" type="password" id="password2" />
            <a onClick={togglePassword2}><i id="togglePassword2" className="fa-solid fa-eye-slash"></i></a>
            {server_error.password2 ? <p className='errorP'>{server_error.password2[0]}</p> : <></>}
            {server_error.non_field_errors ? <p className='errorP'>{server_error.non_field_errors[0]}</p> : ''}
            {server_msg.msg ? <p className='successP'>{server_msg.msg}</p> : ''}
          </div>

          <button className="update" type="submit"> Update </button>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;
