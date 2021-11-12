import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Heading } from "..";

const Card = () => {
  return (
    <>
      <div className="p-2 bg-white border h-[350px] border-gray-100 shadow-lg rounded-2xl md:p-5"></div>
    </>
  );
};

const BlogNews = () => {
  const [myData, setMyData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/blogs");

      const data = await res.json();

      setMyData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("🔥🔥");
  console.log(myData);

  return (
    <>
      <div className="w-full px-[20px] md:px-20 my-28 ">
        <div className="grid grid-cols-1 md:grid-cols-6">
          {/* col-1 */}
          <div className="flex flex-col justify-center gap-8 md:col-span-1">
            <Heading heading="Blog&News" />
            <Link href="/">
              <p className="text-xs text-black cursor-pointer md:text-sm text-opacity-70 hover:text-green-500">
                View All
              </p>
            </Link>
          </div>
          {/* col-2 */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogNews;
