import styles from './Footer.module.css';
import DesktopMenuItem from 'components/Header/DesktopHeader/DesktopMenuItem';

export default function Footer({}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSide}></div>
      <div className={styles.rightSide}>
        <DesktopMenuItem href='https://t.me/XRPapescoinBSC'>Telegram</DesktopMenuItem>
        <DesktopMenuItem href='https://twitter.com/XrpApes'>Twitter</DesktopMenuItem>
        <DesktopMenuItem href='https://www.facebook.com/XRPAPECoin/'>Facebook</DesktopMenuItem>
        <DesktopMenuItem href='https://www.reddit.com/r/Xrpapes/'>Reddit</DesktopMenuItem>
      </div>
    </footer>
  );
}
