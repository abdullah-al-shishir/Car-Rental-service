import React, { useEffect, useState } from "react";
import Search from "./Search";

const images = [
  "url(/assets/car1.jpg)",
  "url(/assets/car2.jpg)",
  "url(/assets/car4.jpg)",
  "url(/assets/car5.jpg)",
  "url(/assets/car6.jpg)",
  "url(/assets/car7.jpg)",
  "url(/assets/car8.jpg)",
  "url(/assets/car9.jpg)",
  "url(/assets/car10.jpg)",
];

const SlideShow = ({ children, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  const bg_style = {
    backgroundImage: images[index],
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: " all 1.5s ease-in-out",
  };

  return (
    <div
      style={bg_style}
      class="rounded-2xl flex justify-center items-center text-white 
            h-[33vh] 
            md:h-[60vh] 
            lg:h-[75vh] 
            xl:h-screen"
    >
      {/* Passing Search component as prop */}
      {children}
    </div>
  );
};

export default SlideShow;
