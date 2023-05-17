import React from "react";
import Calculator from "./calculator";
import Contact from "./contact";
import Chat from "./chat";

export default function middleContent() {
  return (
    <section className="container">
      <Chat />
      <Contact />
      <Calculator />
    </section>
  )
}