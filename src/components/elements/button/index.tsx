import styles from "./btn.module.scss";

const Button = (props: any) => {
  const { children, loading, type = "button", onclick = () => {} } = props;
  return (
    <div className={styles.contain}>
      <button className={!loading ? styles.contain__btn : styles.contain__btn__loading} type={type} onClick={onclick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
