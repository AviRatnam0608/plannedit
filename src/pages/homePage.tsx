import Title from "@/components/title/title";
import { Link } from "react-router-dom";

const buttonStyles = `
  p-5 text-md rounded-lg border border-white 
  hover:text-black
  hover:bg-white
  hover:border-transparent
  transition-all
  duration-250
  ease-in-out
  `;

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-start w-full h-auto rounded-lg p-10 bg-gradient-to-r from-cyan-500 to-blue-500">
        <Title titleText="PlannedIt.ai" />
      </div>
      <div className="flex flex-col items-center">
        <Link to="/chatPage">
          <button className={buttonStyles}>Try PlannedIt</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
