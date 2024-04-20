import ProductView from "@/views/Product";

import useSWR from "swr";
import { fetcher } from "@/utils/swr/fatcher";

const ProductPage = () => {
  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  return <ProductView products={isLoading ? [] : data?.data} />;
};

export default ProductPage;
