import React from 'react';
import { Link } from 'react-router-dom';




const Header = () => {
  return (
    <>
    <nav className=" bg-gradient-to-r from-purple-500 to-blue-500 border-gray-200 dark:bg-gray-900 rounded-b-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          SecureXpert
          </span>
        </Link>
        <div className="flex justify-start md:order-2">
          
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                Home
              </Link>
            </li>
            
            <li>
              <Link to="/service/portscan" className="text-white hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                About
              </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
