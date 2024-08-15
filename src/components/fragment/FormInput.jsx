import { Input } from "../ui/Input/Input";
import { Label } from "../ui/Label/Label";
import styles from "./FormInput.module.css";

export const FormInput = ({ label, id, value, onChange, type = "text" }) => {
 return (
  <div className={styles.formInput}>
   <Label htmlFor={id}>{label}</Label>
   <Input id={id} type={type} value={value} onChange={onChange} />
  </div>
 );
};
