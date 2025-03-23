import React from "react";
import work from "../../assets/work.jpg";
import Blog from "./Blog";
import Button from "../../lib/Button";

const NinethPage = () => {
  return (
    <div className="w-full mt-10 p-2 flex justify-center items-center bg-[#F2F1F6]">
      <div className="w-full relative gap-1 p-4 bg-green-200 flex flex-col justify-between items-center rounded-xl">
        {/* Heading */}
        <div className="h-auto px-4 py-6 flex justify-center items-center">
          <h1 className="text-[#0F2137] font-bold text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl max-w-[90%] md:max-w-[800px] leading-tight">
            Recent news and success stories
          </h1>
        </div>

        {/* Image + Blog Section */}
        <div className="w-full flex flex-col md:flex-row gap-5 p-4 rounded-xl items-center md:items-start">
          {/* Image Section */}
          <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[600px] lg:min-h-[810px] rounded-xl overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-xl"
              src={work}
              alt="Work"
            />
          </div>

          {/* Blog Section */}
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <Blog />
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-6 relative w-full">
          <div className="bg-[#F2F1F6] absolute top-[100%] left-1/2 transform -translate-x-1/2 p-3 w-[180px] sm:w-[210px] h-[50px] sm:h-[60px] rounded-xl flex justify-center items-center">
            <Button title="View more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NinethPage;
