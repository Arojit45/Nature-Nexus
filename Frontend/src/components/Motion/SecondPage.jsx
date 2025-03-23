import React from "react";
import { motion } from "framer-motion";
import Arrow from "../../assets/arrow.png";

const SecondPage = () => {
  
  return (
    <div className="w-full py-20 px-2 rounded-3xl bg-[#004D43]">
      <div className='text border-t-2 font-Bebas-Regular flex whitespace-nowrap font-["Bebas Neue"] gap-10 justify-center overflow-hidden border-b-2 border-zinc-300'>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className='text-[12vw] pt-10 uppercase leading-none font-[""]'
        >
          Protect  Preserve  Prosper
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className='text-[12vw] pt-10 uppercase  leading-none font-[""]'
        >
          Protect  Preserve  Prosper
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className='text-[12vw] pt-10 uppercase   leading-none font-[""]'
        >
          Protect  Preserve  Prosper
        </motion.h1>
      </div>
    </div>
  );
};

export default SecondPage;

//
