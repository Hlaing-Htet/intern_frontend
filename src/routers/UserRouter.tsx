import { Navigate, RouteObject } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import { ExplorePage, HomePage, MyCourse } from "../pages/user";

const UserRouter: RouteObject[] = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"home"} />,
      },

      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "explore",
        element: <ExplorePage />,
      },
      {
        path: "my-course",
        element: <MyCourse />,
      },
    ],
  },
];

export default UserRouter;
