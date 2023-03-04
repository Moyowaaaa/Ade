import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Air from '../../images/air.png'
import { componentProps } from '../../types'


const NikeAir = ({openMenu,setOpenMenu}:componentProps) => {
  return (
    <div className='section  main flex min-h-screen h-screen flex-col  w-[100vw]' data-scroll-section id="nikeAir">
        <div className='px-10 py-6 '>
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />

        </div>
        <div className=' w-full h-4/5 flex flex-col items-center justify-center bg-[#617E1B] py-2 object-contain'>
            <img src={Air} className='relative object-contain w-11/12 lg:w-6/12' alt="AIR"/>
        </div>
      
     
        <div className='py-2 px-10 py-6'>
        <Footer/>
        
        </div>
      
        </div>
  )
}

export default NikeAir