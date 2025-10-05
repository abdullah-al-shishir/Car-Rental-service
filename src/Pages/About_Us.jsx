import React from "react";
import Top from "../Components/About_us/Top";
import History from "../Components/About_us/History";
import Members from "../Components/About_us/Members";
import Fleet from "../Components/About_us/Fleet";
import Values from "../Components/About_us/Values";
import Options from "../Components/Contact/Options";

const About_Us = () => {
  return (
    <div className="p-2 my-2">
      <Top />
      <History />
      <Members />
      <Fleet />
      <Values />
      <h1 className="text-center text-xl font-bold underline mt-10 my-3">
        Contact <span className="text-red-500">Us?</span>
      </h1>
      <Options backgroundColor="transparent" />
    </div>
  );
};
export default About_Us;
