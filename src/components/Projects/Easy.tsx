import React, { useRef, useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import rightArrow from "../../images/rightarrow.svg";
import easy from "../../images/easy.png";
import { componentProps } from "../../types";

const Easy = ({ openMenu, setOpenMenu }: componentProps) => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const TextRef = useRef<HTMLDivElement | null>(null);
  const ImageRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="section flex py-4 lg:py-0 h-max lg:min-h-screen lg:h-screen flex-col  w-[100vw]  "
      data-scroll-section
      ref={pageRef}
    >
      <div className="flex flex-col-reverse lg:flex-row w-full  h-full">
        <div className="flex flex-col w-full  lg:w-6/12  lg:px-10 py-4 ">
          <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div
            className="hero flex flex-col gap-4 lg:ml-16 h-full w-full justify-center px-2 lg:px-0 "
            ref={TextRef}
          >
            <h2 className="text-2xl lg:text-4xl underline lg:no-underline">
              Website
            </h2>
            <h1 className="text-3xl lg:text-6xl font-bold font-[avenir-black]">
              Easy
            </h1>
            <p className="hidden lg:flex font-[avenir-light] w-10/12 lg:w-11/12">
              Landing page for a finance management application company. The{" "}
              <br />
              application grants the user the freedom of control and the comfort
              of <br /> security of hi/her finances.
            </p>

            <p className=" lg:hidden font-[avenir-light] w-full text-justify">
              Landing page for a finance management application company. The
              application grants the user the freedom of control and the comfort
              of security of hi/her finances.
            </p>

            <a
              href="https://www.behance.net/gallery/141384163/Finance-App-Website-%28FULL%29"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-white text-[#222222] py-3 w-max flex items-center gap-2 px-8 font-[avenir-black] text-sm lg:text-base">
                View Project
                <img src={rightArrow} alt="right arrow" />
              </button>
            </a>
          </div>

          <Footer />
        </div>

        <div className="flex flex-col w-full lg:w-6/12 " ref={ImageRef}>
          <img src={easy} alt="easy" />
        </div>
      </div>
    </div>
  );
};

export default Easy;
