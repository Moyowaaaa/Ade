import React from 'react'
import { useState } from 'react'
import close from '../images/close.svg'
const NavLinks = ({setOpenMenu, openMenu}) => {

  

    const closeMenu = () => {
        setOpenMenu(false)
      }

      const scrollToHome = () => {
          document.querySelector('#home').scrollIntoView({
            behavior: 'smooth'
       });
      }

          const scrollToProject = () => {
        document.querySelector('#projects').scrollIntoView({
          behavior: 'smooth'
     });

    }

     const scrollToRandoms = () => {
      document.querySelector('#randoms').scrollIntoView({
        behavior: 'smooth'
   });
  }
  
   const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
 });

}

  return (
    <div className={`border-2 py-6 px-10 w-full absolute top-0 right-0 left-0 ease-in-out duration-700 bg-[#E5E5E5] text-[#222222] z-50 flex justify-between font-[avenir-black] font-bold cursor-pointer ${openMenu ? " translate-y-0" : " translate-y-[-150%]"}`}>

      
<div onClick={scrollToHome}>
    <h1 className='text-lg link '>SA</h1>
    </div>
    
    <div className='flex gap-4 '>
    
      <div onClick={scrollToHome}>
      <p className='link'>Home</p>
    
      </div>
    
    
    <div onClick={scrollToProject}>
    
    <p className='link'>Projects</p>
    </div>
    
    <div onClick={scrollToRandoms}>
    <p className='link'>Randoms</p>
    
    </div>
    
    <div   onClick={scrollToContact}>
    <p  className='link'>Contact</p>
    </div>
    
    </div>
    
    <button className=' z-50 text-lg' onClick={closeMenu}><img src={close}/></button>
    
    
    
        </div>
  )
}

export default NavLinks