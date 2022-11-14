import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMongodb, DiNodejsSmall } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";


const Aboutme = () => {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <section className="bg-PrimaryColor  ">
      <div className=" px-5 lg:px-16 xl:px-32  2xl:px-44 py-24 ">
        <h1 className="pb-20 text-center text-3xl font-semibold "  >About me</h1>
        <div className="flex  flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 items-center " data-aos="fade-right"  >

            <p className="text-lg text-gray-400 " > Hello! My name is Akshay and I enjoy creating things that live on the
              internet. I Have Completed My College From Pune(India) In BCA (Bachelor of Computer Application) And Currently Working In BrandWick </p>

            <p className="text-lg text-gray-400 py-6 "  >I Am Hardworking ,Creative And Enthusiastic Toward My Work.. I Will Be Glad To Work With You And Showcase My Skills . You Can   <a href=" mailto:akshaycoder07@gmail.com">Contact Me.</a></p>
            <p className="text-lg text-gray-400 pb-6 "  > </p>

            <h2>Here are a few technologies I've been working with recently:</h2>

            <div className="flex justify-between w-3/4 lg:w-3/5 "  >
              <div className="pt-5">
                <ul className="skillList" >
                  <li className="flex items-center" > <SiJavascript /> <span className="ml-2" >JavaScript (ES6+)</span></li>
                  <li className="flex items-center" > <DiNodejsSmall /> <span className="ml-2" >Node.js</span></li>
                  <li className="flex items-center" > <DiMongodb /> <span className="ml-2" >MongoDB</span></li>
                </ul>
              </div>
              <div className="pt-5">
                <ul className="skillList" >
                  <li className="flex items-center" > <FaReact /> <span className="ml-2" >React</span></li>
                  <li className="flex items-center" > <SiNextdotjs /> <span className="ml-2" >Next.js</span></li>
                  <li className="flex items-center" > <RiReactjsLine /> <span className="ml-2" > React-native (mobile) </span></li>

                </ul>
              </div>
            </div>

          </div>

          <div className="w-1/2 AboutImg pb-32" data-aos="fade-left">
            <div className="box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="content"  >
                <img src="/Images/akshay.jpeg" alt="myImg" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
