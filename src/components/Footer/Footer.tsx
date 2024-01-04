import {
  faInstagram,
  faLinkedin,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer
      className={`max-w-full h-72 bg-primary mx-auto my-0 pl-36 pr-9    
      py-10 flex justify-between relative overflow-hidden font-text z-0 text-text 
      sm:h-fit sm:pt-8 sm:pr-9 sm:pb-20 sm:pl-4 sm:flex-col sm:justify-start 
      md:h-fit md:pt-10 md:pr-36 md:pb-12 md:pl-4 
     lg:pt-10 lg:pr-16 lg:pb-16 lg:pl-10 `}
    >
      <div
        className={`flex flex-col justify-between h-48 w-80 m-0 
        sm:absolute sm:h-5/6
        md:h-5/6 md:absolute md:justify-between md:m-0 
        lg:h-48 `}
      >
        <h1 className="text-white text-lg font-medium ">
          Synthesis Workshop ©, 2023
        </h1>
        <p className="text-footerText text-lg ">
          Terms of Service <br /> synthesisworkshopvideos@gmail.com
        </p>
      </div>
      <div
        className={`
          text-footerText text-lg no-underline font-normal 
          w-80 flex flex-col h-32 flex-wrap content-between gap-1 m-0 
          sm:mx-0 sm:mt-14 sm:w-fit sm:gap-x-16
          md:mx-0 md:my-16
          lg:w-64 `}
      >
        <Link to="/" className="w-fit hover:opacity-80 ">
          Episodes
        </Link>
        <Link to="/" className="w-fit hover:opacity-80 ">
          Problem Sets
        </Link>
        <Link to="/" className="w-fit hover:opacity-80 ">
          Posters
        </Link>
        <Link to="/" className="w-fit hover:opacity-80 ">
          Publications
        </Link>
        <Link to="/" className="w-fit hover:opacity-80 ">
          Downloads
        </Link>
        <Link to="/" className="w-fit hover:opacity-80 ">
          Contacts
        </Link>
        <Link to="/" className="w-fit hover:opacity-80 ">
          About
        </Link>
      </div>
      <div
        className={`text-footerText text-lg no-underline font-normal w-48 h-48 
        flex flex-col font-semibold mx-0 -my-2
        sm:h-28 sm:w-fit sm:flex-wrap sm:gap-y-3 sm:gap-x-14 sm:mx-0 sm:my-14
        md:w-32 md:mx-0 md:my-14
        lg:w-32 `}
      >
        <Link
          to=""
          className="h-11 text-left flex items-center w-fit hover:opacity-80 "
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#ffffff" }}
            className="w-7 h-7 ml-0 mr-2.5 my-0 "
          />
          Instagram
        </Link>

        <Link
          to="https://www.linkedin.com/company/synthesis-workshop/"
          className="h-11 text-left flex items-center w-fit hover:opacity-80 "
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#ffffff" }}
            className="w-7 h-7 ml-0 mr-2.5 my-0 "
          />
          LinkedIn
        </Link>

        <Link
          to=""
          className="h-11 text-left flex items-center w-fit hover:opacity-80 "
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faTwitterSquare}
            style={{ color: "#ffffff" }}
            className="w-7 h-7 ml-0 mr-2.5 my-0 "
          />
          Twitter
        </Link>

        <Link
          to="https://www.youtube.com/@SynthesisWorkshopVideos"
          className="h-11 text-left flex items-center w-fit hover:opacity-80 "
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: "#ffffff" }}
            className="w-7 h-7 ml-0 mr-2.5 my-0 "
          />
          YouTube
        </Link>
      </div>
      <div
        className={`absolute flex w-full h-96 filter blur-[21.5px] mt-16 -mr-16 -mb-96 ml-64 
       -rotate-[15.989deg] bg-[linear-gradient(_356deg,_rgba(87,_90,_164,_0.2)_49.16%,_rgba(87,_90,_164,_0)_76.2%_),_linear-gradient(26deg,_#888b9a_41.64%,_rgba(136,_139,_154,_0)_80.9%)] 
       sm:w-full sm:h-96 sm:mt-52 sm:mr-0 sm:mb-0 sm:ml-20 sm:-rotate-[27deg] -z-10 
       md:w-full md:mt-40 md:-mr-16 md:-mb-96 md:ml-64 
       lg:w-full lg:mt-20 lg:-mr-16 lg:-mb-96 lg:ml-80 lg:-rotate-12 `}
      />
    </footer>
  );
};
