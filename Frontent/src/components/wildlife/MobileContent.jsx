import React from "react";
import Tiger from "../../assets/royal-bengal-tigers-need-more-conservation-efforts.jpg";
import Rino from "../../assets/onehorn.webp";
import Elephant from "../../assets/AsianElephant.jpg";
import SnowLeopard from "../../assets/snowleopard.jpg";

const MobileContent = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className=" w-full  h-auto p-4">
        <div className="flex flex-col items-center">
          <img
            className="w-[150px] sm:w-[120px] md:w-[100px] lg:w-[80px] rounded-xl"
            src={Tiger}
            alt="Tiger"
          />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-kanit-bold text-black whitespace-normal mt-2">
              Preserve the Bengal Tiger!
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-500 text-justify">
              The Royal Bengal Tiger is an endangered species, with only around
              2,500 left in the wild. Habitat destruction, poaching, and climate
              change threaten their survival.
            </h3>
          </div>
        </div>
      </div>

      <div className=" w-full h-auto p-4">
        <div className="flex flex-col items-center">
          <img
            className="w-[150px] sm:w-[120px] md:w-[100px] lg:w-[80px] rounded-xl"
            src={Rino}
            alt="Rino"
          />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-kanit-bold text-black whitespace-normal mt-2">
              Save the One-Horned Wonder!
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-500 text-justify">
              Primarily found in Assam’s Kaziranga National Park, this majestic
              rhino species once faced near extinction due to hunting and
              habitat encroachment.
            </h3>
          </div>
        </div>
      </div>

      <div className=" w-full h-auto p-4">
        <div className="flex flex-col items-center">
          <img
            className="w-[150px] sm:w-[120px] md:w-[100px] lg:w-[80px] rounded-xl"
            src={Elephant}
            alt="Elephant"
          />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-kanit-bold text-black whitespace-normal mt-2">
              Protect the Gentle Giants!
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-500 text-justify">
              Elephants are endangered due to habitat loss and poaching for
              ivory. Conservation efforts are vital to protect these gentle
              giants and their ecosystems.
            </h3>
          </div>
        </div>
      </div>

      <div className=" w-full h-auto p-4">
        <div className="flex flex-col items-center">
          <img
            className="w-[150px] sm:w-[120px] md:w-[100px] lg:w-[80px] rounded-xl"
            src={SnowLeopard}
            alt="Snow Leopard"
          />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-kanit-bold text-black whitespace-normal mt-2">
              Don’t Let the Snow Leopard Vanish!
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-500 text-justify">
              The snow leopard is an endangered species, with only around 2,500
              left in the wild. Habitat destruction, poaching, and climate
              change threaten their survival.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileContent;
