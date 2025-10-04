import React from "react";
import Options from "../Components/Contact/Options";
import Email from "../Components/Contact/Email";

const Contact = () => {
  return (
    <div className="p-2 mt-10">
      <h1 className="text-center text-xl font-bold underline mb-3">
        Contact <span className="text-red-500">Us?</span>
      </h1>
      {/* Contact options */}
      <Options />
      {/* FeedBack with email */}
      <Email />
    </div>
  );
};

export default Contact;
