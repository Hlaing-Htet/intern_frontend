import { useState } from "react";
import { UserPage } from "./pages/user";
import { AdminPage } from "./pages/admin";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const page = isAdmin ? <AdminPage /> : <UserPage />;

  const changeUser = () => {
    setIsAdmin(false);
  };
  const changeAdmin = () => {
    setIsAdmin(true);
  };
  return (
    <div>
      <nav className=" w-full flex items-center justify-center gap-4 bg-slate-500 h-8">
        <button onClick={changeAdmin}>admin</button>
        <button onClick={changeUser}>user</button>
      </nav>
      {page}
    </div>
  );
};

export default App;
