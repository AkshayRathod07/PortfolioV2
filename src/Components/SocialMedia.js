import React from "react";
import { AiFillGithub,  AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { RiGithubLine } from "react-icons/ri";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <ul className="lists" >
        <li>
          <a href="#">
           
            <RiGithubLine />
            <title>github</title>
          </a>
        </li>
        <li>
          <a href="#">
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <ImLinkedin2  />
          </a>
        </li>
        <li>
         
          <a href="#">
           
            <AiOutlineMail />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
