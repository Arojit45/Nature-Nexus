import React from "react";
import wildlife from "../../assets/wildlife.mp4";

const ThirdPage = () => {
  return (
    <div className="w-full relative  rounded-tl-3xl rouneded-tr-3xl">
      <video
        className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-tl-3xl rounded-tr-3xl object-cover"
        autoPlay
        loop
        muted
      >
        <source src={wildlife} type="video/mp4" />
      </video>

      <div className="absolute p-4 sm:p-5 top-1/2 left-[5%] sm:left-[10%] md:left-[20%] lg:left-[30%] xl:left-[670px] transform -translate-y-1/2 tracking-tighter w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-auto">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter font-kanit text-center xl:text-left">
          A local approach to saving forests
        </h1>
        <h3 className="text-stone-50 text-xs sm:text-sm md:text-base lg:text-lg mt-4 sm:mt-5 text-justify font-poppins tracking-tighter">
          We’ve protected 26 million acres in Latin America, preventing 3.9
          billion tons of CO2 emissions. Our success comes from partnering with
          local and Indigenous communities for over 25 years to protect
          threatened forests and the biodiverse ecosystems they support.
        </h3>
      </div>
    </div>
  );
};

export default ThirdPage;
