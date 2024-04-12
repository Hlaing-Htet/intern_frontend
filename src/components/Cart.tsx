import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";

export const Cart = () => {
  const [setNumber]: [setNumber: React.Dispatch<React.SetStateAction<number>>] =
    useOutletContext();
  const [data, setData] = useState(0);
  const numberRef = useRef(0);
  const dataRef = useRef<HTMLParagraphElement | null>(null);
  console.log(numberRef.current);
  useEffect(() => {
    console.log("on");
    return () => {
      setNumber(numberRef.current);
      console.log(numberRef.current);
    };
  }, []);

  const handlePlus = () => {
    setData(data + 1);
    numberRef.current = data + 1;
  };
  const handleMinus = () => {
    setData(data - 1);
    numberRef.current = data - 1;
  };

  return (
    <div className="flex items-center gap-4 p-4 m-4 rounded-md bg-slate-300 ">
      <button onClick={handlePlus}>+</button>
      <p ref={dataRef}>{data}</p>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};
