import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import user from "../assets/userimage.png";
import sl from "../assets/supportlogo.png";

export default function Box4() {
  const parentRef = useRef(null);
  const isInView = useInView(parentRef, {
    once: true,
    threshold: 0.2,
  });

  const fadeInVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      ref={parentRef}
      className="flex flex-col lg:flex-row justify-between bg-gradient-to-l from-blue-500 to-emerald-500 py-[6.5rem]"
    >
      <div className="basis-1/2 tracking-tighter text-white text-center lg:text-start self-center lg:pl-16">
        <p className="text-5xl">
          Facing any difficulty? <br />
          You’ll love chatting with us
        </p>
        <p className="text-xl mt-10">
          If you have any questions or need any help, <br />
          head over to our 24/7 in-app chat and let us <br />
          make your day easier
        </p>
      </div>

      {/* right side */}
      <div className="flex flex-col basis-1/2 py-5 gap-y-[4rem]">
        <motion.div
          className="px-6 py-4 ml-auto mx-auto lg:mr-[4rem] bg-white w-[14rem] rounded-2xl relative"
          variants={fadeInVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0, duration: 0.5, type: "spring", stiffness: 50 }}
        >
          <p>
            Hey! I lost my telda card, <br />
            what will I do now? 😥
          </p>
          <img
            className="h-[4rem] absolute top-2/2 left-full transform -translate-x-1/2 -translate-y-1/2"
            src={user}
            alt="user image"
          />
        </motion.div>

        <motion.div
          className="px-7 py-4 mx-auto lg:ml-[8rem] bg-white w-[18rem] rounded-2xl relative"
          variants={fadeInVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 50 }}
        >
          <p>
            Hey there 👋🏼 you can lock your <br />
            card from your controls page.
          </p>
          <img
            className="h-[4rem] absolute top-full left-0 transform -translate-x-1/2 -translate-y-1/2"
            src={sl}
            alt="support logo"
          />
        </motion.div>

        <motion.div
          className="px-6 py-4 ml-auto mx-auto lg:mr-[4rem] bg-white w-[16rem] rounded-2xl relative"
          variants={fadeInVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 50 }}
        >
          <p>
            Thank you so much! 🖤 <br />
            Locking my card right away.
          </p>
          <img
            className="h-[4rem] absolute top-2/2 left-full transform -translate-x-1/2 -translate-y-1/2"
            src={user}
            alt="user image"
          />
        </motion.div>
      </div>
    </div>
  );
}
