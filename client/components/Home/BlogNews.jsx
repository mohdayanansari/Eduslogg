import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Heading } from "..";

const Card = ({ image, heading, content }) => {
  return (
    <>
      <div className="relative p-4 bg-white border h-[350px] md:h-[380px] transform transition duration-200 ease-in hover:scale-98 border-gray-100 shadow-lg rounded-2xl md:p-5">
        <div className="flex flex-col">
          <div className="w-full h-[200px]">
            <img
              src={`http://127.0.0.1:8000${image}`}
              alt="blog"
              className="object-cover w-full h-full rounded-md drop-shadow"
            />
          </div>
          <h1 className="my-2 text-lg font-bold text-black md:text-xl text-opacity-70 ">
            {heading}
          </h1>
          <p className="text-xs text-black md:text-sm text-opacity-70">
            {content}
          </p>

          <Link href="/">
            <div className="absolute bottom-[-20px] left-[40px] w-[80%] h-[40px] btn-gradient text-white font-normal rounded-lg flex justify-center items-center hover:scale-98 transform cursor-pointer mt-5">
              See More
            </div>
          </Link>
        </div>
      </div>
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
          <div className="flex flex-col items-center justify-center gap-8 md:items-start md:col-span-1">
            <Heading heading="Blog&News" />
            <Link href="/">
              <p className="mb-10 text-xs text-black cursor-pointer md:mb-0 md:text-sm text-opacity-70 hover:text-green-500">
                View All
              </p>
            </Link>
          </div>
          {/* col-2 */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-1 gap-10 md:gap-5 md:grid-cols-3">
              {myData.map((item, i) => {
                return (
                  <>
                    <Card
                      image={item.snap}
                      heading={item.heading}
                      content={item.content}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogNews;
