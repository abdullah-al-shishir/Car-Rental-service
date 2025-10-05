import React from "react";
import Top from "../Components/About_us/Top";
import History from "../Components/About_us/History";
import Members from "../Components/About_us/Members";
import Fleet from "../Components/About_us/Fleet";

const About_Us = () => {
  return (
    <div className="p-2 my-2">
      <Top />
      <History />
      <Members />
      <Fleet />
    </div>
  );
};

export default About_Us;
