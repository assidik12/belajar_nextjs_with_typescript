import { useRouter } from "next/router";

const detailProduct = () => {
  const { query } = useRouter();
  return (
    <div>
      <p>product : {query.id}</p>
    </div>
  );
};

export default detailProduct;
