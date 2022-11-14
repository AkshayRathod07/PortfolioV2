import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Aboutme from '../../Components/Aboutme'
import Footer from '../../Components/Footer'
import Projects from '../../Components/Projects'
import Loader from "../../Components/Loader";
import SocialMedia from "../../Components/SocialMedia";

const HomePage = () => {
    // useEffect(() => {
    //     Aos.init({
    //       duration:2000
    //     })
    //   }, [])
    return (
        <section className="bg-SecondColor">
            <div className="container pl-3 md:pl-20 lg:pl-32 min-h-screen ">
                <div className="font-Poppins pt-28 md:pt-52 ">
                    <h4 >HI, my name is</h4>
                    <h1 className="md:text-5xl text-3xl font-bold my-6  flex-1 " >Akshay Rathod.</h1>
                    <h1 className="md:text-6xl text-4xl font-bold mb-5"  > I build things for the web </h1>
                    <p className="w-full md:w-2/3" >I'm a software Developer specializing in building  Website and App (React-Native) .</p>

                    <div className="pt-10">
                        <button className="btn" ><a href=" mailto:akshaycoder07@gmail.com">Get In Touch</a></button>
                    </div>
                </div>
            </div>
            {/* <Loader/> */}

            <SocialMedia />

            <Aboutme />

            <Projects />

            <Footer />
        </section>
    )
}

export default HomePage
