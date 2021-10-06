import styles from './InputField.module.css';

export default function InputField({ ...props }) {
  return <input className={styles.input} {...props} />;
}
