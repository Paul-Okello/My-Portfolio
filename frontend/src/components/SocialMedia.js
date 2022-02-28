import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedin, GrGithub } from "react-icons/gr";

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a
        href='https://twitter.com/Lopoz_official'
        target='_blank'
        rel='noreferrer'>
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href='https://www.linkedin.com/in/paul-okello-11b3031b0/'
        target='_blank'
        rel='noreferrer'>
        {" "}
        <GrLinkedin />
      </a>
    </div>
    <div>
      <a href='https://github.com/Paul-Okello' target='_blank' rel='noreferrer'>
        <GrGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
