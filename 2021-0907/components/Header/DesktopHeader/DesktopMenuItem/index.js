import styles from './DesktopMenuItem.module.css';

export default function DesktopMenuItem({ children, ...rest }) {
  return (
    <a className={styles.desktopMenuItem} {...rest}>
      {children}
    </a>
  );
}
