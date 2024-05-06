import { URL } from "../service/ApiEndPoints";

export const fetchCategories = async () => {
  const response: Response = await fetch(`${URL}/products/categories`);
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result as any[];
};
