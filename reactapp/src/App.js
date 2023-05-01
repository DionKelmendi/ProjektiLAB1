import { React } from "react";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";

import { Route, Routes } from "react-router-dom";
import Header from './components/header'

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  )
}