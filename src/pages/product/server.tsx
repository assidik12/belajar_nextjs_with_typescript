import ProductView from "@/views/Product";
import { Product } from "./product.file";
const productPage = (props: { products: Product[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default productPage;

// untuk melakukan server side rendering menggunakan function tersendiri tidak menggunakan useEffect

export async function getServerSideProps() {
  // fetch data from an API
  const data = await fetch("http://localhost:3000/api/product");
  const response = await data.json();
  return {
    props: {
      products: response.data,
    },
  };
}
