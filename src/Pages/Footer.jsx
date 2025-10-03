import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-900 p-10">
      <div className="flex justify-center items-center">
        <img
          src="/assets/logo.jpg"
          alt="footerImg"
          className="h-14 border-2 border-amber-600 rounded-[50%]"
        />
        <span className="text-orange-500 text-3xl font-bold pl-3">
          Car Rental
        </span>
      </div>
      <div className="mt-5 ">
        <h1 className="text-center text-orange-500 text-xl font-bold underline">
          Important Links
        </h1>
        <div className="grid justify-center  md:flex md:space-x-35 font-semibold text-xl mt-4">
          <NavLink
            to="/"
            className="text-orange-500 text-xl font-bold  hover:text-blue-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/booking"
            className="text-orange-500 text-xl font-bold  hover:text-blue-600"
          >
            Booking
          </NavLink>
          <NavLink
            to="/Contact"
            className="text-orange-500 text-xl font-bold  hover:text-blue-600"
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className="text-orange-500 text-xl font-bold  hover:text-blue-600"
          >
            About Us
          </NavLink>
        </div>
      </div>
      <div className="mt-5 flex justify-center space-x-10 md:space-x-26 ">
        <FaFacebook className="text-amber-700 text-2xl" />
        <FaInstagram className="text-amber-700 text-2xl" />
        <FaTwitter className="text-amber-700 text-2xl" />
        <BsGithub className="text-amber-700 text-2xl" />
      </div>
      <div className="text-center mt-3">
        <span className="text-white ">
          All rights are reserved by @car Renters.com
        </span>
      </div>
    </div>
  );
};

export default Footer;
