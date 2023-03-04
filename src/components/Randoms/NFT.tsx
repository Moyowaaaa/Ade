import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import nft from '../../images/nft.png'
import { componentProps } from '../../types'

const NFT = ({openMenu,setOpenMenu}:componentProps) => {
  return (
    <div className='section main flex min-h-screen h-screen flex-col  w-[100vw]' data-scroll-section>
    <div className='px-10 py-6 '>
    <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />

    </div>
    <div className=' w-full  h-full lg:h-4/5 flex flex-col items-center justify-center bg-[#000000] py-2 object-contain lg:w-11/12 mx-auto'>
        <img src={nft} className='relative object-contain w-full lg:w-11/12 lg:w-8/12' alt="nft landing page"/>
    </div>

 
    <div className='py-2 px-10 py-6'>
    <Footer/>
    
    </div>
  
    </div>
  )
}

export default NFT