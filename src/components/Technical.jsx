import React from "react";
import {
  RiReactjsLine,
  RiJavascriptLine,
  RiNodejsFill,
  RiPhpLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { MdOutlineHtml } from "react-icons/md";
import { motion } from "framer-motion";

const Technical = () => {
  const iconMove = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
    transition: { duration: 0.5, delay: 0 },
  });

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="my-20 text-center text-4xl"
      >
        Công nghệ tôi biết được
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconMove(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconMove(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconMove(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNodejsFill className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconMove(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiPhpLine className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconMove(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <MdOutlineHtml className="text-7xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconMove(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <span className="text-center w-full mt-8">
          và còn nhiều thứ khác...
        </span>
      </div>
    </div>
  );
};

export default Technical;
