
import React, { useState } from 'react'
import kebab from '../images/kebab.svg'


const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false)

    const closeMenu = () => {
        setOpenMenu(false)
      }

      
    

  return (
    <div className='hidden lg:flex w-full '>
    <div className='flex w-full   justify-between font-[avenir-medium] '>

    <a href='#home' data-scroll-to>
    <h1 className='text-lg '>SA</h1>
    </a>



<button className="top-6 right-6  z-50 text-4xl" onClick={() => setOpenMenu(!openMenu)}>
<img src={kebab} /></button>



</div>

<div className={`'border-2 border-[red] py-6 px-10 w-full absolute top-0 right-0 left-0 ease-in-out duration-700 bg-[#E5E5E5] text-[#222222] z-50 flex justify-between '${openMenu ? " translate-y-0" : " translate-y-[-150%]"}`}>
<h1 className='text-lg '>SA</h1>


<div className='flex gap-4'>

  <a href='#home' data-scroll-to  onClick={() => {setOpenMenu(false)}}>
  <p>Home</p>

  </a>


<a href='#projects' data-scroll-to onClick={() => {setOpenMenu(false)}}>

<p>Projects</p>
</a>

<a href='#randoms' data-scroll-to onClick={() => {setOpenMenu(false)}}>
<p>Randoms</p>

</a>

<a href='#contact' data-scroll-to onClick={() => {setOpenMenu(false)}}>
<p>Contact</p>
</a>

</div>


<button className=' z-50 text-lg' onClick={closeMenu}>X</button>


</div>
</div>
  
)
}

export default Navbar