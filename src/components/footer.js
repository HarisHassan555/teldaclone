import React from "react";
import asb from "../assets/appstorebutton.png";
import psb from "../assets/playstorebutton.png";

export default function footer() {
  return (
    <div className="flex flex-col bg-neutral-50">
      <div className="flex flex-row justify-between">
        <div className="flex basis-3/5 gap-x-[1rem] lg:gap-x-[4.5rem] py-[4rem] justify-center">
          <p className="text-4xl font-bold">telda</p>
          <div className="flex flex-col">
            <b className="py-3">Social</b>
            <a
              className=" hover:text-blue-500 text-sm"
              href="https://www.facebook.com/"
            >
              Facebook
            </a>
            <a
              className=" hover:text-blue-500 text-sm"
              href="https://www.instagram.com/"
            >
              Instagram
            </a>
            <a
              className=" hover:text-blue-500 text-sm"
              href="https://www.twitter.com/"
            >
              Twitter
            </a>
            <a
              className=" hover:text-blue-500 text-sm"
              href="https://www.linkedin.com/"
            >
              Linkedin
            </a>
          </div>
          <div className="flex flex-col">
            <b className="py-3">Legal</b>
            <a
              className=" hover:text-blue-500 text-sm"
              href="https://www.facebook.com/"
            >
              Terms of use
            </a>
            <a
              className=" hover:text-blue-500 text-sm"
              href="https://www.instagram.com/"
            >
              Privacy policy
            </a>
          </div>
          <div className="flex flex-col">
            <b className="py-3">Press</b>
          </div>
        </div>

        <div className="flex flex-col lg:basis-1/5 justify-center self-center">
          <img
            className="flex h-[3rem] self-center"
            src={asb}
            alt="appstore button"
          />
          <img
            className="flex h-[3rem] self-center"
            src={psb}
            alt="appstore button"
          />
        </div>
      </div>
      <p className="text-[0.7rem] px-[7rem] pb-[1.2rem] text-gray-400">All rights reserved – 2022 © telda</p>
    </div>
  );
}
