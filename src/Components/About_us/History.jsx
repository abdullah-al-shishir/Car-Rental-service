import React from "react";

const History = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center text-xl font-bold underline mb-3">
        Our <span className="text-red-500">History</span>
      </h1>
      {/* History details */}
      <div className="mx-7 md:flex">
        <div className="bg-white py-6 text-center rounded-2xl shadow-xl my-4 md:mx-3">
          <h1 className="font-bold text-xl underline text-gray-800">
            Founded in 2019
          </h1>
          <p className="mt-3 text-gray-700 text-left ml-4">
            Drive Your Dreams: Premium Car Rentals has swiftly earned a
            reputation for excellence in the car rental industry.
          </p>
        </div>
        <div className="bg-white py-6 text-center rounded-2xl shadow-xl my-4 md:mx-3">
          <h1 className="font-bold text-xl underline text-gray-800">
            Our Mission
          </h1>
          <p className="mt-3 text-gray-700 text-left ml-4">
            Our mission is to deliver unparalleled car rental experiences that
            blend luxury, comfort, and reliability.
          </p>
        </div>
        <div className="bg-white py-6 text-center rounded-2xl shadow-xl my-4 md:mx-3">
          <h1 className="font-bold text-xl underline text-gray-800">
            Trusted Excellence
          </h1>
          <p className="mt-3 text-gray-700 text-left ml-4">
            Over the past 5 years, we have become a trusted name, known for our
            commitment to quality and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
