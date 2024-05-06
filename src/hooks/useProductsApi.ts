import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchProducts, createNewProduct } from "../api";
import { ProductDataType } from "../type";
import { useNavigate } from "react-router-dom";

export const useFetchProducts = ({
  limit,
  sort,
}: {
  limit: number;
  sort: string;
}) =>
  useQuery({
    queryKey: ["products", sort, limit],
    queryFn: () => fetchProducts({ limit, sort }),
  });

export const useCreateProduct = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: ProductDataType) => createNewProduct({ data }),
    onSuccess: () => navigate("/"),
  });
};
