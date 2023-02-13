import React,{useState, useContext } from "react";
import { Link } from "react-router-dom";
import './navbar.scss';
import { ModeContext } from "../../useContext/ModeContext";
import { AuthContext } from "../../useContext/AuthContext";
const  Navbar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const {toggleMode,darkMode} = useContext(ModeContext);
  const [open, setOpen] = useState(false)
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  return (
    <>
      <nav className="sticky top-0 flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <Link
            className="px-3 py-2 text-2xl flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
            to="/">
            Swiss Socials
          </Link>
          <div className="rounded block lg:hidden">
            <button onClick={()=> setOpen(!open)} className="lg:hidden border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20" title="Settings">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
              </svg>
            </button>
            {open && <div className="bg-white absolute w-40 py-2 mt-1 border border-gray-200 shadow-2xl">
              <div className="py-2">
                <p className="text-gray-400 text-xs px-6 uppercase mb-1">Settings</p>
                <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                  <span className="text-sm text-gray-700">Dashboard</span>
                </button>
                <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                    <span className="text-sm text-gray-700">More Info</span>
                </button>
              </div>
          </div>}
        </div>
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
                 <i onClick={toggleMode}  className="fa-solid fa-sun text-lg leading-lg text-yellow-400 opacity-75 cursor-pointer"></i>
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
