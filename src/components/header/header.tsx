import headerLogo from "../../images/headerLogo.svg";
import burger from "../../images/burger.svg";
import { Link } from "react-router-dom";
import { uniqueId } from "lodash";
import React from "react";

const linksMiddle = [
  { label: "Posters", link: "#posters" },
  { label: "Courses", link: "" },
  { label: "Episodes", link: "/episodes" },
  { label: "Problem Sets", link: "/problem-sets" },
  { label: "Publications", link: "/publications" },
];

const linksRight = [
  { label: "Downloads", link: "#downloads" },
  { label: "Contacts", link: "#contact" },
  { label: "About", link: "#about" },
];

export const Header: React.FC = () => {
  const [mobileClicked, setMobileClicked] = React.useState(false);

  const handleMobileClick = () => {
    setMobileClicked(!mobileClicked);
  };

  return (
    <header
      className={`fixed flex z-20 w-full justify-center items-center select-none 
      ${mobileClicked ? "h-full" : "h-fit"}
      `}
    >
      <div
        className={`flex justify-between mx-2 mt-3.5 h-16 w-full bg-semiTransparentWhite rounded-xl 
        items-center shadow-md
        md:mx-4
        xl:mx-10
        ${mobileClicked ? "h-full items-start" : "h-16"}
        `}
      >
        <div className="flex">
          <img
            src={headerLogo}
            className="h-8 w-14 mx-2 xl:w-16 xl:h-10"
            alt="Synthesis Workshop's logo"
          />
          <h1 className="text-primary font-text font-semibold leading-tight mr-auto">
            Synthesis <br /> Workshop
          </h1>
        </div>
        <div className="sm:hidden lg:flex text-primary text-lg font-semibold gap-3 font-lg">
          {linksMiddle.map(({ label, link }) => (
            <Link
              key={uniqueId(label)}
              to={link}
              className="w-fit hover:opacity-80 "
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="sm:hidden lg:flex text-primary text-lg font-semibold gap-3 font-lg mr-5">
          {linksRight.map(({ label, link }) => (
            <Link
              key={uniqueId(label)}
              to={link}
              className="w-fit hover:opacity-80 "
            >
              {label}
            </Link>
          ))}
        </div>
        <button className="border-none w-10 mr-4" onClick={handleMobileClick}>
          <img
            src={burger}
            alt="Mobile burger menu"
            className={`w-10 h-8 mr-4 lg:hidden`}
          />
        </button>
      </div>
    </header>
  );
};
