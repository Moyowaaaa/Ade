import React from "react";
import { gsap } from "gsap";
import { useEffect, useState, SetStateAction } from "react";

type loadingProps = {
  setIsLoaded: React.Dispatch<SetStateAction<boolean>>;
  isLoaded: boolean;
};

const Loading = ({ setIsLoaded, isLoaded }: loadingProps) => {
  const tl = gsap.timeline({
    onComplete: () => {
      setIsLoaded(true);
    },
  });

  const handleAnimation = () => {
    tl.from(".loader", {
      opacity: 0,
      delay: 0.3,
      duration: 0.2,
      ease: "power3.inOut",
    });

    tl.from(
      ".S",
      {
        duration: 0.5,
        opacity: 0,
        y: -300,
        ease: "power3.inOut",
      },
      "<.1"
    ).from(
      ".A",
      {
        duration: 0.5,
        opacity: 0,
        y: 300,
        ease: "power3.inOut",
      },
      "<.1"
    );
  };

  useEffect(() => {
    handleAnimation();
  }, []);

  return (
    <div className="loader h-screen z-50 absolute w-full bg-[#222222] flex items-center justify-center ">
      <h1 className="S text-4xl font-[avenir-black]">S</h1>
      <h1 className="A text-4xl font-[avenir-black]">A</h1>
    </div>
  );
};

export default Loading;
