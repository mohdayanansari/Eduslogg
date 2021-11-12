import React from "react";
import { Heading } from "..";

const Card = () => {
  return (
    <>
      <div className="h-[400px] shadow-lg bg-white border border-gray-200 p-5 rounded-3xl"></div>
    </>
  );
};

const PlanYourFuture = () => {
  return (
    <>
      <div className="w-full px-[20px] md:px-20 mb-8 ">
        <Heading heading="Plan Your Future!" />
        <div className="grid grid-cols-1 gap-5 mt-10 md:mt-20 md:grid-cols-3">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default PlanYourFuture;
