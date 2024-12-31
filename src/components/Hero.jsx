import React from "react";
import profile_img from "../assets/profile_img.jpg";
import { PROFILE } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
                className="pb-16 text-6xl text-center font-thin tracking-tight lg:mt-16 lg:text-8xl lg:text-left"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
            >
              Lê Minh Trung
            </motion.h1>
            <motion.span 
                className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-4xl tracking-tight text-transparent"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
              Sinh viên IT SGU
            </motion.span>
            <motion.p 
                className="my-2 max-w-xl py-6 font-light tracking-tighter"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
              {PROFILE}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center cursor-pointer">
            <a href="https://www.facebook.com/trungzuize8386/">
              <motion.img
                className="rounded-xl w-[90%]"
                src={profile_img}
                alt="Lê Minh Trung"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
