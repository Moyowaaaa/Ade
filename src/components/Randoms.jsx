import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


const Randoms = () => {
  return (
    <div className='main flex lg:min-h-screen h-[15rem]  px-6lg:h-screen flex-col  py-2 px-6 lg:px-10 py-6 w-[100vw]' data-scroll-section id="randoms">
  <Navbar />
    <div className='h-full w-full  flex flex-col justify-center '>
    <div className='hero flex flex-col gap-4 lg:ml-16'>
    <h1 className='text-6xl font-bold font-[avenir-black]'>Randoms</h1>

        </div>

    </div>

    <Footer/>
    </div>
  )
}

export default Randoms