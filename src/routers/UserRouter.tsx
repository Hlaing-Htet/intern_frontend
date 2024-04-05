import { Outlet, RouteObject } from "react-router-dom";
import Footer from "../Footer";

const UserRouter: RouteObject[] = [
  {
    path: "/",
    element: <div>/</div>,
  },
  {
    path: "home",
    element: (
      <div>
        <div>nav</div>
        <div>
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        path: ":userId",
        element: <Footer />,
        children: [{ path: "about", element: <div>about</div> }],
      },
    ],
  },
  {
    path: "about",
    element: <div>about</div>,
  },
  {
    path: "contact",
    element: <div>contact</div>,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
];

export default UserRouter;
