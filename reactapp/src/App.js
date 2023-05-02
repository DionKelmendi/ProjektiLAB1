import { React } from "react";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import SignIn from "./pages/SignIn.js";
import { Route, Routes } from "react-router-dom";
import Header from './components/header';
import Register from './pages/Register.js';

export default function App() {

  return (
    <>
      <Header />
      <Routes>
      
        <Route path="/prova/prova" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </>
  )
}