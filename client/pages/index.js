import Head from "next/head";
import { MainHeading, GradientBtn, Tabs } from "../components/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1  w-full px-[20px] md:px-20 mb-8 hero-container__height md:grid-cols-8">
        {/* col-1 */}
        <div className="   mt-[100px]  md:col-span-5">
          <p className="text-sm font-bold md:text-base lgreen my-font">
            Accelerate your career
          </p>
          <MainHeading mainHeading="Your Career starts here" />
          <div className="md:pr-[30%]"> 
            <p className="text-sm md:text-lg md font-medium text-black text-opacity-40 mt-10 md:mt-[10vh] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              enim culpa minima. Maxime error possimus nemo earum. Similique, et
              ad.
              <br />
              <br />
              It's easy with bla blaa blla...
            </p>
          </div>
          <div className="flex justify-start mt-12 md:mt-16">
            <GradientBtn
              gradientBtnName="Get Started"
              handleBTN="/find-a-institute"
            />
          </div>
        </div>

        {/* col-2 */}
        <div className="flex items-center w-full md:col-span-3 md:justify-start ">
          <img src="/img/schoolbg.gif" alt="gif" className="w-3/4 mx-auto md:w-full md:ml-[-100px] md:m-0 opacity-80" />
        </div>
      </div>

      <Tabs />
    </>
  );
}
