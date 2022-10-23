
import React, { useState, useEffect, useRef } from 'react'
import kebab from '../images/kebab.svg'
import close from '../images/close.svg'
import useOnClickOutside from '../hooks/useOnClickOutside'


const MobileNav = () => {
    const [openMenu,setOpenMenu] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const ref = useRef()
    

    useOnClickOutside(ref, () => setOpenMenu(false))



    const closeMenu = () => {
        setOpenMenu(false)
      }

      useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setIsScrolled(true)
            }else {
                setIsScrolled(false)
            }
        }


        window.addEventListener('scroll',handleScroll)

      
        

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    })

    


  return (
    
      <div className={`lg:hidden z-50 bg-[#0a192f] text-[white] ${isScrolled? 'bg-[black]' : 'bg-transparent'}`} data-scroll-section ref={ref}>
        
        
  


        <div className={`flex w-full lg:hidden fixed p-6 items-center  justify-between font-[avenir-medium]   ${isScrolled? 'bg-[black]' : 'bg-transparent'}`}>


    <a href='#home' data-scroll-to>
    <h1 className='text-lg '>SA</h1>
    </a>



<button className="top-6 right-6 lg:hidden z-50 text-4xl" onClick={() => setOpenMenu(!openMenu)}>
<img src={kebab} /></button>



</div>


      <div className={`"top-0 right-0 fixed text-[white] bg-[#222222] shadow-lg h-full w-screen z-50 ease-in-out duration-700 " ${openMenu ? " translate-x-0" : " translate-x-full"} `}>
      <button className='top-6 right-12 fixed z-50 text-2xl lg:hidden' onClick={closeMenu}>X</button>



      <div className='w-full h-4/6 lg:hidden'>
        <div className=' flex flex-col h-full items-center justify-center gap-8' >

       
          <a href='#projects'>
        <p onClick={closeMenu} className={`hover:border-b-2 border-[#46b1a0] `}>Projects</p>
        </a>


        <a href='#randoms'>
             <p onClick={closeMenu} className='hover:border-b-2 border-[blue]'>Randoms</p>
        </a>

        <a href='#contact'>
                
                <p onClick={closeMenu} className={`hover:border-b-2 border-[blue]`}>Contact</p></a>


        </div>

        </div>
     
        </div>
    </div>
  )
}

export default MobileNav