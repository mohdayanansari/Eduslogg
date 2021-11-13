import React from "react";
import { SearchCircleIcon } from "@heroicons/react/solid";
import { Heading } from "../../Templates/Headings";
import DesiredCareerCards from "./DesiredCareerCards";
// import { Heading, DesiredCareerCards } from "./";

const CareersSectionFour = () => {
  return (
    <>
      <div className="w-full limegreenbg px-[20px] md:px-20">
        {/* Heading */}
        <div className="flex justify-between w-full py-16">
          <div className="w-3/4">
            <Heading heading="DISCOVER YOUR DESIRED CAREERS" />
          </div>
          <div className="w-1/4">
            <div className="w-full">
              <span className="relative">
                <SearchCircleIcon className="absolute top-0 w-6 h-6 text-black text-opacity-20 left-3" />
              </span>
              <input
                type="search"
                name=""
                id=""
                placeholder="Search institutes by names..."
                className="w-full py-2 pl-10 text-base placeholder-gray-400 bg-white border border-gray-200 shadow-md rounded-xl focus:ring focus:ring-green-800 caret-green-500"
              />
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="grid grid-cols-2 gap-5 pb-16">
          <DesiredCareerCards />
        </div>
      </div>
    </>
  );
};

export default CareersSectionFour;
