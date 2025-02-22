import { Link } from "react-router-dom";
import logo from "../assets/images/Netflix-Brand-Logo.png"
import React, {useState} from "react";


function LandingPage(){
   
    
 
    return(
        <>
          <header className="flex justify-between items-center w-full absolute px-6 py-4 md:px-[5rem] max-w-[90rem] h-[5rem] z-10">
            <img src={logo} alt="netflix logo" className="h-16 md:h-[100px]"/>
            <button className="bg-netflixRed rounded-md  p-1 hover:bg-netflixRed-800 text-center text-[13px] md:p-[10px]  "><a href="#" className="text-white">Sign In</a></button>
        </header>
        
        
        </>
    )
}
export default LandingPage