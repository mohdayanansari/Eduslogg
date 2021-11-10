const MainHeading = ({ mainHeading }) => {
  return (
    <>
      <h1 className="text-4xl font-bold md:text-6xl head-font dgreen ">{mainHeading}</h1>
    </>
  );
};

const Heading = ({ heading }) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-black text-opacity-70 my-font">
        {heading}
      </h1>
    </>
  );
};

export { MainHeading, Heading };
