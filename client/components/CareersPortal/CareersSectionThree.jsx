import React from "react";
import Link from "next/link";

const CareersSectionThree = () => {
  return (
    <>
      <div className="px-[20px] flex flex-col items-center gap-16 py-32 bg-white my-font">
        <div className="text-3xl font-bold text-black text-opacity-70">
          JOIN <span className="lgreen">TEAMS</span> AND WORK ON{" "}
          <span className="lgreen">REAL LIFE PROJECTS</span>
        </div>
        <div className="font-medium text-center text-black text-opacity-50 md:px-96">
          Already completed your career journey enough to work on real life
          problems ? Book yourself an interview slot right now, join a team
          where you are needed and show your excellence
        </div>
        <div>
          <button className="px-10 py-3 text-base text-white transition duration-200 transform rounded-full btn-gradient hover:scale-97">
            <Link href="/">Book a Slot Now</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CareersSectionThree;
