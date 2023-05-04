import { React } from "react";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import SignIn from "./pages/SignIn.js";
import { Route, Routes } from "react-router-dom";
import Header from './components/header';
import Register from './pages/Register.js';
import Cars from "./pages/Cars.js";
import Vehicle from "./pages/Vehicle.js";

export default function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vehicle" element={<Vehicle />} />

      </Routes>
    </>
  )
}