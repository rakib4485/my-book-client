import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-3.png";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then()
    .then()
  }

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/media">Media</Link>
      </li>
      <li>
        <Link to="/message">Message</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar  w-[80%] mx-auto py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} alt="" className="w-[52px] md:w-12" />
        </Link>

        <form className="ml-2 hidden md:block">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm "
              placeholder="Search Mockups, Logos..."
              required
            />
          </div>
        </form>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
      {
        user?.uid?.photoURL ?
        <li className="list-none">
        <img src={user.photoURL} alt="" className="w-[50px] rounded-full"/>
      </li>:
      <li className="list-none">
      <FaUser></FaUser>
    </li>
      }
      
      {
        user?.uid ?
        <>
        <li className="list-none ml-2">
      {user.displayName}
      </li>
      <button onClick={handleLogOut} className="btn btn-active btn-ghost ml-2">Log Out</button>
        </>:
      <li className="list-none ml-2">
      <Link to="/login">Login</Link>
      </li>
      }
      
      </div>
    </div>
  );
};

export default Navbar;
