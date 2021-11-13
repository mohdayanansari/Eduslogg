import React from "react";
import Link from "next/link";

const CareersSectionTwo = () => {
  return (
    <>
      <div className="w-full px-[20px] md:px-20  limegreenbg hidden md:block">
        <div className="grid pb-10 xl:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 my-font">
          {/* Col-1 */}
          <div>
            <div className="w-11/12 section-2__card-wrapper">
              <div className="flex flex-col gap-20 bg-blue-400 rounded-2xl drop-shadow-2xl olivegreenbg section-2__card">
                <h1 className="text-4xl font-bold text-white">
                  DISCOVER <span className="dgreen">COURSES</span> AND COMPLETE
                  THEM TO GAIN <span className="dgreen">EXPERTISE</span> IN
                  SKILLS TO DEVELOP FASTER AND STAY UPADATED
                </h1>
                <button className="w-[300px] px-10 py-3 text-base text-white transition duration-200 transform rounded-full  btn-gradient hover:scale-97">
                  <Link href="/">Know About Courses</Link>
                </button>
              </div>
            </div>
          </div>
          {/* col-2 */}
          <div></div>
        </div>
      </div>
      {/* Mobile version */}
      <div className="md:hidden w-full p-[30px]    limegreenbg">
        <div className="flex flex-col gap-20 p-5 bg-blue-400 rounded-2xl drop-shadow-2xl olivegreenbg">
          <h1 className="text-2xl font-bold text-white">
            DISCOVER <span className="dgreen">COURSES</span> AND COMPLETE THEM
            TO GAIN <span className="dgreen">EXPERTISE</span> IN SKILLS TO
            DEVELOP FASTER AND STAY UPADATED
          </h1>
          <button className="w-[300px] px-10 py-3 text-base text-white transition duration-200 transform rounded-full  btn-gradient hover:scale-97">
            <Link href="/">Know About Courses</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CareersSectionTwo;
