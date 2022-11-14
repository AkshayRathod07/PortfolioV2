import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { RiGithubLine } from "react-icons/ri";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <ul className="lists" >
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/AkshayRathod07">

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
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/akshay-rathod-8a0a38207/">
            <ImLinkedin2 />
          </a>
        </li>
        <li>

          <a target="_blank" rel="noopener noreferrer" href=" mailto:akshaycoder07@gmail.com">

            <AiOutlineMail />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
