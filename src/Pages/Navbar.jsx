import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ImBrightnessContrast } from "react-icons/im";
import "./Pages.css";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  bg-gray-50">
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
      <div className="space-x-5 font-semibold text-xl ">
        <NavLink to="/" className="focus:underline focus:font-bold">
          Home
        </NavLink>
        <NavLink to="/cars" className="focus:underline focus:font-bold">
          Cars
        </NavLink>
        <NavLink to="/booking" className="focus:underline focus:font-bold">
          Booking
        </NavLink>
        <NavLink to="/Contact" className="focus:underline focus:font-bold">
          Contact
        </NavLink>
        <NavLink to="/about" className="focus:underline focus:font-bold">
          About US
        </NavLink>
      </div>
      <div className="mr-8">
        <button
          type="submit"
          className="login font-bold text-xl p-1.5 pl-4 pr-4 rounded-xl bg-amber-600"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
