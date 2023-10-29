import { useState } from "react";
import { NavLink } from 'react-router-dom'
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'


const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: boolean }) =>
  isActive ? activeClassName : "flex flex-row font-medium text-base leading-5 m-3' ";

const NavLinks = () => {
  return (
    <>
    {/* <div className="flex flex-row space-x-32 "> */}
    <div className='flex flex-row m-3'>
    <NavLink to="/Posters" className={activeStyleCallback}>
        Posters
      </NavLink>
      <NavLink to="/Courses" className={activeStyleCallback}>
        Courses
      </NavLink>
      <NavLink to="/Episode" className={activeStyleCallback}>
        Episodes
      </NavLink>
      <NavLink to="/Problem-sets" className={activeStyleCallback}>
        Problem-sets
      </NavLink>
      
      <NavLink to="/Publication" className={activeStyleCallback}>
        Publication
      </NavLink>
      </div>
      <div className='flex flex-row items-stretch'>
      <NavLink to="/Downloads" className={activeStyleCallback}>
        Downloads
      </NavLink>
      <NavLink to="/Contacts" className={activeStyleCallback}>
        Contacts
      </NavLink>
      <NavLink to="/Abouts" className={activeStyleCallback}>
        Abouts
      </NavLink>
      </div>
      {/* </div> */}
     
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  //const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

 

  return (
    <>
      <nav className="flex items-center w-full flex justify-between font-semibold">
        {/* <div className=" w-full flex justify-between font-semibold"> */}
          <NavLinks />
        {/* </div> */}
      
        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center">
          <NavLinks/>
        </div>
     ) }
      </>
  );
};

export default Nav;
