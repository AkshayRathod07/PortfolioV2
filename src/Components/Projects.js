import React from 'react'
import { BsGithub } from 'react-icons/bs';

const Projects = () => {

    const ProjectArray = [
        {
            image:"/Images/Project-mockup/1.png",
            name:"Kat theo"
        },
        {
            image:"/Images/Project-mockup/2.png",
            name:"Brand system"

        },
        {
            image:"/Images/Project-mockup/2.png",
            name:"Brand system"

        },
        {
            image:"/Images/Project-mockup/1.png",
            name:"Kat theo"
        },
       
        
    ]

    return (
        <section className="bg-SecondColor">
        <div className="containers px-34 lg:px-12 xl:px-32  2xl:px-44 py-30  ">
         <h1 className="py-20 text-center text-3xl font-semibold " >My Previous Work </h1>

        

            <div className="flex w-full flex-wrap ">
            {
             ProjectArray.map((item,i)=>{
                 return(
                <div key={i} className="Card w-full lg:w-1/2 px-2 pt-10">
                    <img src={item.image} alt="img" />
                    <div className="flex justify-between px-1 sm:px-20  py-14 lg:px-14 xl:px-24 2xl:px-32">
                        <div className="">
                        <h1 className="text-2xl font-medium pb-3 " >Kat Theo</h1>
                        <p className="font-medium" >Remote Job Board | USA</p>
                        </div>
                        <div className="ProjectCta">
                            <a href="#" className=" text-2xl mb-3 " > <BsGithub/> </a>
                        <a href="#" className="font-medium cool-link  " >Visit Website</a>

                        </div>
                    </div>
                </div>
               
                
               
                )
             })
         }

         <a href="#" className=" bg-transparent border-gray-400 border-border1 px-8 py-3 mt-5 rounded-sm mx-auto font-bold tracking-wider hover:bg-white  hover:text-gray-700 transition duration-200 ease-in-out " >More Projects</a>

            </div>
            {/* <div className="flex w-full">
                <div className="Card w-full lg:w-1/2">
                    <img src="/Images/landing-page.png" alt="img" />
                    <div className="">
                        <h1>hey bro</h1>
                    </div>
                </div>
                <div className="Card w-1/2">
                    <img src="/Images/landing-page.png" alt="img" />
                    <div className="">
                        <h1>hey bro</h1>
                    </div>
                </div>
               
            </div> */}
           
        </div>
    </section>
    )
}

export default Projects
