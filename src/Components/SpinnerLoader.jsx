import { FadeLoader } from "react-spinners";

const SpinnerLoader = ({ smallHeight }) => {
  return (
    <div
      className={`${
        smallHeight ? "h-[250px]" : "h-[70vh]"
      } flex flex-col justify-center items-center`}
    >
      <FadeLoader size={100} color="#6de17c" />
    </div>
  );
};

export default SpinnerLoader;
