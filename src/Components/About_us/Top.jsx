import React from "react";

const Top = () => {
  const CarPhoto = "url(/assets/Cars/car-17.jpg)";

  const bg_divCar = {
    backgroundImage: CarPhoto,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="md:flex md:mx-20 lg:mx-0">
      {/* Image */}
      <div
        style={bg_divCar}
        className="h-86 md:h-auto md:w-1/2  lg:h-[445px] relative rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden"
      >
        <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-600 to-yellow-400 text-right rounded-bl-xl px-5 py-3">
          <p className="text-[13px] font-semibold">
            5 Years of Trusted Excellence
          </p>
        </div>
      </div>
      {/* Description */}
      <div className="p-4 bg-gradient-to-r from-amber-600 to-yellow-400 rounded-b-lg md:w-1/2 md:rounded-r-lg md:rounded-b-none">
        <h1 className="text-2xl font-bold text-gray-900">
          Drive Your Dreams: Premium Car Rentals
        </h1>
        <div className="text-center text-gray-900 mt-10">
          Since our inception, we have been dedicated to offering a diverse
          range of high-quality vehicles to meet the unique needs of our
          clients. From luxury sedans and SUVs to eco-friendly hybrids and
          sports cars, our fleet is meticulously maintained to ensure safety,
          comfort, and style. Our legacy is built on the trust and loyalty of
          our customers, who return to us time and again for their travel needs.
        </div>
      </div>
    </div>
  );
};

export default Top;
