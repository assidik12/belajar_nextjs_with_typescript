import { useRouter } from "next/router";

const ShopProduct = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>shop page</h1>
      <p>product : {`${query.slug && query.slug[0]} - ${query.slug && query.slug[1]}`}</p>
    </div>
  );
};

export default ShopProduct;
