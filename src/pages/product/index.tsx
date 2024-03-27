import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/utils/swr/fatcher";

const ProductPage = () => {
  const [login, setLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();
  useEffect(() => {
    if (!login) {
      push("/auth/login");
    }
  });

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  useEffect(() => {
    fetch("/api/product").then((res) => {
      res.json().then((data) => {
        setProducts(data.data);
        setLogin(true);
      });
    });
  }, []);
  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
