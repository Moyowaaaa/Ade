import React, { useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import useIntersectionObserver from '../hooks/useIntersectionObserver';



const Projects = () => {
  const ref = useRef(null)

  const [reveal, setReveal] = useState(false);
  const onScreen = useIntersectionObserver(ref)

  console.log(onScreen)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  useEffect(() => {
    if(reveal) {
      gsap.fromTo('.Header', {y: 0, opacity: 0, }, { opacity:1, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"}, "<0.1");;

      }
  }, [reveal])



  return (
    <div className='main flex lg:min-h-screen h-[15rem] lg:h-screen flex-col  py-2 px-6 lg:px-10 py-6 w-[100vw]' id="projects"  data-scroll-section>
      <Navbar />
        <div className='h-full w-full  flex flex-col lg:justify-center ' ref={ref}>
        <div className='hero flex flex-col gap-4 lg:ml-16'>
        <h1 className='Header text-6xl font-bold font-[avenir-black] underline lg:no-underline'>Projects</h1>
        <p>Click the <span className='font-bold font-[avenir-black]'>View Project</span> button to check full projects</p>
            </div>

        </div>

        <Footer/>
        </div>
  )
}

export default Projects