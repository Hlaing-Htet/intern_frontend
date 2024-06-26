import { URL } from "../service/ApiEndPoints";
import { ProductDataType } from "../type";

export const fetchProducts = async ({
  limit,
  sort,
}: {
  limit: number;
  sort: string;
}) => {
  const filterLimit = limit ? `limit=${limit}` : "";
  const filterSort = sort ? `sort=${sort}` : "";
  const response: Response = await fetch(
    `${URL}/products?${filterLimit && filterLimit}${
      filterSort && `&${filterSort}`
    }`
  );
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result as any[];
};

export const createNewProduct = async ({
  data,
}: {
  data: {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
  };
}) => {
  const response: Response = await fetch(`${URL}/products`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }
  return result as ProductDataType;
};
