import React,{useState, useContext } from "react";
import { Link } from "react-router-dom";
import './navbar.scss';
import { ModeContext } from "../../useContext/ModeContext";
import { AuthContext } from "../../useContext/AuthContext";
const  Navbar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const {toggleMode,darkMode} = useContext(ModeContext);
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  return (
    <>
      <nav className="sticky top-0 flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <Link
                  className="px-3 py-2 text-2xl flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  to="/"
                >
                  Swiss Socials
                </Link>
                <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className={ "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden") } id="example-navbar-danger">
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <p         
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fa-solid fa-house-user text-lg leading-lg nav-icon opacity-75"></i>
                  </p>
                </li>
                <li className="nav-item">
                  <p
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  
                >
                 {darkMode ?  
                 <i onClick={toggleMode}  className="fa-solid fa-sun text-lg leading-lg nav-icon opacity-75 cursor-pointer"></i>
                 : <i  onClick={toggleMode}  className="fa-solid fa-moon text-lg leading-lg nav-icon opacity-75 cursor-pointer"></i>} 
                
                </p>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fa-solid fa-grip-vertical text-lg leading-lg nav-icon opacity-75"></i>
                </a>
              </li>
              <li className="nav-item px-5">
                <div className="relative ">
				          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fa-solid fa-bars w-5 h-5 bars"></i>
				          </div>
				          <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
                </div>
              </li>
            </ul>
          </div>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fa-solid fa-user text-lg leading-lg nav-icon opacity-75"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fa-solid fa-envelope text-lg leading-lg nav-icon opacity-75"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fa-solid fa-bell text-lg leading-lg nav-icon opacity-75"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  href="#pablo"
                >
                  <img src={currentUser.profilePic} alt=""/>
                  <span className="ml-2">
                    {currentUser.name}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
