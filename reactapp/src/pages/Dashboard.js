import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './auth/ChangePassword';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import logo from "../images/autosallonLogo.png"
import Volkswagen from "../images/logos/Volkswagen.webp"

const Dashboard = () => {
  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "", first_name: "", last_name: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    first_name: "",
    last_name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.username,
        first_name: data.first_name,
        last_name: data.last_name
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    console.log(data);
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name,
        first_name: data.first_name,
        last_name: data.last_name
      }))
    }
  }, [data, isSuccess, dispatch])

  return (
    <section className="dashboard">
      {/* <div className='container'>
        <div>
          <h1>Dashboard</h1>
          <p>Email: {userData.email}</p>
          <p>Username: {userData.name}</p>
          <p>Full Name: {userData.first_name + " " + userData.last_name}</p>
          <button type='submit' onClick={handleLogout}>Logout</button>
        </div>
        <div className='changePasswordContainer'>
          <ChangePassword />
        </div>
      </div> */}
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

          <p>Phone <span>{userData.phone ? userData.phone : "Phone Number"}</span></p>
          <hr />

          <p>Address <span>{userData.address ? userData.address : "Address"}</span></p>
          <hr />

          <Link to="/">
            <button>Edit Settings</button>
          </Link>
        </div>

        <ChangePassword />

        <div className='userFavorites item'>
          <h1>Recent Favorites</h1>
          <Link to="/vehicle?id=1">
            <div className='favoriteItem'>
              <img src={Volkswagen} />
              <p>Volkswagen Golf 7</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </Link>

          <Link to="/vehicle?id=1">
            <div className='favoriteItem'>
              <img src={Volkswagen} />
              <p>Volkswagen Golf 7</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </Link>

          <Link to="/vehicle?id=1">
            <div className='favoriteItem'>
              <img src={Volkswagen} />
              <p>Volkswagen Golf 7</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </Link>

          <Link to="/favorites">
            <button>See all favorites</button>
          </Link>
        </div>

        <div className='userReviews item'>
          <h1>Most Recent Review</h1>

          <Link to="/vehicle?id=1">
            <div className='reviewContent'>

              <h1>This car sucks ASS!</h1>

              <div className='reviewRating'>
                <div>
                  <i className="fa fa-star" />
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                </div>
                <p>Mitsubishi Outlander</p>
              </div>

              <div className='comment'>

                <p>Like dont get me wrong im all for a inexpensive all around vehicle, but it should at least be done correctly. The most important thing they could of ad...</p>
              </div>
            </div>
          </Link>

          <Link to="/reviews">
            <button>See all reviews</button>
          </Link>
        </div>
      </div>
    </section >
  );
};

export default Dashboard;
