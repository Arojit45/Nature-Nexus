import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import Button from "../../lib/Button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = (textcolor) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".links", {
      stagger: 0.2,
      y: 20,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <div
      className="w-full px-6  py-5 flex justify-between items-center "
      style={{ fontFamily: "Kanit, sans-serif" }}
    >
      {/* Left: Logo */}
      <div className="flex  items-center gap-2">
        <img src={logo} alt="logo" className="w-16 h-16 sm:w-20 sm:h-20" />
        <h3
          className="text-base sm:text-xl md:text-2xl font-semibold"
          style={{ color: textcolor }}
        >
          Nature Nexus
        </h3>
      </div>

      {/* Middle: Nav links (hidden on small) */}
      <div
        className="hidden md:flex links  gap-10 text-sm sm:text-base md:text-lg items-center"
        style={{ color: textcolor }}
      >
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="#what-we-do" className="links">
          What We Do
        </Link>
        <Link to="/adopt" className="links">
          Adopt
        </Link>
        <Link to="/dashboard" className="links">
          Dashboard
        </Link>
        <Link to="/wildmap" className="links">
          Map
        </Link>
      </div>

      {/* Right: Button (hidden on mobile) */}
      <Link to={"/signup"}>
      <div className="hidden md:block text-black text-sm sm:text-base md:text-lg">
        <Button title="Connect with us" />
      </div>
      </Link>

      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden text-black text-2xl cursor-pointer">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full backdrop-blur-md flex flex-col gap-4 p-5 shadow-md text-black z-40 md:hidden text-base sm:text-lg">
          <Link
            to="#what-we-do"
            className="links"
            onClick={() => setMenuOpen(false)}
          >
            What We Do
          </Link>
          <Link to="/" className="links" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/adopt"
            className="links"
            onClick={() => setMenuOpen(false)}
          >
            Adopt
          </Link>
          <Link
            to="/dashboard"
            className="links"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link to="/wildmap" className="links" onClick={() => setMenuOpen(false)}>
            Map
          </Link>
          <Button title="Connect with us" />
        </div>
      )}
    </div>
  );
};

export default Nav;
