import Link from "next/link";
import React from "react";

const MyLinks = ({
  name,
  linkOneName,
  linkTwoName,
  linkThreeName,
  linkFourName,
  linkFiveName,
}) => {
  return (
    <>
      <div>
        <h1 className="mb-5 font-bold olivegreen">{name}</h1>
        <div className="flex flex-col gap-2 opacity-50 olivegreen font-base">
          <Link href="/">{linkOneName}</Link>
          <Link href="/">{linkTwoName}</Link>
          <Link href="/">{linkThreeName}</Link>
          <Link href="/">{linkFourName}</Link>
          <Link href="/">{linkFiveName}</Link>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className=" w-full px-[20px] md:px-20 drop-shadow-2xl border-t py-[50px] border-green-500 limegreenbg">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* col-1 */}
          <div className="bg-yellow-300 md:col-span-3">
            <img
              src="/edu-Slogg.png"
              alt="logo"
              className="w-[175px] cursor-pointer"
            />
            <h1 className="my-10 text-lg text-center md:text-left md:text-2xl olivegreen">
              Your Career Start <br /> here.
            </h1>
            <p className="text-xs md:text-sm olivegreen text-opacity-70">
              <Link href="/">Learn More</Link>
            </p>
          </div>
          {/* col-2 */}
          <div className=" md:col-span-6">
            <div className="flex justify-evenly">
              <MyLinks
                name="About"
                linkOne="linkOne"
                linkTwo="linkTwo"
                linkThree="linkThree"
                linkFour="linkFour"
                linkFive="linkFive"
                linkOneName="Link One"
                linkTwoName="Link Two"
                linkThreeName="Link One"
                linkFourName="Link One"
                linkFiveName="Link One"
              />
              <MyLinks
                name="Blog"
                linkOne="linkOne"
                linkTwo="linkTwo"
                linkThree="linkThree"
                linkFour="linkFour"
                linkFive="linkFive"
                linkOneName="Link One"
                linkTwoName="Link Two"
                linkThreeName="Link One"
                linkFourName="Link One"
                linkFiveName="Link One"
              />
              <MyLinks
                name="Service"
                linkOne="linkOne"
                linkTwo="linkTwo"
                linkThree="linkThree"
                linkFour="linkFour"
                linkFive="linkFive"
                linkOneName="Link One"
                linkTwoName="Link Two"
                linkThreeName="Link One"
                linkFourName="Link One"
                linkFiveName="Link One"
              />
              <MyLinks
                name="Help"
                linkOne="linkOne"
                linkTwo="linkTwo"
                linkThree="linkThree"
                linkFour="linkFour"
                linkFive="linkFive"
                linkOneName="Link One"
                linkTwoName="Link Two"
                linkThreeName="Link One"
                linkFourName="Link One"
                linkFiveName="Link One"
              />
            </div>
          </div>
          {/* col-3 */}
          <div className="bg-red-300 md:col-span-3"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
