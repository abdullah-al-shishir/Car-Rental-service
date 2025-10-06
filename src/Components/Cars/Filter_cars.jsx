import React from "react";

const Filter_cars = () => {
  const input_style =
    " w-full bg-gray-700 py-2 pl-1.5 rounded-xl border border-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none";

  const select_style =
    " w-full bg-gray-700 py-3 pl-1.5 rounded-xl focus:border-1 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:max-w-7xl lg:mx-auto">
      {/* Filter */}
      <div className="lg:col-span-1 w-full px-4 md:w-[680px] lg:w-auto">
        <div className="text-white bg-black my-8 p-5 mb-10 rounded-2xl mx-auto lg:sticky **lg:top-0** lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto">
          <h1 className="text-2xl font-semibold mb-7">Filter Cars</h1>

          <div className="">
            {/* ... Clear All button ... */}
            <button
              type="submit"
              className="flex justify-center items-center bg-orange-500 hover:bg-blue-950
              text-black font-bold hover:cursor-pointer hover:text-white
              py-1.5 px-5 rounded-lg text-xl w-full 
              shadow-md transition duration-250 ease-in-out"
            >
              Clear All
            </button>

            {/* ... Search, Car Type, Location, Price Range, Sort By divs ... */}
            <div className="grid py-1.5">
              <label htmlFor="search">Search</label>
              <input
                type="text"
                name="search"
                placeholder="Search by name"
                className={input_style}
              />
            </div>

            <div className="grid py-1.5">
              <label htmlFor="search">Car Type</label>
              <select name="cars" id="" className={select_style}>
                <option value="all">All Type</option>
                <option value="sedan">Sedan</option>
                <option value="hybrid">Hybrid</option>
                <option value="suv">SUV</option>
              </select>
            </div>

            <div className="grid py-1.5">
              <label htmlFor="search">Location</label>
              <select name="cars" id="" className={select_style}>
                <option value="">All Location</option>
                <option value="">Dhaka</option>
                <option value="">Chattogram</option>
                <option value="">Mymensingh</option>
                <option value="">Rangpur</option>
                <option value="">Noakhali</option>
                <option value="">Sylhet</option>
                <option value="">Rajshahi</option>
                <option value="">Khulna</option>
                <option value="">Bogura</option>
                <option value="">Barguna</option>
                <option value="">Barisal</option>
              </select>
            </div>

            <div className="grid py-1.5">
              <label htmlFor="search">Price Range</label>
              <div className="flex justify-between gap-x-5">
                <input
                  type="number"
                  placeholder="Min"
                  className={input_style}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className={input_style}
                />
              </div>
              <p>
                Price Range: <span>0</span> - <span>0</span>
              </p>
            </div>

            <div className="grid py-1.5">
              <label htmlFor="search">Sort By</label>
              <select name="cars" id="" className={select_style}>
                <option value="all">Default</option>
                <option value="sedan">Price: Low to High</option>
                <option value="hybrid">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Cars */}
      <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-2">
        {/* ... Car cards ... */}
        {/* Car 1 */}
        <div className="mx-10 my-6">
          <div>
            <img
              src="/assets/Cars/car-13.jpg"
              alt=""
              className="h-86 w-80 rounded-xl"
            />
          </div>
          <div className="py-4">
            <p className="text-xl font-semibold">test sedan</p>
            <p>this a test create</p>
            <p>Location: coxbazar</p>
            <p>Price Per Hour: $ 220</p>
          </div>
          <div
            className="flex justify-center items-center bg-orange-500 hover:bg-blue-950
          text-black font-bold hover:cursor-pointer hover:text-white
          py-1.5 px-5 rounded-lg text-xl w-full 
          shadow-md transition duration-250 ease-in-out"
          >
            <button type="submit">See Details</button>
          </div>
        </div>

        {/* Car 2 */}
        <div className="mx-10 my-6">
          <div>
            <img
              src="/assets/Cars/car-7.jpg"
              alt=""
              className="h-86 w-80 rounded-xl"
            />
          </div>
          <div className="py-4">
            <p className="text-xl font-semibold">test sedan</p>
            <p>this a test create</p>
            <p>Location: coxbazar</p>
            <p>Price Per Hour: $ 220</p>
          </div>
          <div
            className="flex justify-center items-center bg-orange-500 hover:bg-blue-950
          text-black font-bold hover:cursor-pointer hover:text-white
          py-1.5 px-5 rounded-lg text-xl w-full 
          shadow-md transition duration-250 ease-in-out"
          >
            <button type="submit">See Details</button>
          </div>
        </div>

        {/* Car 3 */}
        <div className="mx-10 my-6">
          <div>
            <img
              src="/assets/Cars/car-9.jpg"
              alt=""
              className="h-86 w-80 rounded-xl"
            />
          </div>
          <div className="py-4">
            <p className="text-xl font-semibold">test sedan</p>
            <p>this a test create</p>
            <p>Location: coxbazar</p>
            <p>Price Per Hour: $ 220</p>
          </div>
          <div
            className="flex justify-center items-center bg-orange-500 hover:bg-blue-950
          text-black font-bold hover:cursor-pointer hover:text-white
          py-1.5 px-5 rounded-lg text-xl w-full 
          shadow-md transition duration-250 ease-in-out"
          >
            <button type="submit">See Details</button>
          </div>
        </div>

        {/* Car 4 */}
        <div className="mx-10 my-6">
          <div>
            <img
              src="/assets/Cars/car-3.jpg"
              alt=""
              className="h-86 w-80 rounded-xl"
            />
          </div>
          <div className="py-4">
            <p className="text-xl font-semibold">test sedan</p>
            <p>this a test create</p>
            <p>Location: coxbazar</p>
            <p>Price Per Hour: $ 220</p>
          </div>
          <div
            className="flex justify-center items-center bg-orange-500 hover:bg-blue-950
          text-black font-bold hover:cursor-pointer hover:text-white
          py-1.5 px-5 rounded-lg text-xl w-full 
          shadow-md transition duration-250 ease-in-out"
          >
            <button type="submit">See Details</button>
          </div>
        </div>

        {/* Car 5 */}
        <div className="mx-10 my-6">
          <div>
            <img
              src="/assets/Cars/car-15.jpg"
              alt=""
              className="h-86 w-80 rounded-xl"
            />
          </div>
          <div className="py-4">
            <p className="text-xl font-semibold">test sedan</p>
            <p>this a test create</p>
            <p>Location: coxbazar</p>
            <p>Price Per Hour: $ 220</p>
          </div>
          <div
            className="flex justify-center items-center bg-orange-500 hover:bg-blue-950
          text-black font-bold hover:cursor-pointer hover:text-white
          py-1.5 px-5 rounded-lg text-xl w-full 
          shadow-md transition duration-250 ease-in-out"
          >
            <button type="submit">See Details</button>
          </div>
        </div>

        {/* Car 6 */}
        <div className="mx-10 my-6">
          <div>
            <img
              src="/assets/Cars/car-19.jpg"
              alt=""
              className="h-86 w-80 rounded-xl"
            />
          </div>
          <div className="py-4">
            <p className="text-xl font-semibold">test sedan</p>
            <p>this a test create</p>
            <p>Location: coxbazar</p>
            <p>Price Per Hour: $ 220</p>
          </div>
          <div
            className="flex justify-center items-center bg-orange-500 hover:bg-blue-950
          text-black font-bold hover:cursor-pointer hover:text-white
          py-1.5 px-5 rounded-lg text-xl w-full 
          shadow-md transition duration-250 ease-in-out"
          >
            <button type="submit">See Details</button>
          </div>
        </div>

        {/* Car 7 */}
        <div className="mx-10 my-6">
          <div>
            <img
              src="/assets/Cars/car-11.jpg"
              alt=""
              className="h-86 w-80 rounded-xl"
            />
          </div>
          <div className="py-4">
            <p className="text-xl font-semibold">test sedan</p>
            <p>this a test create</p>
            <p>Location: coxbazar</p>
            <p>Price Per Hour: $ 220</p>
          </div>
          <div
            className="flex justify-center items-center bg-orange-500 hover:bg-blue-950
          text-black font-bold hover:cursor-pointer hover:text-white
          py-1.5 px-5 rounded-lg text-xl w-full 
          shadow-md transition duration-250 ease-in-out"
          >
            <button type="submit">See Details</button>
          </div>
        </div>

        {/* Car 8 */}
        <div className="mx-10 my-6">
          <div>
            <img
              src="/assets/Cars/car-15.jpg"
              alt=""
              className="h-86 w-80 rounded-xl"
            />
          </div>
          <div className="py-4">
            <p className="text-xl font-semibold">test sedan</p>
            <p>this a test create</p>
            <p>Location: coxbazar</p>
            <p>Price Per Hour: $ 220</p>
          </div>
          <div
            className="flex justify-center items-center bg-orange-500 hover:bg-blue-950
          text-black font-bold hover:cursor-pointer hover:text-white
          py-1.5 px-5 rounded-lg text-xl w-full 
          shadow-md transition duration-250 ease-in-out"
          >
            <button type="submit">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter_cars;
