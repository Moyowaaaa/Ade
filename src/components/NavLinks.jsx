import React from 'react'
import { useState } from 'react'
import close from '../images/close.svg'
const NavLinks = ({setOpenMenu, openMenu}) => {

  

    const closeMenu = () => {
        setOpenMenu(false)
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
    <div className={`border-2 py-6 px-10 w-full absolute top-0 right-0 left-0 ease-in-out duration-700 bg-[#E5E5E5] text-[#222222] z-50 flex justify-between font-[avenir-black] font-bold ${openMenu ? " translate-y-0" : " translate-y-[-150%]"}`}>

    <h1 className='text-lg link'>SA</h1>
    
    <div className='flex gap-4 '>
    
      <a href='#home'   onClick={() => {setOpenMenu(false)}}>
      <p className='link'>Home</p>
    
      </a>
    
    
    <a href='#projects'  onClick={() => {setOpenMenu(false)}}>
    
    <p className='link'>Projects</p>
    </a>
    
    <a href='#randoms'  onClick={() => {setOpenMenu(false)}}>
    <p className='link'>Randoms</p>
    
    </a>
    
    <a href='#contact'  onClick={() => {setOpenMenu(false)}}>
    <p  className='link'>Contact</p>
    </a>
    
    </div>
    
    <button className=' z-50 text-lg' onClick={closeMenu}><img src={close}/></button>
    
    
    
        </div>
  )
}

export default NavLinks