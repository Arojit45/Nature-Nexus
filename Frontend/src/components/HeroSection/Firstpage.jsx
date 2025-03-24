import React from "react";
import Nav from "./Nav";
import DButton from "../DonationForm/DButton";

const myColor = "white";
const image =
  "https://static.vecteezy.com/system/resources/thumbnails/057/162/861/small_2x/majestic-tiger-stalking-through-lush-green-jungle-foliage-a-close-up-view-of-a-wild-tiger-photo.jpeg";

const Firstpage = () => {
  return (
    <div
      className="w-full relative h-[100vh] bg-cover flex flex-col rounded-b-xl justify-center items-center"
      style={{ backgroundImage: `url('${image}')` }}
    >
      {/* Nav with hover blur */}
      <div className="absolute top-0 left-0 w-full z-[100] hover:backdrop-blur-md hover:bg-white/20 transition duration-300">
        <Nav textcolor={myColor} />
      </div>

      {/* Hero Text */}
      <div className="absolute bottom-5  mt-5 h-[500px] flex justify-center items-center pt-2">
        <h1 className="text-white font-kanit text-[3rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[6rem] xl:text-[9rem]">
          Nature Needs You.
        </h1>
      </div>

      {/* Donate Button */}
      <div className="absolute bottom-5 right-5 sm:right-2 z-[100]">
        <div className="bg-white rounded-xl w-[160px] sm:w-[140px] md:w-[180px] lg:w-[200px]">
          <DButton />
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
