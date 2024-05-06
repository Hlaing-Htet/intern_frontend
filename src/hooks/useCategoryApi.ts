import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/categoryApi";

export const useFetchCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });
