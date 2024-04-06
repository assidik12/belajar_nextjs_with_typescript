import Label from "./label";
import Input from "./input";
import styles from "./inputFrom.module.scss";
const InputFrom = (props: any) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className={styles.contain}>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputFrom;
