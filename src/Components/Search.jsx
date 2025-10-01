import React from "react";

const Search = () => {
  return (
    <div class="flex items-end space-x-4 p-4 py-5 rounded-xl bg-black/50">
      <div class="flex flex-col items-center">
        <h1 class="font-semibold mb-2">Location</h1>

        <select
          class="
        bg-white text-gray-800 
        py-2 px-4 w-72
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
          py-2 px-4 w-72 hover:cursor-pointer
          border border-transparent rounded-lg 
          shadow-md focus:outline-none
        "
        />
      </div>

      <button
        type="submit"
        class="
        bg-orange-600 hover:bg-orange-700 
        text-white font-bold  hover:cursor-pointer
        py-1.5 px-5 rounded-lg text-xl
        shadow-md transition duration-150 ease-in-out
      "
      >
        Search
      </button>
    </div>
  );
};

export default Search;
