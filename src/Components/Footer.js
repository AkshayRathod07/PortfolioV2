import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center " >
            <h1 className='pt-16 md:pt-24 text-center text-3xl font-semibold ' >Get In Touch</h1>
            <p className="py-5 p-2 w-full md:w-1/2 lg:w-1/3 text-center " >Although I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <button className="btn" ><a href=" mailto:akshaycoder07@gmail.com">Say Hello</a></button>

        </div>
    )
}

export default Footer
