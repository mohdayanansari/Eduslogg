import React, { useState, useEffect } from "react";
import Link from "next/link";
import MyRadialBar from "./MyRadialBar";
// import axios from "axios";

const DesiredCareerCards = () => {
  const [careersData, setcareersData] = useState([]);
  const [category, setCategory] = useState([]);
  const getCareersAPI = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/careers/");

      const data = await res.json();

      setcareersData(data);
      console.log("😀😀😀");
      console.table(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryAPI = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/career-streams/");
      const data = await res.json();
      setCategory(data);

      console.log("category");
      console.table(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCareersAPI();
    getCategoryAPI();
  }, []);

  category.map((item, index) => {
    const i = index;
    const abc = item;
    return abc;
  });

  return (
    <>
      {careersData.map((item, index) => {
        return (
          <>
            <div className="flex w-full shadow-lg my-font rounded-2xl">
              {/* col-1 */}
              <div className="flex flex-col justify-between w-2/5 p-5 text-white bgdgreen desired-career-card-border__left">
                <p className="text-xs text-white text-opacity-50">Career</p>

                <h1 className="text-2xl font-medium"></h1>

                <Link href="/">
                  <p className="text-xs text-white text-opacity-50">
                    View all levels
                  </p>
                </Link>
              </div>
              {/* col-2 */}
              <div className="flex flex-col items-center w-3/5 gap-10 p-5 bg-white desired-career-card-border__right">
                <div className="flex items-center justify-between w-full">
                  <p className="text-xs text-black text-opacity-60">
                    {item.total_levels}
                  </p>
                  <div className="w-[80px] md:mt-[-20px] h-[50px]">
                    <MyRadialBar />
                  </div>
                </div>
                <h1 className="text-2xl font-medium text-black text-opacity-70">
                  {item.name}
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
      })}
    </>
  );
};

export default DesiredCareerCards;
