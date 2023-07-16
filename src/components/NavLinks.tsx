import React, { useRef } from "react";
import close from "../images/close.svg";
import { componentProps } from "../types";
import useOnClickOutside from "../hooks/useOnClickOutside";
const NavLinks = ({ setOpenMenu, openMenu }: componentProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const scrollToHome = () => {
    document.querySelector("#home")?.scrollIntoView({
      behavior: "smooth",
    });
    setOpenMenu(false);
  };

  const scrollToProject = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
    setOpenMenu(false);
  };

  const scrollToRandoms = () => {
    document.querySelector("#randoms")?.scrollIntoView({
      behavior: "smooth",
    });
    setOpenMenu(false);
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    });
    setOpenMenu(false);
  };

  useOnClickOutside(ref, () => setOpenMenu(false));

  return (
    <div
      className={`border-2 py-6 px-10 w-full absolute top-0 right-0 left-0 ease-in-out duration-700 bg-[#E5E5E5] text-[#222222] z-50 flex justify-between font-[avenir-black] font-bold cursor-pointer ${
        openMenu ? " translate-y-0" : " translate-y-[-150%]"
      }`}
      ref={ref}
    >
      <div onClick={scrollToHome}>
        <h1 className="text-lg link ">SA</h1>
      </div>

      <div className="flex gap-4 ">
        <div onClick={scrollToHome}>
          <p className="link">Home</p>
        </div>

        <div onClick={scrollToProject}>
          <p className="link">Projects</p>
        </div>

        <div onClick={scrollToRandoms}>
          <p className="link">Randoms</p>
        </div>

        <div onClick={scrollToContact}>
          <p className="link">Contact</p>
        </div>
      </div>

      <button className=" z-50 text-lg" onClick={closeMenu}>
        <img src={close} alt="close" />
      </button>
    </div>
  );
};

export default NavLinks;
