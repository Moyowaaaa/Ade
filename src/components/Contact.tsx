import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import portfolio from '../images/portfolio.png'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import behance from '../images/behance.svg'
import mail from '../images/mail.svg'
import { gsap } from 'gsap'
import smile from '../images/smile.svg'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { componentProps } from '../types'




const Contact = ({openMenu,setOpenMenu}:componentProps) => {
  const contactPageRef = useRef<any>()
  const socialRef = useRef(null)
  const box = useRef(null)

  const [reveal, setReveal] = useState(false);
  const onScreen = useIntersectionObserver(contactPageRef, 0.125)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)

  }, [onScreen])

  useEffect(() => {
    if(onScreen && reveal) {
      const tl = gsap.timeline()
      const ctx = gsap.context(() => {
        tl.from(socialRef.current, {
              x:-600,
              y:200,
              ease:"power3.inOut",
              duration:1
              // delay:3.2
            })
      })
      return () => ctx.revert();
    }
  },[onScreen])


 

  return (
    <div className='section flex min-h-screen h-screen flex-col  lg:px-10 py-4  w-[100vw] ' id="contact" data-scroll-section ref={contactPageRef}>
    <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
  
  
    <div className='h-full w-full  flex flex-col justify-center items-center py-2  lg:px-10 py-6 gap-4'>
      <h1 className='text-3xl lg:text-6xl font-[avenir-black] '>
      LIKE WHAT YOU SEE?
      </h1>

      <div className='flex gap-2 items-center'>
        
        <p>Get in touch and let’s create magic!</p>
        <img src={smile} alt="smile" className='-rotate-90'/>
        </div>


        <div className='contact-links flex gap-3' ref={socialRef}>
        <a href='https://www.linkedin.com/in/adeoluwa-siyanbade-539b84170/' target="_blank" rel="noreferrer" >
        <img src={linkedin} className="linkedin" alt="linkedin"/>
        </a>

        <a href='https://twitter.com/Commodore_Ade'  target="_blank" rel="noreferrer" >
        <img src={twitter}  className="twitter" alt="twitter"/>
        </a>

        <a href='https://www.behance.net/adesiyanbss' target="_blank" rel="noreferrer" >
        <img src={behance} className="behance" alt="behance"/>
        </a>

        <a href="mailto:minneade@gmail.com" target="_blank">
            <img src={mail}  alt="mail"/>
            </a>
        </div>

        {/* <div className="box w-2/12 h-[4rem] bg-[blue]" ref={box}></div> */}
  
           {/* <div className="box2 w-2/12 h-[4rem] bg-[green]">

           </div> */}
       
    </div>
          
  
      </div>
  )
}

export default Contact