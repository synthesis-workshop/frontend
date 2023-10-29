import Images from "../assets/images/synthetic.svg"
import { NavLink } from 'react-router-dom'
export const Logo = () => {
    return (
      <NavLink to="/" className="font-bold text-2xl cursor-pointer flex items-center gap-1">
        <img
          alt="Blog Logo"
          src={Images} 
         className="w-20 h-9"
         
         
        />
         <span className="break-word pl-3  mb-3 text-base font-serif font-semibold items-center">Synthesis <br />
                 Workshop</span>
      </NavLink>
    );
  };
  
  export default Logo;