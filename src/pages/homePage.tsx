import Button from "@/components/atoms/Button";
import Title from "@/components/title/title";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-start w-full h-auto rounded-lg p-10 bg-gradient-to-r from-cyan-500 to-blue-500">
        <Title titleText="PlannedIt.ai" />
      </div>
      <div className="flex flex-col items-center">
        <Button title="Try PlannedIt" variant="primary" linkTo="/chatPage" />
      </div>
    </div>
  );
};

export default HomePage;
