import React from "react";
import Filter_cars from "../Components/Cars/Filter_cars";

const Cars = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold underline mt-5 my-3">
        Explore the best <span className="text-red-500">cars</span> in town
      </h1>
      {/* Components are imported here */}
      <Filter_cars />
    </div>
  );
};

export default Cars;
