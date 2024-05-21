import styles from "./ListItem.module.css";

export const ListItem = ({ name, thumbnail, email }) => {
  return (
    <li className={styles.listItem}>
      <img src={thumbnail} alt={`Photo of ${name}`} />
      <h3>{name}</h3>
      <div className={styles.email}>Email: {email}</div>
    </li>
  );
};
