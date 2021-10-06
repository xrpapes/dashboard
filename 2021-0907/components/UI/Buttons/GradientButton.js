import clsx from 'clsx';
import styles from './GradientButton.module.css';

export default function GradientButton({ children, className, ...rest }) {
  return (
    <a className={clsx(className, styles.buttton)} {...rest}>
      {children}
    </a>
  );
}
