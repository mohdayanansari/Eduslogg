import React from "react";
import { GradientBtn, MainHeading } from "..";

const CareersHero = () => {
  return (
    <>
      <div className="grid grid-cols-1  w-full px-[20px] md:px-20 mb-8 hero-container__height md:grid-cols-8">
        {/* col-1 */}
        <div className="mt-[80px] md:mt-[50px]  md:col-span-5">
          <MainHeading mainHeading="Take Career Oriented Courses To Build Your Professional Future" />
          <div className="md:pr-[30%]">
            <p className="text-sm md:text-lg md font-medium text-black text-opacity-40 mt-10 md:mt-[10vh] ">
              Experience A New and Interesting Way of Learning With Alot Of
              Practical Emphasization
              <br />
              <br />
              It's easy with bla blaa blla...
            </p>
          </div>
          <div className="flex justify-start mt-12 md:mt-16">
            <button className="px-10 py-2 text-base text-white rounded-full md:py-5 btn-gradient">
              Explore Career Courses
            </button>
          </div>
        </div>

        {/* col-2 */}
        <div className="flex items-center w-full md:col-span-3 md:justify-start ">
          <img
            src="/img/careersbg.png"
            alt="gif"
            className="w-3/4 mx-auto md:w-full md:ml-[-100px] md:m-0 opacity-80"
          />
        </div>
      </div>
    </>
  );
};

export default CareersHero;
