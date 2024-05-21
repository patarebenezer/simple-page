import styles from "./SectionTitle.module.css";

export const SectionTitle = ({ children }) => {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
};
