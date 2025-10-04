import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import SlideShow from "../Components/Home/SlideShow";
import HomeCars from "../Components/Home/HomeCars";
import Choose from "../Components/Home/Choose";
import HomeFooter from "../Components/Home/HomeFooter";
import Search_2 from "../Components/Home/Search_2";
import Search from "../Components/Home/Search";

const Home = () => {
  return (
    <div className="p-2 pt-5">
      <div className="p-2 px-4 bg-white rounded-2xl">
        {/* Imported Component */}
        <SlideShow>
          {/* Collected the prop here as child */}

          {/* ui implemented from components */}
          <Search />
        </SlideShow>
      </div>

      {/* Dynamically added another search option */}
      <Search_2 />

      {/* Book now butons added */}
      <div className="flex justify-center mt-16">
        <button
          type="submit"
          className="flex justify-center items-center  bg-orange-500 hover:bg-blue-950
        text-black font-bold  hover:cursor-pointer hover:text-white
        py-1.5 px-5 rounded-lg text-xl w-96 
        shadow-md transition duration-250 ease-in-out"
        >
          Book Now <FaArrowRight className="pl-2 text-3xl" />
        </button>
      </div>

      {/* ui implemented from components */}
      <HomeCars />
      <Choose />
      <HomeFooter />
    </div>
  );
};

export default Home;
