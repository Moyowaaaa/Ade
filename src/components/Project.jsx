import React, { useEffect, useRef } from 'react'

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