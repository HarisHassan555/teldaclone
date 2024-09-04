import React from "react";
import img1 from "../assets/telda-card.png";
import img2 from "../assets/downArrow.svg";
import { motion } from "framer-motion";

export default function box1() {
  return (
    <div className="flex flex-col justify-center text-center pt-14 bg-gradient-to-b from-neutral-200 to-white">
      <p className="mb-2 text-6xl font-bold">Pay Everywhere.</p>
      <p className="mt-2 text-6xl font-bold">Get paid by everyone.</p>
      <p className="mt-10 text-2xl font-normal px-3 lg:px-0">
        The simplest way to <b>send</b>, <b>spend</b> & <b>save</b> money.
      </p>
      <p className="mt-10 text-center self-center py-2 px-4 text-2xl rounded-3xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white">
        Get started
      </p>
      <img
        className="w-[16rem] h-[10rem] lg:w-[26rem] lg:h-[16rem] self-center mt-16"
        src={img1}
        alt="Logo"
      />
      <motion.img
        className="w-[4rem] h-[4rem] self-center mt-16"
        src={img2}
        alt="Down Arrow"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />
    </div>
  );
}
