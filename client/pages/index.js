import Head from "next/head";
import {
  MainHeading,
  GradientBtn,
  Tabs,
  Slider,
  Hero,
  PlanYourFuture,
  BlogNews,
  Contact,
} from "../components/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eduslogg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HOME PAGE SECTIONS */}
      <Hero />
      <Tabs />
      <Slider />
      <PlanYourFuture />
      <BlogNews />
      <Contact />
    </>
  );
}
