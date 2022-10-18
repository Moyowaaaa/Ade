import React, { useEffect, useRef } from 'react'
import droves from '../images/droves.png'
import bstop from '../images/bstop.png'
import codeCampus from '../images/codecampus.png'
import geenAfrica from '../images/green.png'
import easy from '../images/green.png'
import SnoozeOff from '../images/snoozeOff.png'
import ProjectDetails from './ProjectDetails'
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Project = () => {
    const boxRef = useRef()
    const projectPage = useRef()



       
   




  return (
    <div className='py-4 lg:py-0 flex  h-max lg:min-h-screen lg:h-screen flex-col  w-[100vw] ' data-scroll-section ref={projectPage}>
        <h2>BOX</h2>

        <div className="box w-1/12 h-[5rem] bg-[red]" ref={boxRef}></div>
    </div>
  
  )
}

export default Project