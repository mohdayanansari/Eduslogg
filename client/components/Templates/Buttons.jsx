import Link from "next/link";

function SimpleBtn({ btnName }) {
  return (
    <>
      <button className="px-16 py-3 text-xl font-medium text-white transform rounded-full my-font bglgreen hover:scale-98 focus:ring-4 focus:ring-green-800 focus:ring-offset-2">
        {btnName}
      </button>
    </>
  );
}

const GradientBtn = ({ gradientBtnName, handleBTN }) => {
  return (
    <>
      <Link href={handleBTN}>
        <button className="w-40 py-2 text-base text-white rounded-full md:py-5 md:w-52 btn-gradient">
          {gradientBtnName}
        </button>
      </Link>
    </>
  );
};

export { SimpleBtn, GradientBtn };
