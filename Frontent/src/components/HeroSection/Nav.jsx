import React from "react";
import logo from "../../assets/logo.png";
import Button from "../../lib/Button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

const Nav = () => {
  
  useGSAP(() => {

    gsap.from(".links", {
      stagger: 0.2,
      y:20,
      opacity: 0,
      duration: 1,

    })

  });
  return (
    <div
      className=" w-full  px-10 py-5 flex justify-between items-center"
      style={{ fontFamily: "Kanit, sans-serif" }}
    >
      <div className="flex  justify-center items-center">
        <img src={logo} alt="logo" className="w-20 h-20" />
        <h3>Nature Nexus</h3>
      </div>
      <div className="links text-black  flex capitalize gap-10 text-lg  p-2 rounded-lg">
        {/* {["What we Do", "Get Involved", "About Us", "Membership&Giving"].map( */}
        <Link to="#what-we-do" className="links text-lg text-black">What We Do</Link>
        <Link to="#" className="links text-xl  text-black">Get Involved</Link>
        <Link to="#" className="links text-lg text-black">About Us</Link>
        <Link to="#" className="links text-lg text-black">Membership & Giving </Link>
      </div>
      <div className="text-black  p-2 rounded-lg text-lg">
        <Button title="Connect with us" />
      </div>
    </div>
  );
};

export default Nav;
