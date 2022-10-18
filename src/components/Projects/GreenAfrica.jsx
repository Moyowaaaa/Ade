import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import rightArrow from '../../images/rightarrow.svg'
import greenAfrica from '../../images/green.png'



const GreenAfrica = () => {
  return (
    <div className="flex py-4 lg:py-0 flex  h-max lg:min-h-screen lg:h-screen flex-col  w-[100vw]  " data-scroll-section>
    <div className="flex flex-col-reverse lg:flex-row w-full  h-full">

            <div className="flex  flex-col w-full  lg:w-6/12  lg:px-10 py-4 ">
                <Navbar />
                <div className='hero flex flex-col gap-4 lg:ml-16 h-full w-full justify-center  px-2 lg:px-0 '>
                <h2 className='text-4xl underline lg:no-underline'>Mobile App</h2>
        <h1 className='text-6xl font-bold font-[avenir-black]'>Green Africa</h1>
        <p className='hidden lg:flex font-[avenir-light] w-10/12 w-8/12'>
        Mobile app inspired by the green africa airline website, for flight <br/> booking and reservations.
        </p>

        <p className='lg:hidden font-[avenir-light] w-11/12 w-8/12'>
        Mobile app inspired by the green africa airline website, for flight booking and reservations.
        </p>
        <button className='bg-white text-[#222222] py-3 w-max flex items-center gap-2 px-8 font-[avenir-black]'>
          Available On Request

            <img src={rightArrow} alt="right arrow"/>

         </button>
            </div>


                <Footer />
            </div>


            <div className="flex flex-col w-full lg:w-6/12 ">
                <img src={greenAfrica} />


                </div>

        </div>
    </div>
  )
}

export default GreenAfrica