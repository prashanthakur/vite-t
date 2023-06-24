import React from 'react';
import { NavLink } from 'react-router-dom';
import hoticon from '../assets/hot.png'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTopButton from './addons/ScrollToTopButton';

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const count = useSelector((state) => state.count)
  const cartCourse = useSelector((state) => state.courses)
  console.log(cartCourse)
  const notify = () => toast("No Login required for now!");
  return (
    <>
      <ToastContainer />
      <header className="text-gray-600 body-font bg-whitish">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-pulp">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <NavLink to="/" className="mr-5 hover:text-gray-900 hover:cursor-pointer">Home{items.length >= 1 ? items.length : ''}</NavLink>&nbsp;&nbsp;
            <NavLink to='/practice' className="mr-5 hover:text-gray-900 hover:cursor-pointer">Practice</NavLink>&nbsp;&nbsp;
            <img src={hoticon} className='h-5 w-5' /><NavLink to='/tests' className="mr-5 hover:text-gray-900 hover:cursor-pointer">Test</NavLink>
            {/* <NavLink to='/r' className="mr-5 hover:text-gray-900 hover:cursor-pointer">Resources</NavLink> */}
            <NavLink to='/chl' className="mr-5 hover:text-gray-900 hover:cursor-pointer">JS</NavLink>
            {/* <p>hey{
        count
      }</p> */}
            {/* <p>&nbsp;Cart : {cartCourse.cart.length}</p> */}
            {/* <NavLink to='/practice' className="mr-5 text-yellow-700 hover:text-gray-900 hover:cursor-pointer">Premium</NavLink>&nbsp;&nbsp; */}

            {/* <a className="hover:text-gray-900">Fourth Link</a> */}
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Learnify<span className='text-green-700'>.</span></span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={notify}>Login
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <ScrollToTopButton/>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar