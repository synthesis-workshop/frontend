import {
  faInstagram,
  faLinkedin,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className={
        footerClassNames.footer +
        footerClassNames.footerSM +
        footerClassNames.footerMD +
        footerClassNames.footerLG
      }
    >
      <div
        className={
          footerClassNames.container +
          footerClassNames.containerSM +
          footerClassNames.containerMD +
          footerClassNames.containerLG
        }
      >
        <h1 className={footerClassNames.header}>Synthesis Workshop ©, 2023</h1>
        <p className={footerClassNames.text}>
          Terms of Service <br /> synthesisworkshopvideos@gmail.com
        </p>
      </div>
      <div
        className={
          footerClassNames.links +
          footerClassNames.linkTexts +
          footerClassNames.linksSM +
          footerClassNames.linksMD +
          footerClassNames.linksLG
        }
      >
        <Link to="/" className={footerClassNames.link}>
          Episodes
        </Link>
        <Link to="/" className={footerClassNames.link}>
          Problem Sets
        </Link>
        <Link to="/" className={footerClassNames.link}>
          Posters
        </Link>
        <Link to="/" className={footerClassNames.link}>
          Publications
        </Link>
        <Link to="/" className={footerClassNames.link}>
          Downloads
        </Link>
        <Link to="/" className={footerClassNames.link}>
          Contacts
        </Link>
        <Link to="/" className={footerClassNames.link}>
          About
        </Link>
      </div>
      <div
        className={
          footerClassNames.linkTexts +
          footerClassNames.socials +
          footerClassNames.socialsSM +
          footerClassNames.socialsMD +
          footerClassNames.socialsLG
        }
      >
        <Link to="" className={footerClassNames.socialLink} target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#ffffff" }}
            className={footerClassNames.logo}
          />
          Instagram
        </Link>

        <Link
          to="https://www.linkedin.com/company/synthesis-workshop/"
          className={footerClassNames.socialLink}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#ffffff" }}
            className={footerClassNames.logo}
          />
          LinkedIn
        </Link>

        <Link to="" className={footerClassNames.socialLink} target="_blank">
          <FontAwesomeIcon
            icon={faTwitterSquare}
            style={{ color: "#ffffff" }}
            className={footerClassNames.logo}
          />
          Twitter
        </Link>

        <Link
          to="https://www.youtube.com/@SynthesisWorkshopVideos"
          className={footerClassNames.socialLink}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: "#ffffff" }}
            className={footerClassNames.logo + footerClassNames.youtube}
          />
          YouTube
        </Link>
      </div>
      <div
        className={
          footerClassNames.gradiant +
          footerClassNames.gradiantSM +
          footerClassNames.gradiantMD +
          footerClassNames.gradiantLG
        }
      />
    </footer>
  );
};

const footerClassNames = {
  footer:
    "max-w-[1440px] h-[294px] bg-[#3a3c46] mx-[auto] my-[0] pl-[138px] pr-[38px] py-[40px] flex justify-between relative overflow-hidden font-text z-0 ",
  footerSM:
    "sm:max-w-[767px] sm:h-[534px] sm:pt-[32px] sm:pr-[35px] sm:pb-[75px] sm:pl-[16px] sm:flex-col sm:justify-start ",
  footerMD:
    "md:max-w-[1023px] md:h-[427px] md:pt-[40px] md:pr-[136px] md:pb-[50px] md:pl-[16px] ",
  footerLG:
    "lg:max-w-[1279px] lg:h-[294px] lg:pt-[40px] lg:pr-[60px] lg:pb-[60px] lg:pl-[40px]",
  container: "flex flex-col justify-between h-[194px] w-[324px] m-0 ",
  containerSM: "sm:absolute sm:h-[462px] ",
  containerMD: "md:h-[337px] md:absolute md:justify-between md:m-0 ",
  containerLG: "lg:h-[194px]",
  header: "text-[#fff] text-[18px] font-medium ",
  text: "text-[rgba(255,_255,_255,_0.8)] text-[18px] ",
  linkTexts:
    "text-[rgba(255,_255,_255,_0.8)] text-[18px] no-underline font-normal ",
  links:
    "w-[332px] flex flex-col h-[124px] flex-wrap content-between gap-[4px] m-0 ",
  linksSM: "sm:ml-[0] sm:mr-[0] sm:mt-[54px] sm:w-[275px] ",
  linksMD: "md:ml-[0] md:mr-[0] md:my-[62px] ",
  linksLG: "lg:w-[256px] ",
  link: "w-[fit-content] hover:opacity-80 ",
  hover: "hover:opacity-80 ",
  socials:
    "w-[192px] h-[192px] flex flex-col font-semibold ml-[0] mr-[0] -my-[9px] ",
  socialsSM:
    "sm:h-[108px] sm:w-[300px] sm:flex-wrap sm:gap-y-3 sm:gap-x-14 sm:ml-[0] sm:mr-[0] sm:my-[60px] ",
  socialsMD: "md:w-[120px] md:ml-[0] md:mr-[0] md:my-[57px] ",
  socialsLG: "lg:w-[120px]",
  logo: "w-[26px] h-[26px] ml-[0] mr-[10px] my-[0] ",
  socialLink:
    "h-[42px] text-left flex items-center w-[fit-content] hover:opacity-80 ",
  youtube: "w-[34px] ",
  gradiant:
    "absolute flex w-[1095px] h-[399px] -rotate-[15.989deg] bg-[linear-gradient(_356deg,_rgba(87,_90,_164,_0.2)_49.16%,_rgba(87,_90,_164,_0)_76.2%_),_linear-gradient(26deg,_#888b9a_41.64%,_rgba(136,_139,_154,_0)_80.9%)] filter blur-[21.5px] mt-[115px] -mr-[63px] -mb-[368px] ml-[250px] ",
  gradiantSM:
    "sm:w-[801px] sm:h-[393px] sm:mt-[200px] sm:mr-[0] sm:mb-[0] sm:ml-[75px] sm:-rotate-[27deg] -z-10 ",
  gradiantMD: "md:mt-[150px] md:-mr-[63px] md:-mb-[368px] md:ml-[250px] ",
  gradiantLG:
    "lg:mt-[75px] lg:-mr-[63px] lg:-mb-[368px] lg:ml-[350px] lg:-rotate-[10.472deg]",
};
