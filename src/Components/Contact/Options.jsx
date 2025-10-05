import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const Options = ({ backgroundColor }) => {
  const div_backgorund = {
    backgroundColor: backgroundColor || "white",
  };
  const div_style =
    "flex flex-col items-center text-center p-7 my-5 mx-4 rounded-2xl shadow-md";
  const icon_style = "text-orange-400 text-4xl";
  const p_style = "text-2xl font-semibold text-gray-800 pt-2";
  const number_style = "text-gray-800 p-3";
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {/* Each contact options are here */}
      <div style={div_backgorund} className={div_style}>
        <FaPhone className={icon_style} />
        <p className={p_style}>Phone Number</p>
        <p className={number_style}>123456789</p>
      </div>
      <div style={div_backgorund} className={div_style}>
        <MdEmail className={icon_style} />
        <p className={p_style}>Email Address</p>
        <p className={number_style}>mezba@gmail.com</p>
      </div>
      <div style={div_backgorund} className={div_style}>
        <FaLocationDot className={icon_style} />
        <p className={p_style}>Location</p>
        <p className={number_style}>Dhaka, Bangladesh</p>
      </div>
      <div style={div_backgorund} className={div_style}>
        <FaClock className={icon_style} />
        <p className={p_style}>Opening Hours</p>
        <p className={number_style}>Mon - sun (10.00AM - 04.30PM)</p>
      </div>
    </div>
  );
};

export default Options;
