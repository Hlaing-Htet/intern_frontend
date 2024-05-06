import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex items-center justify-between w-full gap-5 p-4 bg-blue-600">
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-slate-300 p-2 rounded-md" : ""
          }
          to={"home"}
        >
          home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-slate-300 p-2 rounded-md" : ""
          }
          to={"explore"}
        >
          explore
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-slate-300 p-2 rounded-md" : ""
          }
          to={"my-course"}
        >
          my-course
        </NavLink>
      </div>
      <div>
        <Link to={"new/product"}>add new</Link>
      </div>
    </div>
  );
};

export default Nav;
