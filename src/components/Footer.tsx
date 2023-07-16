import React, { useRef } from "react";

import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import behance from "../images/behance.svg";
const Footer = () => {
  let socialLinks = useRef(null);

  return (
    <div className="hidden fixed pb-6 bottom-0 lg:flex  w-full flex-col gap-2 font-[avenir-medium]">
      <h2 className="text-sm">Follow me:</h2>
      <div className="socials flex gap-2" ref={socialLinks}>
        <a
          href="https://www.linkedin.com/in/adeoluwa-siyanbade-539b84170/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} className="linkedin" alt="linkedin" />
        </a>

        <a
          href="https://twitter.com/Commodore_Ade"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} className="twitter" alt="twitter" />
        </a>

        <a
          href="https://www.behance.net/adesiyanbss"
          target="_blank"
          rel="noreferrer"
        >
          <img src={behance} className="behance" alt="behance" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
