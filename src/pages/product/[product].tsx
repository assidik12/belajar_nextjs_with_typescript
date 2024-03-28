import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../utils/swr/fatcher";
import ProductDetail from "@/views/DetailProduct";
import { Product } from "@/types/product.type";

const DetailProduct = ({ product }: { product: Product }) => {
  const { query } = useRouter();
  // client side
  const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);

  return (
    <div>
      {/* client side */}
      {/* <ProductDetail product={isLoading ? [] : data.data} /> */}
      {/* server side || static side */}
      <ProductDetail product={product} />
    </div>
  );
};

export default DetailProduct;

// server side rendering
// export async function getServerSideProps({ params }: { params: { product: string } }) {
//   // fetch data from an API
//   const data = await fetch(`http://localhost:3000/api/product/${params.product}`);
//   const response = await data.json();
//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

// static side generation
// menggunakann method getStaticPaths untuk mendaftarkan data yang akan di masukan ke SSG
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();
  const paths = response.data.map((product: Product) => ({
    params: {
      product: product.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: { params: { product: string } }) {
  // fetch data from an API
  const data = await fetch(`http://localhost:3000/api/product/${params.product}`);
  const response = await data.json();
  return {
    props: {
      product: response.data,
    },
  };
}
