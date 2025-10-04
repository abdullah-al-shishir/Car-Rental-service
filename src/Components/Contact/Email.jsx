import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
// Lottie React //
import Lottie from "lottie-react";
import Emailicon from "./email.json";

const Email = () => {
  const input_style =
    " bg-white py-2 pl-1.5 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none";
  return (
    <div
      className="bg-blue-50 rounded-2xl mb-8 justify-center place-items-center md:flex md:w-[600px] md:mx-auto
"
    >
      {/* Animated Email icon */}
      <div className="w-full max-w-sm md:w-[260px] h-auto my-8">
        <Lottie animationData={Emailicon} />
      </div>
      {/* Feedback section */}
      <div className=" mx-9 md:mx-3 pb-7 md:mt-5 md:w-[265px]">
        <h1 className="text-2xl font-bold">
          Get in <span className="text-red-500">touch!</span>
        </h1>

        <div className="flex flex-col my-4">
          <label htmlFor="name" className="pl-1 pb-0.5">
            Name
          </label>

          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name"
            className={input_style}
          />
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="email" className="pl-1 pb-0.5">
            Email Address
          </label>

          <input
            type="text"
            name=""
            id=""
            placeholder="Your Email"
            className={input_style}
          />
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="phone" className="pl-1 pb-0.5">
            Phone Number
          </label>

          <input
            type="text"
            name=""
            id=""
            placeholder="Your Phone Number"
            className={input_style}
          />
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="comments" className="pl-1 pb-0.5">
            Comments
          </label>

          <textarea
            type="text"
            name=""
            id=""
            rows={3}
            placeholder="Your Comments"
            className={input_style}
          />
        </div>
        {/* Send Enquiry Button */}
        <button
          type="submit"
          className="flex justify-center items-center bg-orange-500 hover:bg-blue-950
                    text-black font-bold hover:cursor-pointer hover:text-white
                    py-1.5 px-5 rounded-lg text-xl w-94 md:w-full 
                    shadow-md transition duration-250 ease-in-out"
        >
          Send Enquiry <FaTelegramPlane className="mt-1 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Email;
