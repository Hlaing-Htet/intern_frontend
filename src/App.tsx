import { Route, Routes, useRoutes } from "react-router-dom";
import UserRouter from "./routers/UserRouter";
import AuthRouter from "./routers/AuthRouter";
import ExpertRouter from "./routers/ExpertRouter";

const App = () => {
  const UserRouting = useRoutes(UserRouter);
  const AuthRouting = useRoutes(AuthRouter);
  const ExpertRouting = useRoutes(ExpertRouter);
  return (
    <div>
      <Routes>
        <Route path="/*" element={UserRouting} />
        <Route path="/auth/*" element={AuthRouting} />
        <Route path="/expert/*" element={ExpertRouting} />
      </Routes>
    </div>
  );
};

export default App;
