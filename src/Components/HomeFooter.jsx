import React from "react";

const HomeFooter = () => {
  const imageUrl = "url(/assets/HomeFoot.jpg)";

  const bg_style = {
    backgroundImage: imageUrl,
    height: "510px",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: "0.75",
  };

  return (
    <div
      style={bg_style}
      className="mt-12 rounded-lg text-white grid justify-center text-center"
    >
      <div className="mt-12 ml-3">
        <h1 className="text-4xl font-bold">What People say about us?</h1>
        <h1 className="text-lg">Discover what our customers think about us</h1>
      </div>
      <div className="text-xl">Coming Soon</div>
    </div>
  );
};

export default HomeFooter;
