import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ImBrightnessContrast } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import "./Pages.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const mobileLinkClasses =
    "font-semibold text-xl p-2 w-full text-center hover:bg-gray-100";
  return (
    <nav className="flex justify-between items-center  bg-gray-50">
      {/* Logo and Branding Section */}
      <div className="flex  items-center">
        <a href="http://localhost:5173/">
          <img
            src="./assets/logo.jpg"
            className="m-4 h-16 border-2 border-amber-600 rounded-[50%]"
          />
        </a>
        <a href="http://localhost:5173/">
          <span className="font-bold text-2xl"> Car</span>
          <span className="font-bold text-2xl text-amber-500">Rental</span>
        </a>
        <button type="submit">
          <ImBrightnessContrast className="icon font-bold bg-white ml-3 p-2  text-4xl border-1 border-gray-200 rounded-lg " />
        </button>
      </div>

      {/* Page Links - Desktop/Tablet View */}
      <div className="hidden md:block space-x-5 font-semibold text-xl ">
        <NavLink
          to="/"
          className="focus:underline focus:font-bold hover:text-amber-600"
        >
          Home
        </NavLink>
        <NavLink
          to="/cars"
          className="focus:underline focus:font-bold hover:text-amber-600"
        >
          Cars
        </NavLink>
        <NavLink
          to="/booking"
          className="focus:underline focus:font-bold hover:text-amber-600"
        >
          Booking
        </NavLink>
        <NavLink
          to="/Contact"
          className="focus:underline focus:font-bold hover:text-amber-600"
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className="focus:underline focus:font-bold hover:text-amber-600"
        >
          About Us
        </NavLink>
      </div>
      {/* Login Button & Mobile Menu Button Wrapper */}
      <div className="flex items-center mr-3">
        <div className="hidden md:block">
          <button
            type="submit"
            className="login font-bold text-xl p-1.5 pl-4 pr-4 rounded-xl bg-amber-600"
          >
            Login
          </button>
        </div>
        {/* Handling Menu Button */}
        <button
          type="submit"
          onClick={toggleMenu}
          className="md:hidden text-2xl z-100  transition-transform duration-500 ease-out"
        >
          <span
            className={
              isOpen
                ? "inline-block rotate-180 transition-transform duration-500 ease-out"
                : "inline-block transition-transform duration-500 ease-out"
            }
          >
            {isOpen ? <IoCloseOutline /> : <GiHamburgerMenu />}
          </span>
        </button>
      </div>
      {/* Menu Tabs Content */}
      <div
        className={`fixed top-0 bottom-0 left-0 w-64 bg-gray-500 z-40 shadow-xl p-6 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col space-y-4 pt-16 ">
          {/* pt-16 to make space for the fixed header content */}
          <NavLink to="/" onClick={toggleMenu} className={mobileLinkClasses}>
            Home
          </NavLink>
          <NavLink
            to="/cars"
            onClick={toggleMenu}
            className={mobileLinkClasses}
          >
            Cars
          </NavLink>
          <NavLink
            to="/booking"
            onClick={toggleMenu}
            className={mobileLinkClasses}
          >
            Booking
          </NavLink>
          <NavLink
            to="/Contact"
            onClick={toggleMenu}
            className={mobileLinkClasses}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={mobileLinkClasses}
          >
            About US
          </NavLink>
          <button
            type="button"
            className="login mx-6 font-bold text-xl p-2 rounded-xl bg-amber-600 text-white mt-4"
            onClick={toggleMenu}
          >
            Login
          </button>
        </div>
      </div>
      {/*  Close menu when clicking the overlay */}
      {isOpen && (
        <div className="fixed  inset-0  md:hidden" onClick={toggleMenu} />
      )}
    </nav>
  );
};

export default Menu;
