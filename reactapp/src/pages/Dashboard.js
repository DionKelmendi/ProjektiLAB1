import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './auth/ChangePassword';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useLayoutEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import logo from "../images/autosallonLogo.png";
import Volkswagen from "../images/logos/Volkswagen.webp";
import FavoriteItem from '../components/dashboardComponents/favoriteItem';

const Dashboard = () => {

  const handleLogout = () => {
    dispatch(unsetUserInfo({ id: "", name: "", email: "", first_name: "", last_name: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/')
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
    last_name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        id: data.id,
        email: data.email,
        name: data.username,
        first_name: data.first_name,
        last_name: data.last_name
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {

    fetchFavoriteData();

    if (data && isSuccess) {
      dispatch(setUserInfo({
        id: data.id,
        email: data.email,
        name: data.name,
        first_name: data.first_name,
        last_name: data.last_name
      }))
    }
  }, [data, isSuccess, dispatch])

  const [favoriteData, getFavoriteData] = useState([])
  const API = 'http://127.0.0.1:8000/prova/favorite/user/6/';
  const fetchFavoriteData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        getFavoriteData(res)
        console.log(res);
      })
  }

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

          {favoriteData.map((item, i) => {
            return <FavoriteItem key={item.id} id={item.id} img={item.make} name={item.make + " " + item.model} />
          })}

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
