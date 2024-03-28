import Link from "next/link";
import styles from "./Product.module.scss";
import { Product } from "@/types/product.type";
const ProductView = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product Page</h1>

      <div className={styles.product__content}>
        {products.length > 0 ? (
          <>
            {products.map((product: Product) => (
              <Link href={`/product/${product.id}`} key={product.id} className={styles.product__content__items}>
                <div className={styles.product__content__items__image}>
                  <img src={product.image} width={250} height={250} alt={product.name} />
                </div>
                <h4 className={styles.product__content__name}>{product.name}</h4>
                <h4 className={styles.product__content__category}>{product.category}</h4>
                <h4 className={styles.product__content__price}>{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h4>
              </Link>
            ))}
          </>
        ) : (
          <div className={styles.product__content__skelaton}>
            <div className={styles.product__content__skelaton__image}></div>
            <h4 className={styles.product__content__skelaton__name}></h4>
            <h4 className={styles.product__content__skelaton__category}></h4>
            <h4 className={styles.product__content__skelaton__price}></h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
