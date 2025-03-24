import React from "react";

import LandingPage from "./components/LandingPage/Landingpage";
import Form from "./components/DonationForm/Form";
import AdoptAnimals from "./components/Adopt/AdoptAnimals";
import { Route,  Routes } from "react-router-dom";
import Wildmap from "./components/WildMap/Wildmap";
import ImpactTracker from "./components/Dashboard/ImpactTracker";
import About from "./components/About/About";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/adopt" element={<AdoptAnimals />} />
        <Route path="/donation" element={<Form />} />
        <Route path="/wildmap" element={<Wildmap />} />
        <Route path="/dashboard" element={<ImpactTracker />} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </div>
  );
};

export default App;
