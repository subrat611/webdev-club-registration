import { useRef, useState } from "react";
import HeroSection from "../../components/HeroSection";
import NavBar from "../../components/NavBar";
import Register from "../../components/Register";

export default function HomePage() {
  function scrollToSection() {
    const ele = document.getElementById("reg-form");

    if (ele) {
      ele.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="homepage-wrapper">
      <NavBar />
      <HeroSection scrollToSection={scrollToSection} />
      <div id="reg-form">
        <Register />
      </div>
    </div>
  );
}
