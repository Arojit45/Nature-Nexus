import React from "react";
import { Link } from "react-router-dom";

const DButton = () => {
    
  return (
    <div className="relative group overflow-hidden rounded-xl border-2 border-black w-full max-w-xs sm:max-w-sm md:max-w-md h-10 sm:h-11 md:h-12">
      <Link to="/donation">
        <button
          className="relative z-10 w-full h-full text-sm sm:text-base  md:text-lg font-semibold text-black group-hover:text-white px-2 flex
       justify-center items-center transition duration-200 active:scale-95"
        >
          Donate Now!
        </button>
      </Link>
      <span
        className="absolute bottom-[-100%] left-0 w-full h-full bg-[#0D4715] 
                   group-hover:bottom-0 transition-all duration-300 ease-in-out 
                   rounded-xl group-hover:rounded-none"
      />
    </div>
  );
};

export default DButton;
