import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 flex flex-row justify-between px-10 pt-5 pb-3 duration-300 ${
        isScrolled ? 'bg-black opacity-50 text-white' : 'bg-neutral-200 text-black opacity-100'
      }`}
    >
      <div className="font-bold text-4xl">telda</div>
      <div className="text-xl px-4 font-normal">Press</div>
    </div>
  );
}
