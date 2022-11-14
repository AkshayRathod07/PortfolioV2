import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"


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

            <p className="text-lg text-gray-400 py-6 "  > Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a student-led
              design studio. My main focus these days is building accessible,
              inclusive products and digital experiences at Upstatement for a
              variety of clients.</p>
            <p className="text-lg text-gray-400 pb-6 "  > I also recently launched a course that covers
              everything you need to build a web app with the Spotify API using Node
              & React. Here are a few technologies I've been working with recently:</p>

            <h2>Here are a few technologies I've been working with recently:</h2>

            <div className="flex justify-between w-3/4 lg:w-3/5 "  >
              <div className="pt-5">
                <ul className="skillList" >
                  <li>JavaScript (ES6+)</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="pt-5">
                <ul className="skillList" >
                  <li>React</li>
                  <li>Next.js</li>
                  <li>React-native (mobile) </li>
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
