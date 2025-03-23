import React from "react";
import work from "../../assets/work.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.webp";
import work4 from "../../assets/work4.jpg";
import Count from "./ScrollCounter";

const FifthPage = () => {
  return (
    <div className="w-full bg-[#F2F1F6] p-2">
      <div className="min-h-screen gap-4 p-5 bg-green-200 mt-5 flex flex-col justify-between items-center rounded-xl">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 xl:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-center">
            What Do We Do?
          </h1>
          <h3 className="text-xs sm:text-sm md:text-base lg:text-lg text-black mt-2 max-w-[1000px] text-center">
            At our core, we are dedicated to preserving nature and promoting
            sustainable living. Our mission is to inspire communities, protect
            wildlife, and build a greener future for all.
          </h3>
        </div>

        {/* Cards Section */}
        <div className="w-full flex flex-col xl:flex-row gap-4">
          {/* Card 1 */}
          <div className="w-full xl:w-1/4 h-[300px] xl:h-[600px] bg-green-500 rounded-xl">
            <img className="object-cover w-full h-full rounded-xl" src={work} />
          </div>

          {/* Card 2 */}
          <div className="w-full xl:w-1/4 h-[300px] xl:h-[600px] flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2 items-center justify-center bg-white shadow-xl h-1/2 rounded-xl p-4">
              <h1>
                <Count
                  targetValue={2000}
                  className="text-5xl xl:text-8xl font-kanit-bold text-black"
                />
              </h1>
              <h3 className="text-base xl:text-xl text-slate-400 text-center">
                Wild animals rescued <br /> and rehabilitated
              </h3>
            </div>
            <div className="w-full h-1/2 bg-red-300 rounded-xl">
              <img
                className="object-cover w-full h-full rounded-xl"
                src={work2}
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full xl:w-1/4 h-[300px] xl:h-[600px] flex flex-col gap-4">
            <div className="w-full h-3/4 bg-red-300 rounded-xl">
              <img
                className="object-cover w-full h-full rounded-xl"
                src={work4}
              />
            </div>
            <div className="w-full h-1/4 bg-white shadow-xl flex flex-col items-center justify-center rounded-xl p-2">
              <h1 className="font-kanit-bold">
                <Count
                  targetValue={150}
                  className="text-3xl xl:text-5xl font-kanit-bold text-black"
                />
              </h1>
              <h3 className="text-sm xl:text-lg text-slate-400 text-center">
                Forests and habitats protected
              </h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full xl:w-1/4 h-[300px] xl:h-[600px] bg-green-500 rounded-xl">
            <img
              className="object-cover w-full h-full rounded-xl"
              src={work3}
            />
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default FifthPage;
