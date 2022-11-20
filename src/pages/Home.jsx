import { useState, useEffect, useRef } from "react";
import Bstop from "../components/Projects/Bstop";
import CodeCampus from "../components/Projects/CodeCampus";
import Drooves from "../components/Projects//Drooves";
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

const Home = () => {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(2);
  const id = useRef(null);
  const containerRef = useRef(null);
  const [scroll, setScroll] = useState(500);
 

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

  return (
    <>
      {" "}
      {preloader ? (
        <Loading />
      ) : (
        <div className="w-full h-full">
          <NavLinks openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div
            className="outer-wrapper scroll-container"
            ref={containerRef}
            data-scroll-container
            id="main-container"
          >
            <div className="wrapper">
              <MobileNav />

              <HeroSection openMenu={openMenu} setOpenMenu={setOpenMenu} />

              <Projects
                scroll={scroll}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />
              <SnoozeOff openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Bstop openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Rebank openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Easy openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <GreenAfrica openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Drooves openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Randoms openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <NikeAir openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <FeetWings openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Portfoilio openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <Contact openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
