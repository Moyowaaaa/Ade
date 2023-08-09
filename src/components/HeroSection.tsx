import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import rightArrow from "../images/rightarrow.svg";

import { gsap } from "gsap";
import { componentProps } from "../types";

const HeroSection = ({ openMenu, setOpenMenu, isLoaded }: componentProps) => {
  const tl = gsap.timeline();

  useEffect(() => {
    if (isLoaded) {
      const ctx = gsap.context(() => {
        gsap.from(".heroSection", {
          y: 200,
          duration: 0.5,
          opacity: 0,
          delay: 0.5,
        });
      });
      return () => ctx.revert();
    }
  }, [isLoaded]);

  const scrollToProject = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className="section flex min-h-screen h-screen flex-col lg:px-10 py-4  w-[100vw] "
      id="home"
      data-scroll-section
    >
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="h-full w-full  flex flex-col justify-center py-2 px-4 lg:px-10 py-6">
        <div className="heroSection flex flex-col gap-4 lg:ml-16">
          <h2 className="text-4xl">UI/UX Designer</h2>
          <h1 className="text-6xl font-bold font-[avenir-black]">
            Siyanbade Adeoluwa
          </h1>
          <p className="font-[avenir-light]">
            Hello, I&apos;m Adeoluwa a Nigerian based UI/UX designer with a
            minimalist <br />
            design background and keen sense for learning. Hope to work with
            your
            <br />
            on your next project.
          </p>

          <button
            className="bg-white text-[#222222] py-3 w-max flex items-center gap-2 px-8"
            onClick={scrollToProject}
          >
            Projects
            <img src={rightArrow} alt="right arrow" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
