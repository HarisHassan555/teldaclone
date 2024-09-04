import React from "react";
import si1 from "../assets/scrolling1.png";
import si2 from "../assets/scrolling2.png";
import si3 from "../assets/scrolling3.png";
import si4 from "../assets/scrolling4.png";
import lock from '../assets/lock.png'

export default function box3() {
  return (
    <mdiv className="bg-white text-center pb-[4rem]">
      <p className="text-2xl mb-10">
        Order your card from Telda app using just your ID <br /> and get it
        instantly at <b><u>zero fees</u></b>
      </p>
      <div className="flex flex-col space-y-4 lg:flex-row justify-between px-[4rem] items-center mt-16">
        <img
          className="h-[23.5rem] self-center"
          src={si1}
          alt="slidingImage1"
        />
        <div className="text-start space-y-4 w-[20rem] lg:w-[27rem]">
          <p className="text-2xl lg:text-3xl font-medium">
            Send money in seconds, <br/>for free - for real
          </p>
          <div className="w-[27rem] h-[0.01rem]"></div>
          <p>
            Send and request money as easy as sending a text message without having to wait
          </p>
          <p>
            Express your payments with GIFs, emojis 💸 or personal notes and enjoy money getting social
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between px-[4rem] items-center mt-16">
        <div className="text-start space-y-4  w-[20rem] lg:w-[28rem] self-center">
          <p className="text-xl lg:text-3xl font-medium">
          Spend with your Telda card while you roam the world
          </p>
          <div className="w-[27rem] h-[0.01rem]"></div>
          <p>
          Never miss a single transaction with our instant payment notifications
          </p>
          <p>
          Use your Telda card anywhere, online, in-store, or withdraw cash from any ATM worldwide 🌍
          </p>
        </div>
        <img
          className="h-[23.5rem] self-center"
          src={si2}
          alt="slidingImage1"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between px-[4rem] items-center mt-16">
        <img
          className="h-[23.5rem] self-center"
          src={si3}
          alt="slidingImage1"
        />
        <div className="text-start space-y-4  w-[20rem] lg:w-[28rem]">
          <p className="text-xl lg:text-3xl font-medium">
          Track your spendings <br/>like a pro
          </p>
          <div className="w-[27rem] h-[0.01rem]"></div>
          <p>
            Feeling your money flies like a flock of birds as soon as you get it? Say no more!          </p>
          <p>
          Get to know your spending habits with Telda sorting your payments and dividing them into groups like Shopping 🛍️, Groceries 🛒 & more          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between px-[4rem] items-center mt-16">
        <div className="text-start space-y-4  w-[20rem] lg:w-[26rem] self-center">
          <p className="text-xl lg:text-3xl font-medium">
          You feel safer when you’re <br/>in control 🔒
          </p>
          <div className="w-[27rem] h-[0.01rem]"></div>
          <p>
          Simple yet powerful security with Biometric identification
          </p>
          <p>
          Take full control of what your card can and can’t do for a fully personalized experience
        </p>
        </div>
        <div className="h-[23.5rem] self-center relative">
        <img
          className="h-[6.5rem] z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={lock}
          alt="lock"
        />
        <img
          className="h-[23.5rem] self-center rounded-2xl py-20 px-12 opacity-70"
          src={si4}
          alt="slidingImage1"
        />
        </div>
      </div>

    </mdiv>
  );
}
