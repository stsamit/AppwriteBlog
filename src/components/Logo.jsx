import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <div className="bg-gray-900 h-[50px] w-[50px] rounded-full flex justify-center items-center">
        <span className="text-white pl-1 font-bold text-2xl tracking-tighter">
          A <sup>2</sup>
        </span>
      </div>
    </div>
  );
}

export default Logo;
