/** @format */

// Spinner.js
/** @format */
import React from "react";

const Spinner = ({ className = "" }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="animate-spin border-lime-200 ease-linear rounded-full border-4 border-t-4  h-[3rem] w-[3rem]"></div>
    </div>
  );
};

export default Spinner;
