import Head from "next/head";
import React from "react";
// import { CareersHero, CareersSectionTwo, CareersSectionThree, CareersSectionFour, CareersSectionFive} from "../../components";
import CareersHero from "../../components/CareersPortal/CareersHero";
import CareersSectionTwo from "../../components/CareersPortal/CareersSectionTwo";
import CareersSectionThree from "../../components/CareersPortal/CareersSectionThree";
import CareersSectionFour from "../../components/CareersPortal/SectionFour/CareersSectionFour";

const CareersPortal = () => {
  return (
    <>
      <Head>
        <title>Careers Portal--Eduslogg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CareersHero />
      <CareersSectionTwo />
      <CareersSectionThree />
      <CareersSectionFour />
      {/* <CareersSectionFive /> */}
    </>
  );
};

export default CareersPortal;
