import styles from "./Input.module.css";

export const Input = ({ id, type = "text", value, onChange }) => {
 return (
  <input
   id={id}
   type={type}
   value={value}
   onChange={onChange}
   className={styles.input}
  />
 );
};
