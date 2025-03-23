import React from "react";

import FourthPage from "../wildlife/FourthPage";
import FifthPage from "../WhatDoWEDo/FifthPage";
import SixthPage from "../Impact/SixthPage";
import SeventhPage from "../Projects/SeventhPage";
import EightPage from "../GiveToday/EightPage";
import NinethPage from "../Blog/NinethPage";
import TenthPage from "../Furture/TenthPage";
import EleventhPage from "../Footer/EleventhPage";
import Firstpage from "../HeroSection/Firstpage";
import SecondPage from "../Motion/SecondPage";
import ThirdPage from "../VideoSection/ThirdPage";

// import LocomotiveScroll from "locomotive-scroll";

const LandingPage = () => {
  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full   min-h-screen bg-[#F2F1F6] text-white">
      <Firstpage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EightPage />
      <NinethPage />
      <TenthPage />
      <EleventhPage />
    </div>
  );
};

export default LandingPage;
