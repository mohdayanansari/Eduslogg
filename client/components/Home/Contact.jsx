import React from "react";
import { Heading } from "..";

const Contact = () => {
  return (
    <>
      <div className="w-full px-[20px] md:px-20 my-28 ">
        <div className="flex flex-col gap-5 md:gap-10 md:flex-row ">
          {/* col-1 */}
          <div className="flex flex-col justify-center gap-8 md:w-2/5">
            <Heading heading="Have any queries?" />
            <p>Contact Us</p>
          </div>
          {/* col-2 */}
          <div className="w-full md:w-3/5 ">
            <form method="POST">
              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Your Name..."
                  className="w-full h-[50px] transition duration-500 ease-in border-none shadow-md outline-none focus:outline-none rounded-xl focus:ring focus:ring-green-500 "
                />
                <input
                  type="text"
                  name="email"
                  id=""
                  placeholder="Your Email..."
                  className="w-full h-[50px] transition duration-500 ease-in border-none shadow-md outline-none focus:outline-none rounded-xl focus:ring focus:ring-green-500 "
                />
                <textarea name="message" id="" cols="30" rows="10"
                placeholder="Your Message..."
                className="w-full transition duration-500 ease-in border-none shadow-md outline-none focus:outline-none rounded-xl focus:ring focus:ring-green-500 "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
