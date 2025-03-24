import React, { useState, useEffect } from "react";
import { FaTree, FaHandsHelping, FaLeaf, FaUsers } from "react-icons/fa"; // React Icons for visuals
import DButton from "../DonationForm/DButton";
import Nav from "../../components/HeroSection/Nav";
import Tree from "../../assets/Tree.mp4";
import Button from "../../lib/Button";

const ImpactTracker = () => {
  const [stats, setStats] = useState({
    treesPlanted: 0,
    wildlifeRescued: 0,
    habitatsRestored: 0,
    volunteersRecruited: 0,
  });

  useEffect(() => {
    // Simulating real-time data update
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        treesPlanted: prevStats.treesPlanted + Math.floor(Math.random() * 5),
        wildlifeRescued:
          prevStats.wildlifeRescued + Math.floor(Math.random() * 2),
        habitatsRestored:
          prevStats.habitatsRestored + Math.floor(Math.random() * 3),
        volunteersRecruited:
          prevStats.volunteersRecruited + Math.floor(Math.random() * 1),
      }));
    }, 3000); // Update every 3 seconds (for example)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-2 px-4">
      {/* Dashboard Title */}
      <div className="text-center mb-8">
        <Nav />
      </div>

      {/* Stats Cards (Grid Layout) */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Trees Planted Card */}
        <div
          className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl border-4 border-green-200"
          style={{
            backgroundImage: `url('https://hasiruagro.com/wp-content/uploads/2024/09/planting-9001234_1280-1024x574.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-white bg-opacity-50 z-10"></div>

          {/* Content */}
          <div className="relative z-20 p-8 flex flex-col items-center justify-center h-full">
            <FaTree className="text-6xl text-black mb-4" />
            <h3 className="text-2xl font-semibold text-black">
              Trees Planted
            </h3>
            <p className="text-4xl font-bold text-white">
              {stats.treesPlanted}
            </p>

            <div className="w-[300px] flex gap-4 text-center items-center absolute bottom-2 h-[50px]">
              <DButton />
              <button className="w-[300px] h-[50px] bg-green-200 rounded-xl border-2 border-black">
                Get Involve
              </button>
            </div>
          </div>
        </div>

        {/* Wildlife Rescued Card */}
        <div className="relative shadow-xl rounded-lg p-8 flex flex-col items-center justify-center border-4 border-blue-200 overflow-hidden w-full h-[400px]">
          {/* Image Background */}
          <div
            className="absolute top-0 left-0 w-full h-full z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://d1jyxxz9imt9yb.cloudfront.net/medialib/556/image/s768x1300/09-Bottlefeeding-Orphan-Elephant-Zambia.jpg')`,
            }}
          ></div>

          {/* Overlay for readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>

          {/* Content on top of the background */}
          <div className="relative z-10 text-center text-white">
            <FaHandsHelping className="text-8xl mb-4" />
            <h3 className="text-4xl font-semibold">Wildlife Rescued</h3>
            <p className="text-4xl font-bold">{stats.wildlifeRescued}</p>

            <div className="w-[300px] flex gap-4 rounded-xl text-center items-center absolute top-[230px] h-[50px]">
              <DButton />
              <button className="w-[300px] h-[50px] bg-green-200 rounded-xl border-2 border-black">
                Get Involve
              </button>
            </div>
          </div>
        </div>

        {/* Habitats Restored Card */}
        <div
          className="relative w-full h-[400px] shadow-xl rounded-lg overflow-hidden border-4 border-yellow-200"
          style={{
            backgroundImage: `url('https://ncas.ac.uk/app/uploads/2020/12/River-Trees-Cloudy-Sky-1280px-1024x576.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Soft white overlay for readability */}
          <div className="absolute inset-0 bg-white bg-opacity-50 z-10"></div>

          {/* Main Content */}
          <div className="relative z-20 p-8 flex flex-col items-center justify-center h-full">
            <FaLeaf className="text-6xl text-black mb-4" />
            <h3 className="text-2xl font-semibold text-black">
              Habitats Restored
            </h3>
            <p className="text-4xl font-bold text-white">
              {stats.habitatsRestored}
            </p>

            <div className="w-[300px] flex gap-4 rounded-xl text-center items-center absolute bottom-2 h-[50px]">
              <DButton />
              <button className="w-[300px] h-[50px] bg-green-200 rounded-xl border-2 border-black">
                Get Involve
              </button>
            </div>
          </div>
        </div>

        {/* Volunteers Recruited Card */}
        <div
          className="relative shadow-xl rounded-lg overflow-hidden border-4 border-purple-200 w-full h-[400px]"
          style={{
            backgroundImage: `url('https://www.volunteeringsolutions.com/sites/default/files/header-banner/554_wildlife_and_animal_care.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* White overlay for content readability */}
          <div className="absolute inset-0 bg-white bg-opacity-50 z-10"></div>

          {/* Content */}
          <div className="relative z-20 p-8 flex flex-col items-center justify-center h-full">
            <FaUsers className="text-6xl text-black mb-4" />
            <h3 className="text-2xl font-semibold text-black">
              Volunteers Recruited
            </h3>
            <p className="text-4xl font-bold text-white">
              {stats.volunteersRecruited}
            </p>

            <div className="w-[300px] flex gap-4 rounded-xl text-center items-center absolute bottom-2 h-[50px]">
              <DButton />
              <button className="w-[300px] h-[50px] bg-green-200 rounded-xl border-2 border-black">
                Get Involve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactTracker;
