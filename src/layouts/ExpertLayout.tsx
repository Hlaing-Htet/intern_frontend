import { Outlet } from "react-router-dom";

const ExpertLayout = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="h-screen col-span-1 bg-blue-600 "></div>
      <div className="col-span-4 ">
        <Outlet />
      </div>
    </div>
  );
};

export default ExpertLayout;
