import { useEffect } from "react";

export const Cart = () => {
  useEffect(() => {
    console.log("on");
    return () => {
      console.log("off");
    };
  }, []);

  return <div>Cart</div>;
};
