import React from "react";
// Lottie React //
import Lottie from "lottie-react";
import Emailicon from "./email.json";

const Email = () => {
  return (
    <div className="bg-blue-50 rounded-2xl">
      <div className="w-full max-w-sm h-auto mx-auto my-8">
        <Lottie animationData={Emailicon} />
      </div>
    </div>
  );
};

export default Email;
