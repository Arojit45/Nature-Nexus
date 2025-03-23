import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FutureVideo from "../../assets/Future.mp4";

const TenthPage = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsVideoVisible(true);
    videoRef.current?.play();
    gsap.to(videoRef.current, { duration: 0.5, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setIsVideoVisible(false);
    gsap.to(videoRef.current, { duration: 0.5, opacity: 0 });
  };

  return (
    <div className="w-full min-h-screen mt-20 mb-20 p-2 flex justify-center items-center bg-[#F2F1F6]">
      <div className="w-full relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex flex-col justify-center items-center">
        <video
          ref={videoRef}
          src={FutureVideo}
          className="video w-full h-full object-cover rounded-xl absolute top-0 left-0 opacity-0 transition-opacity duration-500"
          autoPlay
          loop
          muted
        />

        <div className="flex z-10 flex-col bg-[#F2F1F6]/90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-evenly items-center w-[90%] max-w-[400px] h-[130px] sm:h-[140px] md:h-[160px] rounded-xl p-4 shadow-lg backdrop-blur-md">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-kanit text-center">
            IMAGINATION FOR THE
          </h1>

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex border-2 w-[110px] sm:w-[130px] md:w-[150px] active:scale-90 rounded-full justify-center items-center transition-transform duration-200"
          >
            <button className="text-black text-xl sm:text-2xl md:text-3xl">
              Future
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenthPage;
