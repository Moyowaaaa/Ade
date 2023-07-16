import React, { useRef, useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import rightArrow from "../../images/rightarrow.svg";
import alat from "../../images/alatt.png";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { gsap } from "gsap";
import { componentProps } from "../../types";

const Alat = ({ openMenu, setOpenMenu }: componentProps) => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const [reveal, setReveal] = useState<boolean>(false);
  const onScreen = useIntersectionObserver(ref, 0.125);
  const TextRef =  useRef<HTMLDivElement | null>(null);
  const ImageRef = useRef<HTMLDivElement | null>(null);
  const [timer, setTimer] =   useState<number>(2);
  const [loader, setLoader] = useState<boolean>(true);
  const id = useRef<any>(null);

  const clear = () => {
    window.clearInterval(id.current);
    setLoader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1500);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  return (
    <>
      <div
        className="section flex min-h-screen h-screen flex-col z-50  w-[100vw] "
        data-scroll-section
        ref={pageRef}
        id="snoozeOff"
      >
        <div className="flex w-full  h-full flex-col-reverse lg:flex-row">
          <div className="flex flex-col-reverse w-full lg:w-6/12  lg:px-10 py-4 lg:flex-col ">
            <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <div className="hero flex flex-col   h-full w-full justify-center lg:items-center w-full px-2 lg:px-0 ">
              <div
                className=" flex flex-col gap-4 py-4 lg:py-0"
                ref={TextRef}
                data-scroll
                data-scroll-direction="horizontal"
              >
                <h2 className="text-2xl lg:text-4xl underline lg:no-underline">
                  Mobile App
                </h2>
                <h1 className="text-3xl lg:text-6xl font-bold font-[avenir-black] ">
                  Wema ALAT <br />
                  Mobile Redesign.
                </h1>

                <p className="hidden lg:flex font-[avenir-light] w-11/12 lg:w-11/12 ">
                  A UI Concept of a financial application.
                </p>

                <p className="lg:hidden font-[avenir-light] w-full text-justify text-base ">
                  A redesign of the existing Wema ALAT mobile banking
                  application.
                </p>

                <a
                  href="https://www.behance.net/gallery/161415625/WEMA-ALAT-MOBILE-APP-UI-REDESIGN-CONCEPT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-white text-[#222222] py-3 w-max flex items-center gap-2 px-8 font-[avenir-black] text-sm lg:text-base">
                    View Project
                    <img src={rightArrow} alt="right arrow" />
                  </button>
                </a>
              </div>
            </div>

            <Footer />
          </div>

          <div
            className="flex flex-col w-full  lg:w-6/12 bg-[#FFFFFF] lg:justify-center lg:items-center"
            ref={ImageRef}
          >
            <img src={alat} alt="alat" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Alat;
