import React from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {

    const links = (
    <>
      <li >
      <a ><NavLink to="/">Home</NavLink></a>
      </li >
      <li >
       <a><NavLink >Available food</NavLink></a> 
      </li>
      <li>
        <a><NavLink >Add Food</NavLink></a>
      </li>
      <li >
        <a><NavLink >Manage food</NavLink></a>
      </li>
      <li >
        <a><NavLink >Food Request</NavLink></a>
      </li>
    </>
  );

  const loginRegister = (
    <>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  

  return (
    <div className="navbar border-b-2 border-sky-400  rounded-b-md bg-green-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul  id="sidebar"
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <span className="md:text-3xl sm:text-xl font-bold">Food Vally</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {/* {user ? 
      ( */}
        <ul className="menu menu-horizontal px-1 navbar-end">
          
          <li>
            <NavLink to="/logout" >
              Log out
            </NavLink>
          </li>

        </ul>

        <ul className="menu menu-horizontal px-1 navbar-end">
          {loginRegister}
        </ul>

    </div>
  );
};

export default Navbar;
