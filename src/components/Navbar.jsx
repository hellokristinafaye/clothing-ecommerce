import React from 'react';
import { assets } from "../assets/frontend_assets/assets.js";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
          <img src={assets.logo} alt="" className="w-36" />
          
          <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
              
              <NavLink className="flex flex-col items-center gap-1">
                  
              </NavLink>
          </ul>
    </div>
  );
}

export default Navbar