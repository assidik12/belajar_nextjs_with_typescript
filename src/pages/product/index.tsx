import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Data = {
  id: number;
  name: string;
  size: string;
  price: number;
};

const productPage = () => {
  const [login, setLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();
  // useEffect(() => {
  //   if (!login) {
  //     push("/auth/login");
  //   }
  // });

  useEffect(() => {
    fetch("/api/product").then((res) => {
      res.json().then((data) => {
        setProducts(data.data);
        setLogin(true);
      });
    });
  });
  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product: Data) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.size}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default productPage;
