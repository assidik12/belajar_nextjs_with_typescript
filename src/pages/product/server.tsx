import ProductView from "@/views/Product";
import { Product } from "@/types/product.type";

const ProductPage = (props: { products: Product[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;

// untuk melakukan server side rendering menggunakan function tersendiri tidak menggunakan useEffect dan data akan berubah jika terjadi perubahan pada data meski tidak di build

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
