import React, { useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import useIntersectionObserver from '../hooks/useIntersectionObserver';



const Projects = ({openMenu,setOpenMenu, scroll}) => {
  const ref = useRef(null)
  const [isVisible,setIsVisible] = useState(false)
  const [reveal, setReveal] = useState(false);
  const onScreen = useIntersectionObserver(ref, 0.1)
  const ProjectRef= useRef(null)

  
  



    
    
    
 

  let offset = (window.innerWidth / 100) * -6



  useEffect(() => {
    if (onScreen) {setReveal(onScreen)

      setTimeout(() =>  scrollToProject(),2000 )
     
    }

    if(!onScreen) clearTimeout(scrollToProject)

    
  }, [onScreen])




  useEffect(() => {
    if(onScreen && reveal) {
      const tl = gsap.timeline()
    const ctx = gsap.context(() => {
      tl.fromTo(ProjectRef.current, { opacity:0 },
      { y: 0, duration:1.2, opacity: 1, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" })
      

     })
      return () => ctx.revert();
      
    }
  }, [onScreen])




  const scrollToProject = () => {
    document.querySelector('#snoozeOff').scrollIntoView({
      behavior: 'smooth'
 });
}

// useEffect(() => {
//   id.current = window.setInterval(() => {
//     setTimer((timer) => timer -1)
//   }, 1500)
// },[])


// useEffect(() => {
//   if (timer === 0){
//     scrollToProject()
//   }
// },[timer])


 





  return (
    <div className='section main flex lg:min-h-screen h-[15rem] lg:h-screen flex-col  py-2 px-6 lg:px-10 py-6 w-[100vw]' id="projects"  data-scroll-section >
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className='h-full w-full  flex flex-col lg:justify-center ' ref={ref}>
        <div className='hero flex flex-col gap-4 lg:ml-16' ref={ProjectRef}>
        <h1 className='Header text-6xl font-bold font-[avenir-black] underline lg:no-underline'>Projects</h1>
        <p>Click the <span className='font-bold font-[avenir-black]'>View Project</span> button to check full projects</p>
            </div>
           
        </div>


      

        <Footer/>
        </div>
  )
}

export default Projects