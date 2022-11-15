import React,{useRef, useState, useEffect} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
gsap.registerPlugin(ScrollTrigger)


const Randoms = ({openMenu,setOpenMenu}) => {
  const ref = useRef(null)
  const onScreen = useIntersectionObserver(ref,0.1)

  useEffect(() => {
    if (onScreen) setTimeout(() =>  scrollToProject(),2000 )

    if(!onScreen) clearTimeout(scrollToProject)
    
  }, [onScreen])

  const scrollToProject = () => {
    document.querySelector('#nikeAir').scrollIntoView({
      behavior: 'smooth'
 });
}


  console.log('randoms is ', onScreen)

  return (
    <div className='section main flex lg:min-h-screen h-[15rem]  px-6lg:h-screen flex-col  py-2 px-6 lg:px-10 py-6 w-[100vw]' data-scroll-section id="randoms">
  <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    <div className='h-full w-full  flex flex-col justify-center 'ref={ref}>
    <div className='hero flex flex-col gap-4 lg:ml-16'>
    <h1 className='text-6xl font-bold font-[avenir-black] underline lg:no-underline'>Randoms</h1>

        </div>

    </div>

    <Footer/>
    </div>
  )
}

export default Randoms