import clsx from 'clsx';
import styles from './OutlinedButton.module.css';

export default function OutlinedButton({ children, className, ...rest }) {
  return (
    <a className={clsx(className, styles.buttton)} {...rest}>
      {children}
    </a>
  );
}
