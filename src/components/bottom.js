import React from "react";
import pci from "../assets/pci.png";
import boc from "../assets/bankofcairo.png";
import mc from "../assets/mastercard.png";

export default function bottom() {
  return (
    <div className="flex flex-col justify-center items-center py-[5rem] bg-white">
      <p className="text-lg">
        Telda is regulated by the Central Bank of Egypt and in partnership with
        Banque Du Caire & Mastercard
      </p>
      <div className="flex flex-row justify-evenly space-x-[4.5rem] lg:space-x-[11.5rem]">
        <img className="h-[4rem] lg:h-[7rem]" src={mc} alt="mastercard" />
        <img className="h-[4rem] lg:h-[7rem]" src={boc} alt="bankofcairo" />
        <img className="h-[4rem] lg:h-[7rem]" src={pci} alt="pci" />
      </div>
    </div>
  );
}
