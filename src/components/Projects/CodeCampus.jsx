import React, { useRef, useState,useEffect } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import rightArrow from '../../images/rightarrow.svg'
import codeCampus from '../../images/codecampus.png'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { gsap } from "gsap";


const CodeCampus = () => {
  const pageRef = useRef(null)
  const [reveal, setReveal] = useState(false);
  const onScreen = useIntersectionObserver(pageRef, 0.125)
  const TextRef = useRef(null)
  const ImageRef = useRef(null)

  // useEffect(() => {
  //   if (onScreen) setReveal(onScreen)
  // }, [onScreen])

  // useEffect(() => {
  //   if(onScreen && reveal) {
  //     const tl = gsap.timeline()
  //   const ctx = gsap.context(() => {
  //     tl.fromTo(TextRef.current, { opacity:0 },
  //     { y: 0, duration:0.5, opacity: 1, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" })
  //     .from(ImageRef.current, { duration:0.5, ease:"power3.inOut", scale:2.5, opacity:0}, "<0.1");

  //    })
  //     return () => ctx.revert();
      
  //   }
  // }, [onScreen])



  return (
    <div className="py-4 lg:py-0 flex  h-max lg:min-h-screen lg:h-screen flex-col  w-[100vw]  " data-scroll-section ref={pageRef}>
    <div className="flex flex-col-reverse lg:flex-row w-full  h-full">

<div className="flex flex-col w-full  lg:w-6/12  lg:px-10 py-4 ">
            <Navbar />
            <div className='hero flex flex-col gap-4 lg:ml-16 h-full w-full justify-center px-2 lg:px-0 ' ref={TextRef}>
            <h2 className='text-4xl underline lg:no-underline'>Website</h2>
    <h1 className='text-6xl font-bold font-[avenir-black]'>Code Campus</h1>
    <p className='hidden lg:flex font-[avenir-light] w-10/12 lg:w-8/12'>
    CodeCampus is an online platform for learning the latest technologies <br/> in the world. This is a landing page that give a potential candidate <br/> necessary information needed on available courses and pricing.</p>


    <p className='lg:hidden font-[avenir-light] w-11/12  text-justify'>
    CodeCampus is an online platform for learning the latest technologies in the world. This is a landing page that give a potential candidate  necessary information needed on available courses and pricing.</p>
    <button className='bg-white text-[#222222] py-3 w-max flex items-center gap-2 px-8 font-[avenir-black]'>
       View Project

        <img src={rightArrow} alt="right arrow"/>

     </button>
        </div>


            <Footer />
        </div>


        <div className="flex flex-col w-full  lg:w-6/12 " ref={ImageRef}>
            <img src={codeCampus} />


            </div>

    </div>
</div>
  )
}

export default CodeCampus