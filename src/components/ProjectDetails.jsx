import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const ProjectDetails = ({Project}) => {
  return (
    <div className=" absolute flex min-h-screen h-screen flex-col   w-[100vw] " data-scroll-section>
        
        <div className="flex w-full  h-full">

<div className="flex flex-col w-6/12  px-10 py-4">
    <Navbar />
    <div className='hero flex flex-col gap-4 ml-16 h-full w-full justify-center'>
    <h2 className='text-4xl'>{Project.type}</h2>
<h1 className='text-6xl font-bold font-[avenir-black]'>{Project.title}</h1>
<p className='font-bold font-[avenir-light] w-8/12'>
{/* Mobile alarm app, designed with simplicity and ease of use in mind.<br/>Almost all needed functions of the app are in one screen. */}
{Project.description}
</p>
<button className='bg-white text-[#222222] py-3 w-max flex items-center gap-2 px-8 font-[avenir-black]'>
View Project

<img src={rightArrow} alt="right arrow"/>

</button>
</div>


    <Footer />
</div>


<div className="flex flex-col w-6/12 ">
    <img src={Project.Image} />


    </div>

</div>
        
        
        </div>
  )
}

export default ProjectDetails