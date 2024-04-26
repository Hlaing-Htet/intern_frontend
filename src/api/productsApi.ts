import { URL } from "../service/ApiEndPoints";

export const fetchProducts = async () => {
  const response: Response = await fetch(`${URL}/products`);
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result as any[];
};
