import { RouteObject } from "react-router-dom";

import ExpertLayout from "../layouts/ExpertLayout";
import { ContactPage } from "../pages/expert";

const ExpertRouter: RouteObject[] = [
  {
    path: "expert",
    element: <ExpertLayout />,
    children: [
      {
        path: "content",
        element: <ContactPage />,
        children: [
          { path: "one", element: <div>one</div> },
          { path: "two", element: <div>two</div> },
          { path: "three", element: <div>three</div> },
        ],
      },
    ],
  },
];

export default ExpertRouter;
