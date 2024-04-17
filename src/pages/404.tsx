import styles from "@/styles/404.module.scss";
import Image from "next/image";

const notFound = () => {
  return (
    <div className={styles.error}>
      {/* <img src="/404.png" alt="404" className={styles.error__image} /> */}
      <Image src="/404.png" alt="404" width={600} className={styles.error__image} height={600} />
      <h1>404 Not Found</h1>
      <p>This page does not exist</p>
    </div>
  );
};

export default notFound;
