import React from "react";

import LandingPage from "./components/LandingPage/Landingpage";
import Form from "./components/DonationForm/Form";
import AdoptAnimals from "./components/Adopt/AdoptAnimals";
import { Route,  Routes } from "react-router-dom";
import Wildmap from "./components/WildMap/Wildmap";
import ImpactTracker from "./components/Dashboard/ImpactTracker";
import About from "./components/About/About";
import RecentNews from "./components/Blog/RecentNews";
import LocomotiveScroll from "locomotive-scroll";
import ProjectPage from "./components/Projects/ProjectPage";

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
        <Route path="/About" element={<About />} />
        <Route path="/news" element={<RecentNews />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </div>
  );
};

export default App;
