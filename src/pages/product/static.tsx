import ProductView from "@/views/Product";
import { Product } from "@/types/product.type";

const productPage = (props: { products: Product[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default productPage;

// sama seperti ssr, static side rendering tidak menggunakan useEffect dan data yang dinamis tidak akan berubah jika tidak melalui build

export async function getStaticProps() {
  // fetch data from an API
  const data = await fetch("http://localhost:3000/api/product");
  const response = await data.json();
  return {
    props: {
      products: response.data,
    },
    // revelidate: 10,
  };
}
