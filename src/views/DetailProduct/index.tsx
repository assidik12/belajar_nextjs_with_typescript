import { Product } from "@/types/product.type";
import styles from "./DetailProduct.module.scss";
import Image from "next/image";
import Link from "next/link";

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div key={product.id} className={styles.DetailProduct}>
      <Link href="/product">Back</Link>
      <h1>Detail Product</h1>
      <div className={styles.DetailProduct__image}>
        <Image src={product.image && product.image} width={250} height={250} alt={product.name} />
      </div>
      <h4 className={styles.product__content__name}>{product.name}</h4>
      <h4 className={styles.product__content__category}>{product.category}</h4>
      <h4 className={styles.product__content__price}>{product.price && product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h4>
    </div>
  );
};

export default ProductDetail;
