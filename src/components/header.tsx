import headerLogo from "../images/headerLogo.svg";
import burger from "../images/burger.svg";
import close from "../images/close.svg";
import { Link } from "react-router-dom";
import { uniqueId } from "lodash";
import React from "react";
import { NavLink } from "./nav-link";

export const Header: React.FC = () => {
  const [mobileClicked, setMobileClicked] = React.useState(false);

  const handleMobileClick = () => {
    setMobileClicked(!mobileClicked);
  };

  const linksMiddle = [
    { label: "Posters", link: "/#posters" },
    { label: "Courses", link: "/courses" },
    { label: "Episodes", link: "/episodes" },
    { label: "Problem Sets", link: "/problem-sets" },
    { label: "Publications", link: "/publications" },
  ];

  const linksRight = [
    { label: "Downloads", link: "/#downloads" },
    { label: "Contacts", link: "/#contact" },
    { label: "About", link: "/#about" },
  ];

  return (
    <header
      className={`fixed flex z-20 w-full justify-center items-center select-none 
      ${mobileClicked ? "h-full" : "h-fit"}
      `}
    >
      <div
        className={`flex mx-2 h-16 w-full bg-semiTransparentWhite rounded-xl 
        shadow-md
        md:mx-4
        xl:mx-10
        ${
          mobileClicked
            ? "h-full items-start flex-col mt-4"
            : "h-16 flex-row items-center mt-2 justify-between"
        }
        `}
      >
        <div className={`flex w-full justify-between lg:w-fit `}>
          <Link to="/" className="flex">
            <img
              src={headerLogo}
              className={`h-8 w-14 mx-2 xl:w-16 xl:h-10 ${
                mobileClicked ? "mt-4" : "mt-1 xl:mt-0"
              }`}
              alt="Synthesis Workshop's logo"
            />
            <h1
              className={`text-primary font-text font-semibold leading-tight mr-auto lg:mr-0 ${
                mobileClicked ? "mt-3 mr-auto" : "mt-0"
              }`}
            >
              Synthesis <br /> Workshop
            </h1>
          </Link>
          <button
            className="lg:hidden border-none w-10 mr-4"
            onClick={handleMobileClick}
          >
            <img
              src={mobileClicked ? close : burger}
              alt="Mobile burger menu"
              className={`${
                mobileClicked ? "w-10 h-10 mt-3" : "w-10 h-8 mr-4 lg:hidden"
              }`}
            />
          </button>
        </div>
        {mobileClicked ? (
          <div className="flex flex-col gap-20 items-center mx-auto my-10 text-center">
            <div className="flex flex-col text-primary text-lg font-semibold gap-3 font-lg">
              {linksMiddle.map(({ label, link }) => (
                <button onClick={handleMobileClick}>
                  <NavLink
                    key={uniqueId(label)}
                    linkTo={link}
                    activeClassName="w-full hover:opacity-80 border-b-2 border-solid border-b-primary"
                    inactiveClassName="w-full hover:opacity-80"
                    label={label}
                  />
                </button>
              ))}
            </div>
            <div className="flex flex-col text-primary text-lg font-semibold gap-3 text-center font-lg xl:gap-6">
              {linksRight.map(({ label, link }) => (
                <button onClick={handleMobileClick}>
                  <NavLink
                    key={uniqueId(label)}
                    linkTo={link}
                    activeClassName="w-full hover:opacity-80 border-b-2 border-solid border-b-primary"
                    inactiveClassName="w-full hover:opacity-80"
                    label={label}
                  />
                </button>
              ))}
            </div>
          </div>
        ) : null}
        <div className="sm:hidden lg:flex text-primary text-lg font-semibold gap-3 font-lg xl:gap-6">
          {linksMiddle.map(({ label, link }) => (
            <NavLink
              key={uniqueId(label)}
              linkTo={link}
              activeClassName="w-fit hover:opacity-80 border-b-2 border-solid border-b-primary "
              inactiveClassName="w-fit hover:opacity-80"
              label={label}
            />
          ))}
        </div>
        <div className="sm:hidden lg:flex text-primary text-lg font-semibold gap-3 font-lg mr-5">
          {linksRight.map(({ label, link }) => (
            <NavLink
              key={uniqueId(label)}
              linkTo={link}
              activeClassName="w-fit hover:opacity-80 border-b-2 border-solid border-b-primary "
              inactiveClassName="w-fit hover:opacity-80"
              label={label}
            />
          ))}
        </div>
      </div>
    </header>
  );
};
