
import React, { useEffect, useRef, useState } from 'react'
import kebab from '../images/kebab.svg'
import { gsap } from 'gsap'
import close from '../images/close.svg'
import useOnClickOutside from '../hooks/useOnClickOutside'


const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false)
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

<div className={`'border-2 border-[red] py-6 px-10 w-full absolute top-0 right-0 left-0 ease-in-out duration-700 bg-[#E5E5E5] text-[#222222] z-50 flex justify-between font-[avenir-black] font-bold '${openMenu ? " translate-y-0" : " translate-y-[-150%]"}`}>


<h1 className='text-lg link'>SA</h1>


<div className='flex gap-4 '>

  <a href='#home' data-scroll-to  onClick={() => {setOpenMenu(false)}}>
  <p className='link'>Home</p>

  </a>


<a href='#projects' data-scroll-to onClick={() => {setOpenMenu(false)}}>

<p className='link'>Projects</p>
</a>

<a href='#randoms' data-scroll-to onClick={() => {setOpenMenu(false)}}>
<p className='link'>Randoms</p>

</a>

<a href='#contact' data-scroll-to onClick={() => {setOpenMenu(false)}}>
<p  className='link'>Contact</p>
</a>

</div>


<button className=' z-50 text-lg' onClick={closeMenu}><img src={close}/></button>


</div>
</div>
  
)
}

export default Navbar