import React from "react";
import Link from "next/link";

const HeaderDesktop = () => {
  return (
    <>
      <div className="container flex w-full h-[80px] glassmorphism shadow-lg px-20 mx-auto mb-8 hide-phone">
        {/* col-1 */}
        <div className="flex items-center justify-start w-1/5 ">
          <Link href="/">
            <img
              src="/edu-Slogg.png"
              alt="logo"
              className="w-[175px] cursor-pointer"
            />
          </Link>
        </div>
        {/* col-2 */}
        <div className="flex items-center justify-center w-3/4 gap-16 font-semibold text-black text-opacity-50">
          <Link href="/find-a-institute">Find a Institute</Link>
          <Link href="/find-a-job">Find a Job</Link>
          <Link href="/careers-portal">Careers Portal</Link>
          <Link href="/events">Events</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        {/* col-3 */}
        <div className="flex items-center justify-end w-1/5 gap-5 ">
          <Link href="/">Login</Link>
          <Link href="/">
            <button className="py-2 font-light tracking-wide text-white transform rounded-full hover:scale-98 w-28 bglgreen">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderDesktop;
