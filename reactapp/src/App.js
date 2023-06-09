import { React } from "react";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import SignIn from "./pages/auth/UserLogin.js";
import { Route, Routes, Navigate } from "react-router-dom";
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
import { useSelector } from "react-redux";
import AboutUs from "./pages/AboutUs.js";

export default function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <Header />
      <Routes>

        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/signIn" element={!access_token ? <SignIn /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/table" element={<Table />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/favorites" element={<UserFavorites />} />
        <Route path="/reviews" element={<UserReviews />} />
        <Route path="/sendpasswordresetemail" element={<SendPasswordResetEmail />} />
        <Route path="/account/resetpassword/:id/:token" element={<ResetPassword />} />
      </Routes>
    </>
  )
}