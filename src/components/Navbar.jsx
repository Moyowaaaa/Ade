
import React, { useEffect, useRef, useState } from 'react'
import kebab from '../images/kebab.svg'
import { gsap } from 'gsap'
import close from '../images/close.svg'
import useOnClickOutside from '../hooks/useOnClickOutside'


const Navbar = ({openMenu,setOpenMenu}) => {
    // const [openMenu,setOpenMenu] = useState(false)
    const ref = useRef()
    const kebabRef = useRef()

    useOnClickOutside(ref, () => setOpenMenu(false))

    const closeMenu = () => {
        setOpenMenu(false)
      }

      const tl = gsap.timeline()

      useEffect(() => {
        const ctx = gsap.context(() => {
          tl.from(kebabRef.current, {
            duration:0.6,
            rotate:45,
            opacity:0
          })
        })
        return () => ctx.revert();
      }, [])

  

      
    

  return (
    <div className='hidden lg:flex w-full ' ref={ref}>
    <div className='flex w-full   justify-between font-[avenir-medium] '>

    <a href='#home' data-scroll-to>
    <h1 className='text-lg '>SA</h1>
    </a>



<button className="top-6 right-6  z-50 text-4xl" onClick={() => {setOpenMenu(false), setOpenMenu(!openMenu)}} ref={kebabRef}>
<img src={kebab} /></button>



</div>

</div>
  
)
}

export default Navbar