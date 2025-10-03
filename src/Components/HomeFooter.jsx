import React from "react";
import Scroll_Ai from "./Scroll_Ai";

const HomeFooter = () => {
  const imageUrl = "url(/assets/HomeFoot.jpg)";

  const bg_style = {
    backgroundImage: imageUrl,
    height: "530px",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: "0.75",
  };

  return (
    <div
      style={bg_style}
      className="mt-12 mb-8 rounded-lg text-white grid justify-center text-center"
    >
      <div className="mt-12">
        <h1 className="text-4xl font-bold">What People say about us?</h1>
        <h1 className="text-lg">Discover what our customers think about us</h1>
      </div>
      {/* Why Choose Us? */}
      <div className="text-xl">
        {/* With Ai */}
        <Scroll_Ai />
      </div>
    </div>
  );
};

export default HomeFooter;
