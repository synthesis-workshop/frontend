import Logo from "./Logo";
import Nav from "./Nav";

export const Header = () => {
  return (
    <header className="md: bg-white text-black flex flex-row
    h-20 ml-10 mt-10 mr-10 justify-between 
   rounded-lg leading-4 pl-8 pr-8 ">
     {/* <div className='md: bg-white text-black flex flex-row
         h-20 ml-10 mt-10 mr-10
        rounded-lg leading-4 pl-8 pr-8'> */}
      <Logo />
      <Nav />
      {/* </div> */}
     </header>
  );
};

export default Header;