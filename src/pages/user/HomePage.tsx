import { useState } from "react";
import { Cart } from "../../components";

const HomePage = () => {
  const [isShowCart, setIsShowCart] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-200">
      {isShowCart ? <Cart /> : null}

      <div className="flex items-start justify-center gap-4 mt-8 ">
        <button onClick={() => setIsShowCart(true)}>on</button>
        <button onClick={() => setIsShowCart(false)}>off</button>
      </div>
    </div>
  );
};

export default HomePage;
