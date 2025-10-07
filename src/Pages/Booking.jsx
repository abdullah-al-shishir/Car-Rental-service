import React from "react";

const Booking = () => {
  const input_style =
    " w-full py-2 pl-1.5 rounded-xl border-1 border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none";

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white py-16 px-8 rounded-xl w-full max-w-sm sm:max-w-[450px] shadow-xl">
        <h1 className="text-center font-bold text-xl">Welcome</h1>
        <h1 className="text-center text-amber-500">Please Sign in</h1>
        {/* Name and Password fill */}
        <div className="">
          {/* Name */}
          <div className="grid">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className={input_style} />
          </div>
          {/* Password */}
          <div className="grid mt-4">
            <label htmlFor="password">Password</label>
            <input type="password" className={input_style} />
          </div>
          <span className="text-red-600 text-sm block text-right mt-2">
            Forgot Password?
          </span>
          {/* Log in button */}
          <div
            className="flex justify-center items-center bg-orange-500 hover:bg-blue-950
            text-black font-bold hover:cursor-pointer hover:text-white
            py-1.5 px-5 my-3 rounded-lg text-lg w-full 
            shadow-md transition duration-250 ease-in-out mt-6"
          >
            <button type="submit">Log in</button>
          </div>
          {/* Sign up and Terms */}
          <p className="text-center text-sm">
            Don't have an account yet?{" "}
            <span className=" text-amber-500 font-medium hover:underline cursor-pointer">
              sign-up
            </span>
          </p>
          <p className="text-center text-xs text-amber-500 my-2">
            Privacy policy | Terms and Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
