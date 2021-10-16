import React from "react";

const Aboutme = () => {
  return (
    <section className="bg-PrimaryColor">
    <div className="container  py-32 ">
      <h1 className="pb-12 text-3xl  font-semibold " >About me</h1>
      <div className="flex  flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 items-center ">

            <p className="text-lg text-gray-400 " > Hello! My name is Akshay and I enjoy creating things that live on the
          internet. My interest in web development started back in 2012 when I
          decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS! </p>

          <p className="text-lg text-gray-400 py-6 "  > Fast-forward to today, and I've had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.</p>
        <p className="text-lg text-gray-400 pb-6 "  > I also recently launched a course that covers
          everything you need to build a web app with the Spotify API using Node
          & React. Here are a few technologies I've been working with recently:</p>

          <h2>Here are a few technologies I've been working with recently:</h2>
        
        <div className="flex justify-between w-3/4 md:w-3/5 ">
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
                    <li>Tailwind</li>
                </ul>
            </div>
        </div>

        </div>
        {/* <div className="w-1/3 AboutImg">
        <div className="ImgWrapper">
        <img src="/Images/Akshay-1.jpg" alt="myImg" />

        </div>
        </div> */}
        {/* new */}
        <div className="w-1/2 AboutImg">
        <div className="box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
<div className="content">
<img src="/Images/Akshay-1.jpg" alt="myImg" />

</div>
        </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Aboutme;
