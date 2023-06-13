import { React, useState, useEffect } from "react";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import SignIn from "./pages/auth/UserLogin.js";
import { Route, Routes, Navigate, } from "react-router-dom";
import Header from './components/header';
import Register from './pages/auth/Registration.js';
import Cars from "./pages/Cars.js";
import Vehicle from "./pages/Vehicle.js";
import Table from "./pages/Table.js";
import Dashboard from "./pages/Dashboard.js";
import UserFavorites from "./pages/UserFavorites.js";
import UserReviews from "./pages/UserReviews.js";
import ResetPassword from "./pages/auth/ResetPassword.js";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail.js"
// import { useSelector } from "react-redux";
import AboutUs from "./pages/AboutUs.js";
// import Message from './components/Message';
// import Checkout from './components/Checkout';
// import Product from './components/Product';
import { getToken } from './services/LocalStorageService';
// import { useGetLoggedUserQuery } from './services/userAuthApi';


export default function App() {
  // const { access_token } = useSelector(state => state.auth)

  const { access_token } = getToken();
  const initialUserData = JSON.parse(localStorage.getItem('userData')) || {
    id: "",
    is_staff: "",
  };
  const [userData, setUserData] = useState(initialUserData);

  const storedUserData = localStorage.getItem('userData');
  console.log(storedUserData);

  const handleSetState = (data) => {
    setUserData({
      id: data.id,
      is_staff: data.is_staff,
    })

    let storeData = { id: data.id, is_staff: data.is_staff }
    localStorage.setItem('userData', JSON.stringify(storeData));
  };

  const handleStateUpdate = () => {
    setUserData("");
    localStorage.removeItem('userData');
  };

  return (
    <>
      <Header userData={userData} />
      <Routes>

        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/signIn" element={!access_token ? <SignIn /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vehicle" element={<Vehicle userData={userData} />} />
        <Route path="/table" element={<Table />} />
        <Route path="/dashboard" element={<Dashboard onUpdate={handleStateUpdate} updateMain={handleSetState} />} />
        <Route path="/favorites" element={<UserFavorites />} />
        <Route path="/reviews" element={<UserReviews />} />
        <Route path="/sendpasswordresetemail" element={<SendPasswordResetEmail />} />
        <Route path="/account/resetpassword/:id/:token" element={<ResetPassword />} />

      </Routes >
    </>
  )
}