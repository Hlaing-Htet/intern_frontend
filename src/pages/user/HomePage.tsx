import { useState } from "react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const [isShowCart, setIsShowCart] = useState(true);
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (
      inputValue === "" ||
      (parseInt(inputValue) >= 0 && parseInt(inputValue) <= 12)
    ) {
      setValue(inputValue);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-200">
      <h1 className="text-6xl font-bold">{number}</h1>
      {isShowCart ? <Outlet context={[setNumber]} /> : null}
      <div className="flex items-start justify-center gap-4 mt-8 ">
        <button onClick={() => setIsShowCart(true)}>on</button>
        <button onClick={() => setIsShowCart(false)}>set</button>
        <input
          type="number"
          value={value}
          min={0}
          max={12}
          onChange={handleChange}
          className="w-20 "
        />
      </div>
    </div>
  );
};

export default HomePage;
