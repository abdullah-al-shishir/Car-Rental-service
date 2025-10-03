import React from "react";

const Search_2 = () => {
  return (
    <div class="grid justify-center items-center md:hidden ml-7 mt-3 w-90  py-7 rounded-xl bg-black/50">
      <div class="flex flex-col items-center">
        <h1 class="font-semibold mb-2">Location</h1>

        <select
          class="
        bg-white text-gray-800 
        py-2 pl-2 w-full
        border border-transparent rounded-lg 
        shadow-md focus:outline-none 
        appearance-none hover:cursor-pointer
      "
        >
          <option value="" disabled selected>
            Select a option
          </option>
          <option value="dhaka">Dhaka</option>
          <option value="chattogram">Chattogram</option>
          <option value="rangpur">Rangpur</option>
          <option value="bandarban">Bandarban</option>
          <option value="borguna">Borguna</option>
          <option value="sylhet">Sylhet</option>
          <option value="khulna">Khulna</option>
          <option value="rajshahi">RajShahi</option>
        </select>
      </div>

      <div class="flex flex-col items-center">
        <h1 class="font-semibold mb-2">Date</h1>

        <input
          type="date"
          class="
          bg-white text-gray-800 
          py-2 px-2 w-72 hover:cursor-pointer
          border border-transparent rounded-lg 
          shadow-md focus:outline-none
        "
        />
      </div>

      <button
        type="submit"
        class="
        bg-orange-600 hover:bg-blue-950
        text-black font-bold  hover:cursor-pointer hover:text-white
        py-1.5 px-5 rounded-lg text-xl mx-16 mt-5
        shadow-md transition duration-250 ease-in-out
      "
      >
        Search
      </button>
    </div>
  );
};

export default Search_2;
