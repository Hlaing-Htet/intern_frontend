import { Outlet, useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen p-4 bg-slate-300">
      <button
        onClick={() => navigate(-1)}
        className="p-4 mb-4 bg-blue-500 rounded-md"
      >
        back
      </button>
      <div className="flex items-center w-full gap-10">
        <article
          onClick={() => navigate("one")}
          className="w-full h-56 p-4 bg-white rounded-md"
        >
          card one
        </article>
        <article
          onClick={() => navigate("two")}
          className="w-full h-56 p-4 bg-white rounded-md"
        >
          card two
        </article>
        <article
          onClick={() => navigate("three")}
          className="w-full h-56 p-4 bg-white rounded-md"
        >
          card three
        </article>
      </div>
      <main className="w-full p-4 mt-12 bg-white rounded-md h-60 ">
        <Outlet />
      </main>
    </div>
  );
};

export default ContactPage;
