import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function useLocoScroll(start:any) {
    useEffect(() => {
        if(!start) return


        const scrollEl:any = document.querySelector("#main-container");

        let locoScroll:any = new LocomotiveScroll({
            el: scrollEl,
            smooth:true,
            multiplier:1,
            // class:'is-reveal',
            direction:'horizontal'
        })

        locoScroll.on('scroll', () => {
            ScrollTrigger.update()
        })

        ScrollTrigger.scrollerProxy(scrollEl, {

            scrollTop(value) {
                if(locoScroll) {
                    return arguments.length  ? locoScroll.scrollTo(value, 0, 0)
                    : locoScroll.scroll.instance.scroll.y;
                }
                return null
            },
        
          

            scrollLeft(value){
                if (locoScroll) {
                    return arguments.length
                      ? locoScroll.scrollTo(value, 0, 0)
                      : locoScroll.scroll.instance.scroll.x;
                  }
                  return null;
                  
            }
            
        })


        
    const lsUpdate = () => {
        if (locoScroll) {
          locoScroll.update();
        }
      };

     
    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();


    return () => {
        if (locoScroll) {
            ScrollTrigger.removeEventListener("refresh", lsUpdate);
            locoScroll.destroy();
            locoScroll = null;
            console.log("Kill", locoScroll);

          }
          ScrollTrigger.refresh()
    };
  

    },[start])
}