import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <div className="navbar sticky top-0 flex w-auto h-20 items-center bg-white rounded-lg shadow-sm justify-between p-3">
        <Link to="/"><div className="logo flex items-center font-bold w-auto">
          <img className="w-12 p-1" src="src/assets/Images/Logo.png" alt="" />
          <h1 className="text-2xl">CracIndia</h1>
        </div></Link>
        <div className="nav flex font-bold justify-between w-[40%] text-xl">
          <a
            className="hidden md:block text-balck transition-colors hover:text-amber-600 duration-300"
            href="#"
          >
            Contractor
          </a>
          <a
            className="hidden md:block text-balck transition-colors hover:text-amber-600 duration-300"
            href="#"
          >
            Supplier
          </a>
          <a
            className="hidden md:block text-balck transition-colors hover:text-amber-600 duration-300"
            href="#"
          >
            Manufacturer
          </a>
        </div>
        <div className="login text-xl w-auto flex items-end px-2">
          <Link to="/Login">
          <button
            type="submit"
            class="flex justify-center md:w-auto md:h-auto w-16 h-10 gap-2 items-center mx-auto shadow-md text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-amber-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          >
            Login
            <svg
              class="w-8 h-8 md:block hidden justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                class="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>
          </Link>
        </div>
        <button className="sm:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="nav absolute bg-white w-full z-10 flex flex-col items-center justify-evenly h-[90vh] text-xl sm:hidden">
          <a
            className=" text-balck transition-colors hover:text-amber-600 duration-300"
            href="#"
          >
            Contractor
          </a>
          <a
            className=" text-balck transition-colors hover:text-amber-600 duration-300"
            href="#"
          >
            Supplier
          </a>
          <a
            className=" text-balck transition-colors hover:text-amber-600 duration-300"
            href="#"
          >
            Manufacturer
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
