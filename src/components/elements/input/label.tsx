import styles from "./inputFrom.module.scss";
const Label = (props: any) => {
  const { htmlFor, children } = props;
  return (
    <label className={styles.contain__label} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
