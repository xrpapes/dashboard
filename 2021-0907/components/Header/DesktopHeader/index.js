import styles from './DesktopHeader.module.css';
import Logo from 'components/Header/Logo';
import DesktopMenuItem from 'components/Header/DesktopHeader/DesktopMenuItem';
import GradientButton from 'components/UI/Buttons/GradientButton';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import Web3Status from 'components/Web3Status';

export default function Header({}) {
  return (
    <header className={styles.header}>
      <Logo />
      <OutlinedButton style={{ marginLeft: 'auto' }}>Dashboard</OutlinedButton>
      <DesktopMenuItem href='https://xrpapes.club/77-2/'>Whitepaper</DesktopMenuItem>
      <DesktopMenuItem href='https://shop.spreadshirt.com/xrp-apes/'>Merch Store</DesktopMenuItem>
      <DesktopMenuItem href='https://github.com/TechRate/Smart-Contract-Audits/blob/main/August/XRPAPE%20Full%20Smart%20Contract%20Security%20Audit.pdf'>
        Audit
      </DesktopMenuItem>
      <GradientButton href='https://pancakeswap.finance/swap?outputCurrency=0x87c91dd4552c67a4b82f8008fa08458ca5e62008'>
        Buy Now
      </GradientButton>
      <GradientButton href='https://poocoin.app/tokens/0x87c91dd4552c67a4b82f8008fa08458ca5e62008'>
        Chart
      </GradientButton>
      {/* <GradientButton onClick={changeNetwork}>Switch Network</GradientButton> */}
      <Web3Status />
    </header>
  );
}
