import React from 'react'
import Aboutme from '../../Components/Aboutme'
import Footer from '../../Components/Footer'
import Projects from '../../Components/Projects'

const HomePage = () => {
    return (
        <section className="bg-SecondColor">
            <div className="container  min-h-screen ">
               <div className="font-Poppins pt-80 ">
               <h4 >HI, my name is</h4>
                <h1 className="text-5xl font-bold my-6  flex-1 " >Akshay Rathod.</h1>
                <h1 className="text-6xl font-bold mb-5" >I build things for the web</h1>
                <p className="w-full md:w-1/2" >I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.Currently, I'm focused on building accessible, human-centered products at Upstatement.</p>

                <div className="pt-10">
                <button className="btn" ><a href=" mailto:akshaycoder07@gmail.com">Get In Touch</a></button>
                </div>
               </div>
            </div>
            <Aboutme/>

            <Projects/>

            <Footer />
        </section>
    )
}

export default HomePage
    