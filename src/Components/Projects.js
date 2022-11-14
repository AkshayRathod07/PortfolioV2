import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
    // useEffect(() => {
    //     Aos.init({
    //       duration:2000
    //     })
    //   }, [])

    const ProjectArray = [
        {
            image: "/Images/Project-mockup/Ethics.png",
            name: "EHCS",
            link: 'http://essentialhrconsultancyservice.com/',
            desc: 'Essential Hr Consultancy Service | India'
        },
        {
            image: "/Images/Project-mockup/2.png",
            name: "Brand system",
            link: 'https://www.brandsystem.in/',
            desc: " integrated marketing agency | India (Worked with pranjal - https://pranjaldoorwar.com/)"

        },
        {
            image: "/Images/Project-mockup/1.png",
            name: "Kat theo",
            link: 'https://www.whatcommute.com/',
            desc: "Remote Job Board | USA (Worked with pranjal - https://pranjaldoorwar.com/)"
        },
        {
            image: "/Images/Project-mockup/sample-wrok.png",
            name: "Business website",
            link: 'https://business-web-template.netlify.app/',
            desc: "Sample Business Template "

        },




    ]

    return (
        <section className="bg-SecondColor">
            <div className="containers px-34 lg:px-12 xl:px-32  2xl:px-44 py-30  ">
                <h1 className="py-20 text-center text-3xl font-semibold "  >My Previous Work </h1>



                <div className="flex w-full flex-wrap ">
                    {
                        ProjectArray.map((item, i) => {
                            return (
                                <div key={i} className="Card w-full lg:w-1/2 px-2 pt-10 mb-14" >
                                    <img src={item.image} alt="img" data-aos="zoom-in-up" />
                                    <div className=" ProjectCta-grid" >
                                        <div className="">
                                            <h1 className="text-2xl font-medium pb-3 " >{item?.name}</h1>
                                            <p className="font-medium" >{item?.desc}</p>

                                        </div>
                                        <div className="ProjectCta  ">
                                            <a href="" target="_blank" rel="noopener noreferrer" className=" text-2xl mb-3 " > <FiExternalLink /> </a>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-medium  cool-link  " >Visit Website</a>

                                        </div>
                                    </div>
                                </div>



                            )
                        })
                    }

                    <a href="#" className=" bg-transparent border-gray-400 border-border1 px-8 py-3 mt-5 rounded-sm mx-auto font-bold tracking-wider hover:bg-white  hover:text-gray-700 transition duration-200 ease-in-out " >More Projects</a>

                </div>


            </div>
        </section>
    )
}

export default Projects
