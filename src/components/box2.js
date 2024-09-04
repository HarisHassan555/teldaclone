import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import sliding1 from '../assets/sliding1.png';
import sliding2 from '../assets/sliding2.png';

export default function Box2() {
  const elementRef = useRef(null);
  const elementRef2 = useRef(null);
  const isInView = useInView(elementRef, { once: true, threshold: 0.1, });
  const isInView2 = useInView(elementRef2, { once: true, threshold: 0.1, });

  return (
    <div className='overflow-x-hidden bg-white'>
    <div className="flex flex-row justify-between items-center mb-16 mt-8">
      <p className="text-7xl lg:text-8xl font-bold ml-20 w-24">Powerful Account.</p>
      <motion.div
        ref={elementRef}
        className="flex"
        initial={{ x: 600 }}
        animate={isInView ? { x: 0 } : {}}
        transition={{
          type: 'spring',
          stiffness: 30, 
          damping: 20, 
          duration: 2
        }}
      >
        <img className='h-[26rem] lg:h-[35rem]' src={sliding1} alt="Sliding1" />
      </motion.div>
    </div>

    <div className=" flex flex-row justify-between items-center overflow-x-hidden mt-16 mb-8">
      <motion.div
        ref={elementRef2}
        className="flex"
        initial={{ x: -500 }}
        animate={isInView2 ? { x: 0 } : {}}
        transition={{
          type: 'spring',
          stiffness: 30, 
          damping: 20, 
          duration: 2
        }}
      >
        <img className='h-[26rem] lg:h-[35rem]' src={sliding2} alt="Sliding1" />
      </motion.div>
      <p className="text-7xl lg:text-8xl font-bold mr-80 w-24">Sleek Card.</p>
    </div>
    </div>
  );
}
