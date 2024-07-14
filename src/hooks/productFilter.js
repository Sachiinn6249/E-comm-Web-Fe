import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProductByCategory } from "@/api/productApi";

export const useProductFilters = (initialCategory) => {
  const [filters, setFilters] = useState({});
  const [queryKey, setQueryKey] = useState(["productList", initialCategory]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey,
    queryFn: () => fetchProductByCategory(filters),
    enabled: !!queryKey[1],
    retry: false,
  });

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  useEffect(() => {
    if (initialCategory) {
      updateFilters({ search: initialCategory });
    }
  }, [initialCategory]);

  useEffect(() => {
    setQueryKey(["productList", filters]);
  }, [filters]);

  return { data, isLoading, isError, error, updateFilters };
};
