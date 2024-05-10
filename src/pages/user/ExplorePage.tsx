import Button from "../../components/Button";

const ExplorePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-200">
      <Button onClick={() => console.log("click")} className="px-20 h-14">
        Click Me
      </Button>
    </div>
  );
};

export default ExplorePage;
