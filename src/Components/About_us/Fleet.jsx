import React from "react";

const Fleet = () => {
  return (
    <div className="my-4">
      <h1 className="text-center text-xl font-bold underline mb-3">
        Our <span className="text-red-500">Fleet</span>
      </h1>
      <div className="md:flex justify-center md:gap-x-3">
        {/* Fixed car */}
        <div className="bg-white rounded-lg my-4 md:w-[370px] lg:w-[490px]">
          <div className="mx-3 py-5 pb-16 text-center">
            <img
              src="assets/Cars/car-5.jpg"
              alt=""
              className="rounded-2xl h-[170px] w-full"
            />
            <div className="mt-5">
              <p className="text-xl font-semibold">test sedan</p>
              <p>Sedan</p>
              <p>This is a test create</p>
            </div>
          </div>
        </div>
        {/* Responsive Car Cards */}
        <div className="bg-white rounded-lg my-4 md:w-[370px] lg:w-[490px] hidden md:block">
          <div className="mx-3 py-5 pb-16 text-center">
            <img
              src="assets/Cars/car-5.jpg"
              alt=""
              className="rounded-2xl h-[170px] w-full"
            />
            <div className="mt-5">
              <p className="text-xl font-semibold">test sedan</p>
              <p>Sedan</p>
              <p>This is a test create</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg my-4 md:w-[350px] lg:w-[490px] hidden lg:block">
          <div className="mx-3 py-5 pb-16 text-center">
            <img
              src="assets/Cars/car-5.jpg"
              alt=""
              className="rounded-2xl h-[170px] w-full"
            />
            <div className="mt-5">
              <p className="text-xl font-semibold">test sedan</p>
              <p>Sedan</p>
              <p>This is a test create</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
