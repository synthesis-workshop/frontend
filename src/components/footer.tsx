import {
  faLinkedin,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { uniqueId } from "lodash";
import React from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Episodes", link: "/episodes" },
  { label: "Problem Sets", link: "/problem-sets" },
  { label: "Posters", link: "#posters" },
  { label: "Publications", link: "/publications" },
  { label: "Downloads", link: "#downloads" },
  { label: "Contacts", link: "#contact" },
  { label: "About", link: "#about" },
];

const socials = [
  // Commenting out until we have an instagram link
  // { label: "Instagram", link: "", icon: faInstagram },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/company/synthesis-workshop/",
    icon: faLinkedin,
  },
  {
    label: "Twitter",
    link: "https://twitter.com/MatthewHorwitz1",
    icon: faTwitterSquare,
  },
  {
    label: "YouTube",
    link: "https://www.youtube.com/@SynthesisWorkshopVideos",
    icon: faYoutubeSquare,
  },
];

export const Footer: React.FC = () => {
  return (
    <footer
      className={cx(
        `max-w-full h-72 bg-primary mx-auto my-0 pl-36 pr-9    
        py-10 flex justify-between relative overflow-hidden font-text z-0 text-white/80 
        sm:h-fit sm:pt-8 sm:pr-9 sm:pb-20 sm:pl-4 sm:flex-col sm:justify-start 
        md:h-fit md:pt-10 md:pr-36 md:pb-12 md:pl-4 
        lg:pt-10 lg:pr-16 lg:pb-16 lg:pl-10 `,
      )}
    >
      <div
        className={cx(
          `flex flex-col justify-between h-48 w-80 m-0 
          sm:absolute sm:h-5/6
          md:h-5/6 md:absolute md:justify-between md:m-0 
          lg:h-48 `,
        )}
      >
        <h1 className="text-white text-lg font-medium ">
          Synthesis Workshop ©, 2023
        </h1>
        <div className="text-footerText text-lg ">
          <a href="" target="_blank">
            Terms of Service
          </a>
          <a href="mailto:synthesisworkshopvideos@gmail.com">
            synthesisworkshopvideos@gmail.com
          </a>
        </div>
      </div>
      <div
        className={cx(
          `text-footerText text-lg no-underline font-normal 
            w-80 flex flex-col h-32 flex-wrap content-between gap-1 m-0 
            sm:mx-0 sm:mt-14 sm:w-fit sm:gap-x-16
            md:mx-0 md:my-16
            lg:w-64 `,
        )}
      >
        {links.map(({ label, link }) => (
          <Link
            key={uniqueId(label)}
            to={link}
            className="w-fit hover:opacity-80 "
          >
            {label}
          </Link>
        ))}
      </div>
      <div
        className={cx(
          `text-footerText text-lg no-underline font-normal w-48 h-48 
          flex flex-col font-semibold mx-0 -my-2
          sm:h-28 sm:w-fit sm:flex-wrap sm:gap-y-3 sm:gap-x-14 sm:mx-0 sm:my-14
          md:w-32 md:mx-0 md:my-14
          lg:w-32 `,
        )}
      >
        {socials.map(({ label, link, icon }) => (
          <Link
            to={link}
            className="h-11 text-left flex items-center w-fit hover:opacity-80 "
            target="_blank"
          >
            <FontAwesomeIcon
              icon={icon}
              className="text-white w-7 h-7 ml-0 mr-2.5 my-0 "
            />
            {label}
          </Link>
        ))}
      </div>
      <div
        className={cx(
          `absolute flex w-full h-96 filter blur-[21.5px] mt-16 -mr-16 -mb-96 ml-64 
          -rotate-[15.989deg] bg-[linear-gradient(_356deg,_rgba(87,_90,_164,_0.2)_49.16%,_rgba(87,_90,_164,_0)_76.2%_),_linear-gradient(26deg,_#888b9a_41.64%,_rgba(136,_139,_154,_0)_80.9%)] 
          sm:w-full sm:h-96 sm:mt-52 sm:mr-0 sm:mb-0 sm:ml-20 sm:-rotate-[27deg] -z-10 
          md:w-full md:mt-40 md:-mr-16 md:-mb-96 md:ml-64 
          lg:w-full lg:mt-20 lg:-mr-16 lg:-mb-96 lg:ml-80 lg:-rotate-12 `,
        )}
      />
    </footer>
  );
};
