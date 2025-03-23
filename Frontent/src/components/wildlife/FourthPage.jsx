import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Content from "./Content";
import MobileContent from "./MobileContent"; // Create this component for smaller screens

gsap.registerPlugin(ScrollTrigger);

const FourthPage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP animation only when desktop
  useGSAP(() => {
    if (isDesktop) {
      gsap.to(".wildlife .wild", {
        transform: "translateX(-300%)",
        scrollTrigger: {
          trigger: ".wildlife",
          start: "top 0%",
          end: "top -180%",
          delay: 0.5,
          scrub: 2,
          pin: true,
        },
      });
    }
  }, [isDesktop]);

  return (
    <div className="w-full bg-[#F2F1F6] overflow-hidden mt-5 p-4">
      {isDesktop ? (
        // Desktop Layout with GSAP scroll animation
        <div className="wildlife w-full h-[800px] flex flex-col xl:flex-row gap-4 justify-between items-center rounded-xl">
          <div className="wild w-full h-[800px] flex flex-col xl:flex-row gap-4 justify-between items-center rounded-xl">
            <Content />
          </div>
        </div>
      ) : (
        // Mobile/Tablet Layout (no animation)
        <div className="w-full flex flex-col gap-6">
          <MobileContent />
        </div>
      )}
    </div>
  );
};

export default FourthPage;
