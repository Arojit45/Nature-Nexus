import React from "react";
import Nav from "./Nav";
import first from "../../assets/first.jpg";
import DButton from "../DonationForm/DButton";

const Firstpage = () => {
//
  return (
    <div className="w-full relative h-[100vh]   bg-cover flex flex-col rounded-b-xl   justify-center items-center" style={{ backgroundImage: "url('" + first + "')" }} >
      <div className="absolute top-0 left-0 w-full h-full z-[100]">
        <Nav />
      </div>
      <div className="w-[500px] mt-5 h-[500px] bg-cover  flex justify-center items-center  pt-2  ">
        {/* <SectionPart /> */}
      </div>
      <div className="absolute top-[300px] right-[650px] w-[200px]  z-[100]">
        <DButton/>
      </div>

    </div>
  );
};

export default Firstpage;
