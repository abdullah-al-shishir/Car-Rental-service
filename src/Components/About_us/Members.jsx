import React from "react";

const Members = () => {
  return (
    <div className="mt-5 mx-3">
      {/* Team Members */}
      <h1 className="text-center text-xl font-bold underline mb-3">
        Our <span className="text-red-500">Team</span>
      </h1>
      {/* Members list */}
      <div className="bg-fuchsia-100 rounded-2xl py-3  ">
        <div className="md:flex justify-between mx-10">
          <div className="grid justify-center items-center py-5 bg-white mx-26 md:mx-0 rounded-2xl my-3 md:my-5 md:px-7 md:py-10">
            <img
              src="/assets/Members/member-1.jpg"
              alt="member-1"
              className="h-[120px] rounded-[50%]"
            />
            <p className="text-sm">Name: Sarah Davis</p>
            <p className="text-sm">Post: CEO</p>
          </div>
          <div className="grid justify-center items-center py-5 bg-white mx-26 md:mx-0 rounded-2xl my-3 md:my-5 md:px-7 md:py-10">
            <img
              src="/assets/Members/member-1.jpg"
              alt="member-1"
              className="h-[120px] rounded-[50%]"
            />
            <p className="text-sm">Name: Sarah Davis</p>
            <p className="text-sm">Post: CEO</p>
          </div>
          <div className="grid justify-center items-center py-5 bg-white mx-26 md:mx-0 rounded-2xl my-3 md:my-5 md:px-7 md:py-10">
            <img
              src="/assets/Members/member-1.jpg"
              alt="member-1"
              className="h-[120px] rounded-[50%]"
            />
            <p className="text-sm">Name: Sarah Davis</p>
            <p className="text-sm">Post: CEO</p>
          </div>
          <div className="grid justify-center items-center py-5 bg-white mx-26 md:mx-0 rounded-2xl my-3 md:my-5 md:px-7 md:py-10">
            <img
              src="/assets/Members/member-1.jpg"
              alt="member-1"
              className="h-[120px] rounded-[50%]"
            />
            <p className="text-sm">Name: Sarah Davis</p>
            <p className="text-sm">Post: CEO</p>
          </div>
          <div className="grid justify-center items-center py-5 bg-white mx-26 md:mx-0 rounded-2xl my-3 md:my-5 md:px-7 md:py-10">
            <img
              src="/assets/Members/member-1.jpg"
              alt="member-1"
              className="h-[120px] rounded-[50%]"
            />
            <p className="text-sm">Name: Sarah Davis</p>
            <p className="text-sm">Post: CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
