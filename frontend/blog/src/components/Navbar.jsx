import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
   const isAuth = false;
   const activeStyles = {
      color: "white",
      fontSize: "15px",
   };
   return (
      <div className="flex py-4 items-center justify-around">
         <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm">
            E
         </span>
         {isAuth && (
            <ul className="flex gap-8">
               <li>
                  <NavLink
                     to={"/"}
                     className="text-xs text-gray-400 hover:text-white"
                     style={({ isActive }) => (isActive ? activeStyles : undefined)}
                  >
                     Bosh Sahifa
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to={"/posts"}
                     className="text-xs text-gray-400 hover:text-white"
                     style={({ isActive }) => (isActive ? activeStyles : undefined)}
                  >
                     Mening Postlarim
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to={"/new"}
                     className="text-xs text-gray-400 hover:text-white"
                     style={({ isActive }) => (isActive ? activeStyles : undefined)}
                  >
                     Post Qo'shish
                  </NavLink>
               </li>
            </ul>
         )}
         <div className="className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
            <button>Kirish</button>
         </div>
      </div>
   );
};
