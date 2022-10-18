import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import rightArrow from '../../images/rightarrow.svg'
import easy from '../../images/easy.png'


const Easy = () => {
  return (
    <div className="flex py-4 lg:py-0 h-max lg:min-h-screen lg:h-screen flex-col  w-[100vw]  " data-scroll-section>
    <div className="flex flex-col-reverse lg:flex-row w-full  h-full">

    <div className="flex flex-col w-full  lg:w-6/12  lg:px-10 py-4 ">
            <Navbar />
            <div className='hero flex flex-col gap-4 lg:ml-16 h-full w-full justify-center'>
            <h2 className='text-4xl'>Website</h2>
    <h1 className='text-6xl font-bold font-[avenir-black]'>Easy</h1>
    <p className='font-[avenir-light] w-10/12 lg:w-8/12'>
    Landing page for a finance management application company. The <br />application grants the user the freedom of control and the comfort of <br/> security of hi/her finances.</p>
    <button className='bg-white text-[#222222] py-3 w-max flex items-center gap-2 px-8 font-[avenir-black]'>
       View Project

        <img src={rightArrow} alt="right arrow"/>

     </button>
        </div>


            <Footer />
        </div>


        <div className="flex flex-col w-full lg:w-6/12 ">
            <img src={easy} />


            </div>

    </div>
</div>
  )
}

export default Easy