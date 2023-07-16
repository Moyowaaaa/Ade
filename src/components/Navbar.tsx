import React, { useEffect, useRef, useState } from "react";
import kebab from "../images/kebab.svg";
import { gsap } from "gsap";
import { componentProps } from "../types";

const Navbar = ({ openMenu, setOpenMenu }: componentProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const kebabRef = useRef<HTMLButtonElement | null>(null);

  const tl = gsap.timeline();

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.from(kebabRef.current, {
        duration: 0.6,
        rotate: 45,
        opacity: 0,
      });
    });
    return () => ctx.revert();
  }, []);

  const scrollToHome = () => {
    document.querySelector("#home")?.scrollIntoView({
      behavior: "smooth",
    });
    setOpenMenu(false);
  };

  return (
    <div className="hidden lg:flex w-full " ref={ref}>
      <div className="flex w-full   justify-between font-[avenir-medium]  ">
        <a onClick={scrollToHome}>
          <h1 className="text-lg cursor-pointer">SA</h1>
        </a>

        <button
          className="top-6 right-6 cursor-pointer z-50 text-4xl"
          onClick={() => {
            setOpenMenu(false), setOpenMenu(!openMenu);
          }}
          ref={kebabRef}
        >
          <img src={kebab} alt="kebab" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
