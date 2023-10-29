//import { GlobalHeader } from "../../components/globalheader"
//import HeaderNav from "../../components/HeaderNav"
import Header from "../../Component/Header"


export const Home = () => {
     
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
    return (
        <div className="bg-gray-600 h-screen shadow-md w-full fixed top-0 left-0">
            <Header/>
             {/* <HeaderNav /> */}
             {/* <GlobalHeader brandName="Synthesis Workshop"  navItems={items} /> */}
        {/* <div className="bg-gray-600 h-screen"></div> */}
       
        </div>
    )
}