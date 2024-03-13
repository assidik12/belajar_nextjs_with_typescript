import styles from "@/styles/404.module.scss";

const notFound = () => {
  return (
    <div className={styles.error}>
      <img src="/404.png" alt="404" className={styles.error__image} />
      <h1>404 Not Found</h1>
      <p>This page does not exist</p>
    </div>
  );
};

export default notFound;
