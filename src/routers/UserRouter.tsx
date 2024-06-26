import { Navigate, RouteObject } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import {
  CreateNewProductPage,
  ExplorePage,
  HomePage,
  MyCourse,
} from "../pages/user";
import { Cart } from "../components";

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
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
      {
        path: "new/product",
        element: <CreateNewProductPage />,
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
