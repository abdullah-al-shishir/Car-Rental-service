import React from "react";
import { FaCar } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

const Choose = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold underline">
        Why Choose <span className="text-red-500">Us?</span>
      </h1>
      <div className="md:flex gap-x-3">
        <div className="grid justify-center text-center">
          <div class="flex flex-col items-center  mt-4 p-7 w-[480px] text-black rounded-2xl shadow-black shadow-2xl bg-gradient-to-r from-orange-700 to-orange-400">
            <FaCar size={48} className="m-5" />
            <h1 class="mt-2 font-bold text-xl ">Wide Selection of Vehicles</h1>
            <span class=" text-sm mt-1">
              Choose from a wide range of vehicles to suit your needs, from
              compact cars to luxury SUVs. We have the perfect car for every
              occasion.
            </span>
          </div>
        </div>
        <div className="grid justify-center text-center">
          <div class="flex flex-col items-center mt-4 p-7 w-[480px] text-black rounded-2xl shadow-black shadow-2xl bg-gradient-to-r from-orange-700 to-orange-400">
            <GiReceiveMoney size={48} className="m-5" />
            <h1 class="mt-2 font-bold text-xl ">Affordable Rates </h1>
            <span class=" text-sm mt-1">
              Enjoy competitive pricing and great deals on all our renta cars.
              We offer transparent pricing with no hidden fees.
            </span>
          </div>
        </div>
        <div className="grid justify-center text-center">
          <div class="flex flex-col items-center mt-4 p-7 w-[480px] text-black rounded-2xl shadow-black shadow-2xl bg-gradient-to-r from-orange-700 to-orange-400">
            <RiCustomerService2Fill size={48} className="m-5" />
            <h1 class="mt-2 font-bold text-xl ">Excellent Customer Service</h1>
            <span class=" text-sm mt-1">
              Our friendly and knowledgeable staff are here to assist you 24/7.
              We strive to provide the best customer service experience.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
