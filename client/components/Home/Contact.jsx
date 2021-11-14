import React, { useState } from "react";
import axios from "axios";
import { Heading } from "..";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, message } = userData;

    const res = await fetch("http://127.0.0.1:8000/queryform/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await res.json();

    if (!data) {
      console.log("message not sent");
    } else {
      alert("Message Sent! 🚀");

      setUserData({ name: "", email: "", message: "" });
    }
  };

  // const postDataAxios = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { name, email, message } = userData;

  //     const res = await axios({
  //       method: "POST",
  //       url: "http://127.0.0.1:8000/queryform/",
  //       data: {
  //         name,
  //         email,
  //         message,
  //       },
  //     });
      // const data = await res.json();
      // setUserData({ name: "", email: "", message: "" });

      // if (!data) {
      //   console.log("message not sent!");
      // } else {
      //   alert("submitted");

      // }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
                  value={userData.name}
                  id=""
                  onChange={handleInput}
                  placeholder="Your Name..."
                  className="w-full h-[50px] transition duration-500 ease-in border-none shadow-md outline-none focus:outline-none rounded-xl focus:ring focus:ring-green-500 "
                />
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInput}
                  id=""
                  placeholder="Your Email..."
                  className="w-full h-[50px] transition duration-500 ease-in border-none shadow-md outline-none focus:outline-none rounded-xl focus:ring focus:ring-green-500 "
                />
                <textarea
                  name="message"
                  id=""
                  value={userData.message}
                  onChange={handleInput}
                  cols="30"
                  rows="10"
                  placeholder="Your Message..."
                  className="w-full transition duration-500 ease-in border-none shadow-md outline-none focus:outline-none rounded-xl focus:ring focus:ring-green-500 "
                />
                <input
                  type="submit"
                  value="Send"
                  onClick={postData}
                  name="send"
                  className="py-[10px] rounded-xl btn-gradient text-white focus:translate-y-[-10px] transition transform duration-300 ease-in"
                />
                {/* <button onClick={postData} type="submit">
                  send
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
