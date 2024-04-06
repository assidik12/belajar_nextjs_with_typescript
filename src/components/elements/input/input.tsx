import styles from "./inputFrom.module.scss";

const Input = (props: any) => {
  const { type, placeholder, name } = props;
  return <input className={styles.contain__input} name={name} type={type} placeholder={placeholder} />;
};
export default Input;
