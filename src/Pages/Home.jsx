import React, { useState, useEffect } from "react";
import SlideShow from "../Components/SlideShow";

const Home = () => {
  return (
    <div className="p-4 pl-8 pr-8">
      <div className="p-2 pl-7 pr-7 bg-white rounded-2xl">
        {/* Imported Component */}
        <SlideShow />
      </div>
    </div>
  );
};

export default Home;
