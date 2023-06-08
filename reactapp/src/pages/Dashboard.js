import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './auth/ChangePassword';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useLayoutEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import logo from "../images/autosallonLogo.png";
import FavoriteItem from '../components/dashboardComponents/favoriteItem';
import ReviewContent from '../components/dashboardComponents/reviewContent';
import { useUpdateUserMutation } from '../services/userAuthApi'

const Dashboard = () => {

  const handleLogout = () => {
    dispatch(unsetUserInfo({ id: "", name: "", email: "", first_name: "", last_name: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/')
  }

  const [updateUser] = useUpdateUserMutation()
  const [server_error, setServerError] = useState({})
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      id: data.get('id'),
      username: data.get('username'),
      email: data.get('email'),
      first_name: data.get('first_name'),
      last_name: data.get('last_name'),
      address: data.get('address'),
      phone: data.get('phone'),
    }

    const res = await updateUser(actualData)
    if (res.error) {

      setServerError(res.error.data)
      console.log(res.error);
    }
    if (res.data) {
      console.log(res.data);
      window.location.reload(false);
    }
  }

  function openSettings() {

    let form = document.querySelector(".settingsForm");
    form.classList.toggle("show");
    form.classList.toggle("hide");
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const [userData, setUserData] = useState({
    id: "",
    email: "",
    name: "",
    first_name: "",
    last_name: "",
    address: "",
    phone: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        id: data.id,
        email: data.email,
        name: data.username,
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.contact_info[0],
        phone: data.contact_info[1],
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        id: data.id,
        email: data.email,
        name: data.name,
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.contact_info[0],
        phone: data.contact_info[1],
      }))
    }

  }, [data, isSuccess, dispatch])

  const [favoriteData, getFavoriteData] = useState([])
  const [reviewData, getReviewData] = useState([])

  useEffect(() => {
    const fetchFavoriteData = (id) => {
      const favoriteAPI = 'http://127.0.0.1:8000/prova/favorite/user/' + id + "/";
      if (id) {
        fetch(favoriteAPI)
          .then((res) => res.json())
          .then((res) => {
            getFavoriteData(res.results);
          });
      }
    };

    const fetchReviewData = (id) => {
      const reviewAPI = 'http://127.0.0.1:8000/prova/review/user/' + id + "/";
      if (id) {
        fetch(reviewAPI)
          .then((res) => res.json())
          .then((res) => {
            getReviewData(res.results);
          });
      }
    };

    fetchFavoriteData(userData.id);
    fetchReviewData(userData.id);
  }, [userData.id]);

  return (
    <section className="dashboard">

      <div className='containerMain'>
        <div className='userWelcome item'>
          <img src={logo}></img>
          <p className='welcomeMessage'>Welcome back, <b>{userData.name}</b>!</p>
          <button type='submit' onClick={handleLogout}>Logout</button>
        </div>

        <div className='userInfo item'>
          <p>Full Name <span>{userData.first_name + " " + userData.last_name}</span></p>
          <hr />

          <p>Email <span>{userData.email}</span></p>
          <hr />

          <p>Phone <span>{userData.phone}</span></p>
          <hr />

          <p>Address <span>{userData.address}</span></p>
          <hr />

          <button onClick={openSettings}>Edit Settings</button>
        </div>

        <div className="settingsForm hide">
          <button className="close" onClick={openSettings}>x</button>

          <form method="post" id='registration-form' onSubmit={handleSubmit}>

            <input type='hidden' name="id" defaultValue={userData['id']} />

            <div>
              <label htmlFor="username"> Username </label><br />
              <input name="username" type="text" defaultValue={userData['name']} /> <br />
              {server_error.username ? <p className='errorP'><i className="fa-solid fa-circle-exclamation"></i> {server_error.username[0]}</p> : ""}
            </div>

            <hr />

            <div>
              <label htmlFor="first_name"> First Name </label><br />
              <input name="first_name" type="text" defaultValue={userData['first_name']} /> <br />
            </div>

            <hr />

            <div>
              <label htmlFor="last_name"> Last Name </label><br />
              <input name="last_name" type="text" defaultValue={userData['last_name']} />
            </div>

            <hr />

            <div>
              <label htmlFor="email"> Email </label><br />
              <input name="email" type="text" defaultValue={userData['email']} />
              {server_error.non_field_errors ? <p className='errorP'><i className="fa-solid fa-circle-exclamation"></i> {server_error.non_field_errors[0]}</p> : ""}
              {server_error.email ? <p className='errorP'><i className="fa-solid fa-circle-exclamation"></i> {server_error.email[0]}</p> : ""}

            </div>

            <hr />

            <div>
              <label htmlFor="phone"> Phone </label><br />
              <input name="phone" type="text" defaultValue={userData['phone']} />
            </div>

            <hr />

            <div>
              <label htmlFor="address"> Address </label><br />
              <input name="address" type="text" defaultValue={userData['address']} />
            </div>


            <button className="">Edit Settings</button>

          </form>
        </div>

        <ChangePassword />

        <div className='userFavorites item'>
          <h1>Recent Favorites</h1>

          {favoriteData.map((item, i) => {
            return <FavoriteItem key={item.id} id={item.id} img={item.make} name={item.make + " " + item.model} />
          })}

          <Link to="/favorites">
            <button>See all favorites</button>
          </Link>
        </div>

        {/* <ReviewItem /> */}
        <div className='userReviews item'>
          <h1>Most Recent Review</h1>

          {reviewData.length > 0 && (
            <Link className="reviewLink" to="/vehicle?id=1">
              <ReviewContent car_name={reviewData[0].car_name} comment={reviewData[0].comment} ratingAmount={reviewData[0].rating} />
            </Link>
          )}

          <Link to="/reviews">
            <button>See all reviews</button>
          </Link>
        </div>

      </div>
    </section >
  );
};

export default Dashboard;
