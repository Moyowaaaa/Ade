import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import rightArrow from '../../images/rightarrow.svg'
import Droves from '../../images/droves.png'


const Drooves = () => {
  return (
    <div className="py-4 lg:py-0 flex  h-max lg:min-h-screen lg:h-screen flex-col  w-[100vw]  " data-scroll-section>
    <div className="flex flex-col-reverse lg:flex-row w-full  h-full">

<div className="flex flex-col w-full  lg:w-6/12  lg:px-10 py-4 ">
            <Navbar />
            <div className='hero flex flex-col gap-4 lg:ml-16 h-full w-full justify-center'>
            <h2 className='text-4xl'>Website</h2>
    <h1 className='text-6xl font-bold font-[avenir-black]'>DROVES</h1>
    <p className=' font-[avenir-light] w-10/12 lg:w-8/12'>
    Landing page for a commercial drone company.</p>
    <button className='bg-white text-[#222222] py-3 w-max flex items-center gap-2 px-8 font-[avenir-black]'>
       View Project

        <img src={rightArrow} alt="right arrow"/>

     </button>
        </div>


            <Footer />
        </div>


        <div className="flex flex-col  bg-black items-center justify-center w-full  lg:w-6/12 ">
            <img src={Droves} />


            </div>

    </div>
</div>
  )
}

export default Drooves