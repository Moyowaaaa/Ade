import React, { SetStateAction, useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { gsap } from "gsap";

import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { componentProps } from "../types";

const Projects = ({ openMenu, setOpenMenu }: componentProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const onScreen = useIntersectionObserver(ref, 0.1);
  const ProjectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (onScreen) {
      const tl = gsap.timeline();
      const ctx = gsap.context(() => {
        tl.fromTo(
          ProjectRef.current,
          { opacity: 0 },
          {
            y: 0,
            duration: 1.2,
            opacity: 1,
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
          }
        );
      });
      return () => ctx.revert();
    }
  }, [onScreen]);

  useEffect(() => {
    const scrollToProject = setTimeout(() => {
      if (onScreen) {
        document.querySelector("#finance")?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 1500);

    return () => clearTimeout(scrollToProject);
  }, [onScreen]);

  return (
    <div
      className="section main flex lg:min-h-screen h-[20rem] lg:h-screen flex-col  py-2 px-6 lg:px-10 py-6 w-[100vw] "
      id="projects"
      data-scroll-section
    >
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div
        className="h-full w-full  flex flex-col lg:justify-center  "
        ref={ref}
      >
        <div className="hero flex flex-col gap-4 lg:ml-16" ref={ProjectRef}>
          <h1 className="Header text-6xl font-bold font-[avenir-black] underline lg:no-underline">
            Projects
          </h1>
          <p>
            Click the{" "}
            <span className="font-bold font-[avenir-black]">View Project</span>{" "}
            button to check full projects
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
