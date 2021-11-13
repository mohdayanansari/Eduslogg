import Link from "next/link";

function SimpleBtn({ btnName }) {
  return (
    <>
      <button className="px-12 py-2 text-base font-medium text-white transform rounded-full md:text-xl md:px-16 md:py-3 my-font bglgreen hover:scale-98 focus:ring-4 focus:ring-green-800 focus:ring-offset-2">
        {btnName}
      </button>
    </>
  );
}

const GradientBtn = ({ gradientBtnName, handleBTN }) => {
  return (
    <>
      <Link href={handleBTN}>
        <button className="w-40 px-5 py-2 text-base text-white rounded-full md:py-5 md:w-52 btn-gradient">
          {gradientBtnName}
        </button>
      </Link>
    </>
  );
};

export { SimpleBtn, GradientBtn };
