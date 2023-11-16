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
        "max-w-[1440px] h-[294px] bg-primary mx-auto my-0 pl-[138px] pr-[38px] py-10 flex justify-between relative overflow-hidden font-text z-0",
        "sm:max-w-[767px] sm:h-[534px] sm:pt-[32px] sm:pr-[35px] sm:pb-[75px] sm:pl-[16px] sm:flex-col sm:justify-start",
        "md:max-w-[1023px] md:h-[427px] md:pt-10 md:pr-[136px] md:pb-[50px] md:pl-[16px]",
        "lg:max-w-[1279px] lg:pt-10 lg:pr-[60px] lg:pb-[60px] lg:pl-10"
      )}
    >
      <div
        className={cx(
          "flex flex-col justify-between h-[194px] w-[324px] m-0",
          "sm:absolute sm:h-[462px]",
          "md:h-[337px] md:absolute md:justify-between md:m-0",
          "lg:h-[194px] "
        )}
      >
        <h1 className="text-white text-lg font-medium">
          Synthesis Workshop ©, 2023
        </h1>
        <div className="text-white/80 text-lg flex flex-col">
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
          "text-white/80 text-lg no-underline font-normal",
          "w-[332px] flex flex-col h-[124px] flex-wrap content-between gap-[4px] m-0",
          "sm:ml-0 sm:mr-0 sm:mt-[54px] sm:w-[275px]",
          "md:ml-0 md:mr-0 md:my-[62px]",
          "lg:w-[256px]"
        )}
      >
        {links.map(({ label, link }) => (
          <Link
            key={uniqueId(label)}
            to={link}
            className="w-[fit-content] hover:opacity-80"
          >
            {label}
          </Link>
        ))}
      </div>
      <div
        className={cx(
          "text-white/80 text-lg no-underline font-normal",
          "w-[192px] h-[192px] flex flex-col font-semibold ml-0 mr-0 -my-[9px]",
          "sm:h-[108px] sm:w-[300px] sm:flex-wrap sm:gap-y-3 sm:gap-x-14 sm:ml-0 sm:mr-0 sm:my-[60px]",
          "md:w-[120px] md:ml-0 md:mr-0 md:my-[57px]",
          "lg:w-[120px] "
        )}
      >
        {socials.map(({ label, link, icon }) => (
          <Link
            to={link}
            className="h-[42px] text-left flex items-center w-[fit-content] hover:opacity-80"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={icon}
              className="text-white w-[26px] h-[26px] ml-0 mr-[10px] my-0"
            />
            {label}
          </Link>
        ))}
      </div>
      <div
        className={cx(
          `absolute flex w-[1095px] h-[399px] filter blur-[21.5px] mt-[115px] -mr-[63px] -mb-[368px] ml-[250px] -rotate-[15.989deg] bg-[linear-gradient(_356deg,_rgba(87,_90,_164,_0.2)_49.16%,_rgba(87,_90,_164,_0)_76.2%_),_linear-gradient(26deg,_#888b9a_41.64%,_rgba(136,_139,_154,_0)_80.9%)] `,
          "sm:w-[801px] sm:h-[393px] sm:mt-[200px] sm:mr-0 sm:mb-0 sm:ml-[75px] sm:-rotate-[27deg] -z-10",
          "md:w-[800px] md:mt-[150px] md:-mr-[63px] md:-mb-[368px] md:ml-[250px]",
          "lg:w-[1095px] lg:mt-[75px] lg:-mr-[63px] lg:-mb-[368px] lg:ml-[350px] lg:-rotate-[10.472deg] "
        )}
      />
    </footer>
  );
};
