import React, { useState } from 'react';
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Images from "../assets/images/synthetic.svg"


interface NavbarProps {
    // Define the props you want to pass to the navbar
    brandName: string;
  
    navItems: { name: string; link: string }[];
  }

export const GlobalHeader : React.FC<NavbarProps> = ({ brandName, navItems }: NavbarProps) => {

  

    // const items =
    
    // [
    //     {name:"Courses", link:"/"},
    //     {name:"Episodes", link:"/"},
    //     {name:"Problem sets", link:"/"},
    //     {name:"Posters", link:"/"},
    //     {name:"Publications", link:"/"},
    //     {name:"Downloads", link:"/"},
    //     {name:"Contacts", link:"/"},
    //     {name:"About", link:"/"},
        
    // ];

    const [view, setView] = useState(false);
   


    return (
        <div className="shadow-md w-full fixed top-0 left-0">
           <div className='md: bg-white text-black flex flex-row max-w-full h-16 mb=2 mt-8 ml-10 mt-10 mr-10 justify-between rounded-lg
        rounded-lg leading-4 pl-8 pr-8'>
            {/* logo section */}
            <div className='mx-4 my-6 md:my-0'>
            <img className="object-fill" src={Images} alt="images" />

                <span className="grid-cols-2">{brandName } </span>
                </div>
                {/* <div className=" flex flex-row font-medium text-base items-center leading-5" >
        <h1 className='m-3'>Courses</h1>
        <h1 className='m-3'>Episodes</h1>
        <h1 className='m-3'>Problem sets</h1>
        <h1 className='m-3'>Posters</h1>
        <h1 className='m-3'>Publications</h1>
        </div>
        <div className="flex flex-row font-medium text-base items-center leading-5">
        <h1 className='m-3'>Downloads</h1>
        <h1 className='m-3'>Contacts</h1>
        <h1 className='m-3'>About</h1>
        </div> */}
                  {/* Menu icon */}
            <div onClick={()=>setView(!view)} className='absolute right-12 top-14 cursor-pointer md-hidden  w-7 h-7'>
                {
                    view ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
         
             {/* link items */}
             <ul className={`md:flex md:items-center md:pb-0 pb-12 ml-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${view ? 'top-12' : 'top-[-490px]'}`}>
                {
                    navItems.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
            </ul>
            {/* button */}
           </div>
           </div>
    
    )
}