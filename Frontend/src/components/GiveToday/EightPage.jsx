import React from "react";
import Donate from "../../assets/Donate.jpg";
import Button from "../../lib/Button";
import { Link } from "react-router-dom";

const EightPage = () => {
  
  return (
    <div className="w-full mt-10 p-2 bg-[#F2F1F6] flex justify-center items-center">
      <div className="p-4 flex flex-col lg:flex-row relative justify-center items-center w-full h-auto lg:h-[800px] gap-6">
        {/* Text Content */}
        <div className="w-full lg:w-1/4 px-4">
          <h1 className="text-black font-bold text-4xl lg:text-3xl text-center lg:text-left whitespace-normal xl:whitespace-nowrap">
            Are you ready to make a difference?
          </h1>
          <h3 className="text-slate-500 text-sm mt-2 text-justify">
            The acres of forest we conserve, the species we save, the carbon we
            store, the Indigenous cultures and local communities we protect; it
            all begins with you. Your support now will make a difference for
            current and future generations.
          </h3>
        </div>

        {/* Image */}
        <div className="w-full lg:w-2/3">
          <img
            className="w-full h-auto lg:h-[400px] rounded-xl object-cover mask-image-left-fade"
            src={Donate}
            alt="Racon"
          />
        </div>

        {/* Button */}
        <div className="w-full flex justify-center lg:justify-start lg:absolute lg:top-[500px] lg:left-28 mt-4 lg:mt-0">
          <Link to={"/"}>
            <div className="w-40 h-12 text-xl text-black rounded-xl">
              <Button title="Give Today" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EightPage;
