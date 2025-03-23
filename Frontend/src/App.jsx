import React from "react";

import LandingPage from "./components/LandingPage/Landingpage";
import Form from "./components/DonationForm/Form";

import { Route,  Routes } from "react-router-dom";
import Wildmap from "./components/WildMap/Wildmap";
// import About from "./components/About/about";
// import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/donation" element={<Form />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/donation" element={<Form />} />
        <Route path="/wildmap" element={<Wildmap />} />
        
        {/* <Route path="/About" element={<About/>} /> */}
      </Routes>
    </div>
  );
};

export default App;
