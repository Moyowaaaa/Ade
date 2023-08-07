import { useState, useEffect, useRef } from "react";
import Bstop from "../components/Projects/Bstop";
import CodeCampus from "../components/Projects/CodeCampus";
import Drooves from "../components/Projects/Drooves";
import Easy from "../components/Projects/Easy";
import GreenAfrica from "../components/Projects/GreenAfrica";
import HeroSection from "../components/HeroSection";
import Loading from "../components/Loading";

import Projects from "../components/Projects";
import Randoms from "../components/Randoms";
import SnoozeOff from "../components/Projects/SnoozeOff";
import useLocoScroll from "../hooks/useLocoScroll";
import NikeAir from "../components/Randoms/NikeAir";
import FeetWings from "../components/Randoms/FeetWings";
import Portfoilio from "../components/Randoms/Portfoilio";
import Contact from "../components/Contact";
import MobileNav from "../components/MobileNav";
import Rebank from "../components/Projects/Rebank";
import NavLinks from "../components/NavLinks";
import Finance from "../components/Projects/Finance";
import Agbado from "../components/Projects/Agbado";
import Gnoto from "../components/Projects/Gnoto";
import Alat from "../components/Projects/Alat";
import NFT from "../components/Randoms/NFT";
import avenirBold from "../assets/fonts/Avenir-Black.otf";
import avenirBlack from "../assets/fonts/Avenir-Heavy.otf";
import avenirLight from "../assets/fonts/Avenir-Light.otf";
import avenirMedium from "../assets/fonts/Avenir-Medium.otf";
import React from "react";

const Home = () => {
  const [preloader, setPreloader] = useState<boolean>(true);
  const [timer, setTimer] = useState<number>(2);
  const id = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
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

  const [openMenu, setOpenMenu] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fontPromises = [
      new Promise((resolve, reject) => {
        const font = new FontFace("avenirBold", `url(${avenirBold})`);
        font.load().then(resolve, reject);
      }),
      new Promise((resolve, reject) => {
        const font2 = new FontFace("avenirBlack", `url(${avenirBlack})`);
        font2.load().then(resolve, reject);
      }),
      new Promise((resolve, reject) => {
        const font3 = new FontFace("avenirLight", `url(${avenirLight})`);
        font3.load().then(resolve, reject);
      }),
      new Promise((resolve, reject) => {
        const font4 = new FontFace("avenirMedium", `url(${avenirMedium})`);
        font4.load().then(resolve, reject);
      }),
    ];
    Promise.all(fontPromises).then(() => {
      setFontsLoaded(true);
    });
  }, []);

  return (
    <div>
      {fontsLoaded && (
        <>
          {preloader ? (
            <Loading setIsLoaded={setIsLoaded} isLoaded={isLoaded} />
          ) : (
            <div className="w-full h-full overflow-x-hidden">
              <NavLinks openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <div
                className="outer-wrapper scroll-container"
                ref={containerRef}
                data-scroll-container
                id="main-container"
              >
                <div className="wrapper">
                  <MobileNav />
                  <HeroSection
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    isLoaded={isLoaded}
                  />
                  <Projects openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <Finance openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <Bstop openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <Alat openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <Easy openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <Agbado openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <Drooves openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <Gnoto openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <Randoms openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <NikeAir openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <NFT openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <Contact openMenu={openMenu} setOpenMenu={setOpenMenu} />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
