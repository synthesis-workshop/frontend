import React, {useState} from 'react';
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Images from "../assets/images/synthetic.svg"

// const Navbar = [
//     {
//       name:  'Synthesis WorkShop',
//       path: '/',
//     } ,
//     {
//         name:  'Courses',
//         path: '/',
//       } ,
//       {
//         name:  'Episodes',
//         path: '/',
//       } ,
//       {
//         name:  'Problem sets',
//         path: '/',
//       } ,
//       {
//         name:  'Posters',
//         path: '/',
//       } ,

//    {
//       name:  'Publications',
//       path: '/',
//     } ,
//     {
//         name:  'Downloads',
//         path: '/',
//       } ,
//       {
//         name:  'Contacts',
//         path: '/',
//       } ,
//       {
//         name:  'Abouts',
//         path: '/',
//       } ,
//     ]
const HeaderNav = ()=> {

    

    const navbar =
    
    [
        {name:"Courses", link:"/"},
        {name:"Episodes", link:"/"},
        {name:"Problem sets", link:"/"},
        {name:"Posters", link:"/"},
        {name:"Publications", link:"/"},
        {name:"Downloads", link:"/"},
        {name:"Contacts", link:"/"},
        {name:"About", link:"/"},
        
    ];

    const [view, setView] = useState(false);
   


    return (
        <div className="shadow-md w-full fixed top-0 left-0">
           <div >
            {/* logo section */}
       
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <img className="object-fill h-10 w-18" src={Images} alt="images" />
                <span className="break-word pl-3  pb-3 font-serif font-semibold">Synthesis <br />
                 Workshop</span>
                </div>
        
                {/* <div className=" flex flex-row font-medium text-base items-center leading-5" >
        <a href className='m-3 mx-4 my-6 md:my-0 font-semibold '>Courses</a>
        <a href className='m-3 mx-4 my-6 md:my-0 font-semibold'>Episodes</a>
        <a href className='m-3 mx-4 my-6 md:my-0 font-semibold'>Problem sets</a>
        <a href className='m-3 mx-4 my-6 md:my-0 font-semibold'>Posters</a>
        <a href className='m-3 mx-4 my-6 md:my-0 font-semibold'>Publications</a>
        </div>
        <div className="flex flex-row font-medium text-base items-center leading-5">
        <a href className='m-3 mx-4 my-6 md:my-0 font-semibold'>Downloads</a>
        <a href className='m-3 mx-4 my-6 md:my-0 font-semibold'>Contacts</a>
        <a href className='m-3 mx-4 my-6 md:my-0 font-semibold'>About</a>
        </div> */}
                  {/* Menu icon */}
            <div onClick={()=>setView(!view)} className='absolute right-12 top-14 cursor-pointer md-hidden w-7 h-7'>
                {
                    view ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
         
             {/* link items */}
             <ul className={`md:flex md:items-center md:pb-0 pb-12 ml-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 pr-24 transition-all duration-500 ease-in 
             ${view ? 'top-24' : 'top-[-490] ' }`}>
        
                {
                    navbar.map((link) => (
                    <li className='mx-4 my-6 md:my-0 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
            </ul>
            {/* button */}
           </div>
           </div>
    
    )
}
export default HeaderNav;