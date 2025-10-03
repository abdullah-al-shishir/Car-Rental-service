import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import SlideShow from "../Components/SlideShow";
import Search from "../Components/Search";
import HomeCars from "../Components/HomeCars";
import Choose from "../Components/Choose";
import HomeFooter from "../Components/HomeFooter";
import Search_2 from "../Components/Search_2";

const Home = () => {
  return (
    <div className="p-4 pl-8 pr-8">
      <div className="p-2 pl-7 pr-7 bg-white rounded-2xl">
        {/* Imported Component */}
        <SlideShow>
          {/* Collected the prop here as child */}
          <Search />
        </SlideShow>
      </div>

      <Search_2 />

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

      <HomeCars />
      <Choose />
      <HomeFooter />
    </div>
  );
};

export default Home;
