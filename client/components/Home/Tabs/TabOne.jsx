import { SearchIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { SimpleBtn } from "../../Templates/Buttons";
import Cards from "./Cards";

const TabOne = () => {
  return (
    <div className="relative px-[10px] flex flex-col items-center w-full mt-10 ">
      <h1 className="py-5 text-2xl text-center text-black md:text-4xl text-opacity-70">
        Explore <span className="font-bold ">1000+</span> Institutes on our
        platform
      </h1>

      <div className="flex justify-center w-full mt-10 ">
        <span className="relative">
          <SearchIcon className="absolute text-black w-7 h-7 md:w-10 md:h-10 text-opacity-40 top-3 left-3 md:left-3 md:top-4" />
        </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter college name..."
          className="w-full py-3 text-base placeholder-gray-400 bg-white border border-gray-200 shadow-md md:text-lg md:py-5 md:w-6/12 pl-14 rounded-xl focus:ring focus:ring-green-800 caret-green-500"
        />
      </div>
      <div className="flex flex-col items-start w-full mt-10 text-xl text-black md:w-6/12 text-opacity-60">
        Search by filters
        {/* cards */}
        <div className="flex flex-wrap gap-2 mt-5">
          <Cards tagName="Private" />
          <Cards tagName="Accepts first-year applications" />
          <Cards tagName="Accepts transfer application" />
          <Cards tagName="Public" />
          <Cards tagName="Large(15,000+)" />
          <Cards tagName="Rural" />
          <Cards tagName="HighSchool" />
          <Cards tagName="Urban" />
          <Cards tagName="Engineering Institutes" />
        </div>
      </div>
      <div className="flex items-center justify-start w-full gap-4 pl-0 mt-16 md:w-6/12 ">
        <SimpleBtn btnName="Start" />
        <Link href="/find-a-institute">
          <div className="flex items-center text-sm font-medium text-black md:text-lg text-opacity-60">
            view all Institutes
            <ChevronRightIcon className="mt-[2px] w-4 h-4 text-black md:w-5 md:h-5 text-opacity-60" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TabOne;
