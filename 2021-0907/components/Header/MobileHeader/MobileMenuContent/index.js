import styles from './MobileMenuContent.module.css';
import Logo from 'components/Header/Logo';
import DesktopMenuItem from 'components/Header/DesktopHeader/DesktopMenuItem';
import GradientButton from 'components/UI/Buttons/GradientButton';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import Web3Status from 'components/Web3Status';

const MobileMenuContent = () => {
  return (
    <div className={styles.mobileMenuContent}>
      <Logo />
      <Web3Status />
      <OutlinedButton>Dashboard</OutlinedButton>
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
    </div>
  );
};

export default MobileMenuContent;
