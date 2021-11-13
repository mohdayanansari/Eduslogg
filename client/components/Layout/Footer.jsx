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
      <div className="flex flex-col items-center mt-5 md:items-start md:mt-0">
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
  const Year = new Date().getFullYear();

  const linkedin =
    "https://cdn.iconscout.com/icon/free/png-64/linkedin-187-675833.png";
  const twitter =
    "https://cdn.iconscout.com/icon/free/png-64/twitter-2038532-1718517.png";
  const facebook =
    "https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png";
  const instagram =
    "https://cdn.iconscout.com/icon/free/png-64/instagram-188-498425.png";

  return (
    <>
      <div className=" w-full px-[10px] md:px-20 drop-shadow-2xl border-t py-[50px] border-green-500 limegreenbg">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* col-1 */}
          <div className="pb-8 border-b border-green-500 border-opacity-10 md:col-span-3 md:pb-0 md:border-b-0">
            <div className="flex justify-center w-full md:justify-start">
              <img
                src="/edu-Slogg.png"
                alt="logo"
                className="w-[175px] cursor-pointer"
              />
            </div>
            <h1 className="my-10 text-lg text-center md:text-left md:text-2xl olivegreen">
              Your Career Start <br /> here.
            </h1>
            <p className="text-xs text-center md:text-sm olivegreen md:text-left text-opacity-70">
              <Link href="/">Learn More</Link>
            </p>
          </div>
          {/* col-2 */}
          <div className="pb-10 border-b border-green-500 md:pb-0 md:col-span-6 border-opacity-10 md:border-b-0">
            <div className="grid grid-cols-2 md:grid-cols-4 ">
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
          <div className=" md:col-span-3">
            <div className="flex flex-col items-center mt-10 md:mt-0 md:items-end">
              <h1 className="mb-5 font-bold olivegreen">Contact Us</h1>
              <a
                href="mailto:xyz@gmail.com"
                className="mb-2 text-sm olivegreen text-opacity-60 md:text-base hover:text-green-500"
              >
                xyz@gmail.com
              </a>
              <a
                href="tel:+916394915220"
                className="text-sm olivegreen text-opacity-60 md:text-base hover:text-green-500"
              >
                +91 6394 915 220
              </a>
              {/* icon conatainer */}
              <div className="flex gap-5 mt-10">
                <Link href="/">
                  <img
                    className="w-10 h-10 transition duration-300 ease-in-out transform drop-shadow-lg hover:translate-y-[-10px] cursor-pointer"
                    src={linkedin}
                    alt="linkedin"
                  />
                </Link>
                <Link href="/">
                  <img
                    className="w-10 h-10 transition duration-300 ease-in-out transform drop-shadow-lg hover:translate-y-[-10px] cursor-pointer"
                    src={twitter}
                    alt="twitter"
                  />
                </Link>
                <Link href="/">
                  <img
                    className="w-10 h-10 transition duration-300 ease-in-out transform drop-shadow-lg hover:translate-y-[-10px] cursor-pointer"
                    src={facebook}
                    alt="facebook"
                  />
                </Link>
                <Link href="/">
                  <img
                    className="w-10 h-10 transition duration-300 ease-in-out transform drop-shadow-lg hover:translate-y-[-10px] cursor-pointer"
                    src={instagram}
                    alt="instagram"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-[10px] md:px-20 limegreenbg py-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-6">
          {/* col-1 */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-4 text-xs md:gap-0 place-items-center md:place-items-start md:grid-cols-4 md:text-sm olivegreen">
              <Link href="/">Terms of use</Link>
              <Link href="/">Licence agreement</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Application affirmations</Link>
            </div>
          </div>
          {/* col-2 */}
          <div className="flex justify-center mt-5 text-xs md:mt-0 md:justify-end md:col-span-2 olivegreen md:text-sm">
            ©️ {Year} edu-Slog, Inc
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
