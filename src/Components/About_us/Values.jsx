import React from "react";
import { FaHandshake } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";

const Values = () => {
  const div_style =
    "flex flex-col items-center py-5 lg:px-5 text-center bg-white rounded-2xl shadow-lg";
  const icon_style = "text-orange-400 text-4xl";
  const p_style = "text-2xl font-semibold text-gray-800 pt-2";
  const number_style = "text-gray-800 p-3";
  return (
    <div>
      <h1 className="text-center text-xl font-bold underline mb-7">
        Values & <span className="text-red-500">Commitment</span>
      </h1>
      {/* Values & Commitment here */}
      <div className="grid gap-y-8 gap-x-5 lg:gap-x-7 md:grid-cols-2 lg:grid-cols-3 md:mx-4 lg:mx-26">
        <div className={div_style}>
          <FaHandshake className={icon_style} />
          <p className={p_style}>Customer Care</p>
          <p className={number_style}>
            We focus on delivering exceptional service and support, ensuring our
            customers are always satisfied.
          </p>
        </div>
        <div className={div_style}>
          <FaLeaf className={icon_style} />
          <p className={p_style}>Eco-Friendliness</p>
          <p className={number_style}>
            Our commitment to eco-friendly practices helps reduce our
            environmental footprint and promote sustainability.
          </p>
        </div>
        <div className={div_style}>
          <RiSecurePaymentFill className={icon_style} />
          <p className={p_style}>Honesty</p>
          <p className={number_style}>
            Honesty is the cornerstone of our business, guiding our actions and
            decisions with transparency and integrity.
          </p>
        </div>
        <div className={div_style}>
          <GiProgression className={icon_style} />
          <p className={p_style}>Development</p>
          <p className={number_style}>
            We are dedicated to continuous development and innovation, always
            seeking to enhance and expand our services.
          </p>
        </div>
        <div className={div_style}>
          <FaRecycle className={icon_style} />
          <p className={p_style}>Reusability</p>
          <p className={number_style}>
            We advocate for recycling and responsible waste management to
            support environmental conservation.
          </p>
        </div>
        <div className={div_style}>
          <FaHandshakeAngle className={icon_style} />
          <p className={p_style}>Community Engagement</p>
          <p className={number_style}>
            We are deeply committed to our community, actively participating in
            local initiatives and support programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
