import React, { useState, useEffect } from "react";
import Link from "next/link";
import MyRadialBar from "./MyRadialBar";
// import axios from "axios";

const DesiredCareerCards = () => {

  const getData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/careers/");

      const data = await res.json();

      console.log("😀😀😀");
      console.table(data)
    } catch (error) {
      console.log(error);
    }
  }




  return (
    <>
      <div className="flex w-full shadow-lg my-font rounded-2xl">
        {/* col-1 */}
        <div className="flex flex-col justify-between w-2/5 p-5 text-white bgdgreen desired-career-card-border__left">
          <p className="text-xs text-white text-opacity-50">1</p>
          <h1 className="text-2xl font-medium">course name</h1>
          <Link href="/">
            <p className="text-xs text-white text-opacity-50">test</p>
          </Link>
        </div>
        {/* col-2 */}
        <div className="flex flex-col items-center w-3/5 gap-10 p-5 bg-white desired-career-card-border__right">
          <div className="flex items-center justify-between w-full">
            <p className="text-xs text-black text-opacity-60">50</p>
            <div className="w-[80px] md:mt-[-20px] h-[50px]">
              <MyRadialBar />
            </div>
          </div>
          <h1 className="text-2xl font-medium text-black text-opacity-70">
            test
          </h1>
          <Link href="/">
            <p className="w-full py-2 text-center text-white rounded-full btn-gradient">
              Start
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DesiredCareerCards;
