import styles from "@/styles/Home.module.css";
import ProductPage from "./product";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={`/product/static`}>statik side</Link>
      <Link href={`/product/server`}>server side</Link>
      <ProductPage />
    </main>
  );
}
