import React from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Content from "./Content";

const FourthPage = () => {
  useGSAP(()=>{
    gsap.to(".wildlife .wild",{
      transform: "translateX(-300%)",
      scrollTrigger:{
        trigger: ".wildlife",
        start: "top 0%",
        end: "top -180%",
        delay: 0.5,
        scrub: 2,
        pin: true,
       
      }
    })
  })
  return (
    <div className="w-full bg-[#F2F1F6] overflow-hidden mt-5   p-4 ">
      <div className="wildlife w-full h-[800px]  gap-1 p-2  mt-5  flex  justify-between  items-center rounded-xl ">
        <div className="wild w-full h-[800px] gap-1 p-2  mt-5  flex  justify-between  items-center rounded-xl">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default FourthPage;


{/* <div className="h-[800px] gap-1 p-2  mt-5  flex flex-col justify-between  items-center rounded-xl ">
  <div className="h-[800px] gap-1 p-2  mt-5  flex  justify-between  items-center rounded-xl">
    <div className="w-1/2  ">
      <img className="w-[1000px] rounded-xl" src={Tiger} alt={Tiger.alt} />
    </div>
    <div className="w-[700px]  ">
      <h1 className="text-5xl mb-5 font-kanit-bold text-black whitespace-nowrap  ">
        Preserve the Bengal Tiger!
      </h1>
      <h3 className="text-sm text-zinc-500  text-justify">
        The Royal Bengal Tiger is an endangered species, with only around 2,500
        left in the wild. Habitat destruction, poaching, and climate change
        threaten their survival. Urgent conservation efforts, including
        protected reserves, anti-poaching laws, and sustainable eco-tourism, are
        crucial to saving this majestic species and maintaining ecological
        balance. for these give eye chacching heading
      </h3>
    </div>
  </div>
  <div className="border-b-[1px]  flex w-full justify-evenly items-center border-black mt-20">
    <div className="w-[200px] h-[50px] mb-3 flex justify-center items-center text-black text-xl border-solid border-2 border-black-200  rounded-full   ">
      Moreinfo
    </div>
    <div className="w-[200px] h-[50px] mb-3 flex justify-center items-center text-black text-xl border-solid border-2 border-black-200  rounded-full   ">
      Donate
    </div>
    <div className="w-[200px] h-[50px] mb-3 flex justify-center items-center text-black text-xl border-solid border-2 border-black-200  rounded-full   ">
      Contact
    </div>
  </div>
</div>; */}
