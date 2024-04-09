import { RouteObject } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { LoginPage } from "../pages/auth";

const AuthRouter: RouteObject[] = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: [{ path: "login", element: <LoginPage /> }],
  },
  {
    path: "auth/sign-up",
    element: <div>sign up</div>,
    // children: [{ path: "login", element: <LoginPage /> }],
  },
];

export default AuthRouter;
