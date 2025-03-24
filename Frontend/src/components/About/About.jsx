import React from "react";
import missionImage from "../../assets/Forest12.jpg";
import impactImage from "../../assets/cleanRiver.jpg";
import teamImage from "../../assets/work2.jpg";
import Nav from "../HeroSection/Nav";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-2 px-6">
      {/* Page Header */}
      <div className="text-center mb-12">
        <Nav />
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <img
          src={missionImage}
          alt="Mission"
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are on a mission to restore ecosystems, plant trees, rescue
            wildlife, and build a sustainable future for all. Through
            technology, innovation, and community engagement, we track and
            transparently report every step of progress.
          </p>
        </div>
      </div>

      {/* Impact Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
        <img
          src={impactImage}
          alt="Impact"
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">
            Our Impact
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            From planting thousands of trees to rescuing wildlife and restoring
            habitats — our transparent, data-driven approach ensures that every
            effort contributes to real change. Track everything live through our
            Impact Dashboard.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={teamImage}
          alt="Team"
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">
            Our Community
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Behind every tree, every rescued animal, every data point — is a
            team of passionate volunteers, engineers, scientists, and supporters
            like you. Join our movement to create a lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
