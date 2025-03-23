import React from "react";
import Tiger from "../../assets/royal-bengal-tigers-need-more-conservation-efforts.jpg";
import Rino from "../../assets/onehorn.webp";
import Elephant from "../../assets/onehorn.webp";
import SnowLeopard from "../../assets/snowleopard.jpg";

const Content = () => {
  return (
    <div className="w-full  h-[800px] gap-5 p-2  mt-5 flex justify-between  items-center rounded-xl">
      <div className=" gap-5  w-[1600px] p-5  flex justify-between items-center h-[800px] ">
        <div className="w-[700px] h-[400px] ">
          <img className=" w-full  rounded-xl" src={Tiger} alt={Tiger.alt} />
        </div>
        <div className="w-[700px]  ">
          <h1 className="text-5xl mb-5 font-kanit-bold text-black whitespace-nowrap  ">
            Preserve the Bengal Tiger!
          </h1>
          <h3 className="text-sm text-zinc-500 font-poppins  text-justify">
            The Royal Bengal Tiger is an endangered species, with only around
            2,500 left in the wild. Habitat destruction, poaching, and climate
            change threaten their survival. Urgent conservation efforts,
            including protected reserves, anti-poaching laws, and sustainable
            eco-tourism, are crucial to saving this majestic species and
            maintaining ecological balance. for these give eye chacching heading
          </h3>
        </div>
      </div>
      <div className=" gap-5 border-l-[1px] border-black  w-[1600px] p-5 flex justify-between items-center h-[800px] ">
        <div className=" w-[700px] ">
          <img
            className=" w-full h-[400px]  rounded-xl"
            src={Rino}
            alt={Rino.alt}
          />
        </div>
        <div className="w-[600px]   ">
          <h1 className="text-4xl mb-5 font-kanit text-black whitespace-nowrap  ">
            Save the One-Horned Wonder!
          </h1>
          <h3 className="text-sm text-zinc-500 font-poppins  text-justify">
            Primarily found in Assam’s Kaziranga National Park, this majestic
            rhino species once faced near extinction due to hunting and habitat
            encroachment. Though numbers have improved, they remain vulnerable
            and need continued protection.
          </h3>
        </div>
      </div>
      <div className=" gap-5  border-l-[1px]  border-black  w-[1700px] p-5 flex justify-between items-center h-[800px] ">
        <div className=" w-[700px]       ">
          <img
            className=" w-full  rounded-xl"
            src={Elephant}
            alt={Elephant.alt}
          />
        </div>
        <div className="w-[700px]  ">
          <h1 className="text-5xl mb-5 font-kanit-bold text-black whitespace-nowrap  ">
            Protect the Gentle Giants!
          </h1>
          <h3 className="text-sm text-zinc-500 font-poppins  text-justify">
            The Indian elephant, a subspecies of the Asian elephant, is
            endangered due to habitat fragmentation, human-wildlife conflict,
            and illegal poaching for ivory. They play a vital role in
            maintaining forest ecosystems.
          </h3>
        </div>
      </div>
      <div className=" gap-5 border-l-[1px] border-black bor  w-[1600px] p-5 flex justify-between items-center h-[800px] ">
        <div className=" w-[700px]    ">
          <img
            className=" w-full h-[400px] object-cover  rounded-xl"
            src={SnowLeopard}
            alt={SnowLeopard.alt}
          />
        </div>
        <div className="w-[700px]   ">
          <h1 className="text-5xl mb-5 font-kanit text-black whitespace-nowrap  ">
            Don’t Let the Snow Leopard Vanish!
          </h1>
          <h3 className="text-sm  pl-5 font-poppins  w-[700px] text-zinc-500  text-justify">
            Living in the high-altitude regions of the Himalayas, snow leopards
            are elusive and endangered. Threats include poaching, loss of prey,
            and climate change, which disrupts their cold mountain habitat.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Content;
