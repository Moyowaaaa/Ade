import React from 'react'
import {gsap} from 'gsap'
import { useRef, useEffect, useLayoutEffect } from 'react'

const Loading = () => {


    const tl = gsap.timeline()

    const handleAnimation = () => {
      tl.from('.S', {
        duration:0.5, opacity: 0, y: -300, ease: "power3.inOut"
      }, "<.1")
      .from('.A', {
        duration: 0.5, opacity: 0, y: 300, ease: "power3.inOut"
      }, "<.1")
    }

    useEffect(() => {
      // const ctx = gsap.context(() => {
        handleAnimation()
      // })
      // return () => ctx.revert();
    })

  return (
    <div className='loader h-screen z-50 absolute w-full bg-[#222222] flex items-center justify-center '>
        <h1 className='S text-4xl font-[avenir-black]'>S</h1>
        <h1 className='A text-4xl font-[avenir-black]'>A</h1>
    </div>

    
  
  )
}


export default Loading