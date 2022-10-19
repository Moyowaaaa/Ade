
import { useState, useEffect, useRef } from 'react'
import Bstop from '../components/Projects/Bstop'
import CodeCampus from '../components/Projects/CodeCampus'
import Drooves from '../components/Projects//Drooves'
import Easy from '../components/Projects/Easy'
import GreenAfrica from '../components/Projects/GreenAfrica'
import HeroSection from '../components/HeroSection'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Projects from '../components/Projects'
import Randoms from '../components/Randoms'
import SnoozeOff from '../components/Projects/SnoozeOff'
import useLocoScroll from '../hooks/useLocoScroll'
import NikeAir from '../components/Randoms/NikeAir'
import FeetWings from '../components/Randoms/FeetWings'
import Portfoilio from '../components/Randoms/Portfoilio'
import Contact from '../components/Contact'
import MobileNav from '../components/MobileNav'



const Home = () => {
    const [preloader, setPreloader] = useState(true)
    const [timer,setTimer] = useState(2)
    const id = useRef(null)
    const containerRef = useRef(null)
    const [scroll, setScroll] = useState();
    useLocoScroll(!preloader)
  
  
    const clear = () => {
      window.clearInterval(id.current);
      setPreloader(false)
    }
  
  
    useEffect(() => {
      id.current = window.setInterval(() => {
        setTimer((timer) => timer -1)
      }, 1500)
    },[])
  
    useEffect(() => {
      if (timer === 0){
        clear()
      }
    },[timer])

 

    

  return (
    <> {
      preloader ? (  
        <Loading/>
      ) : (
        <div className='scroll-container' ref={containerRef} data-scroll-container id="main-container">
          <MobileNav />
        <HeroSection />
        
        <Projects />
        {/* <Project /> */}
        <SnoozeOff />
        <Bstop />
        <CodeCampus />
        <Easy/>
        <GreenAfrica/>
        <Drooves />
        <Randoms />
        <NikeAir />
        <FeetWings />
        <Portfoilio />
        <Contact />
        {/* <Project /> */}
          </div>
)
    }
  
    
    </>
    )
    }
  

export default Home