import { useState } from 'react';
import styles from './MobileHeader.module.css';

import Logo from 'components/Header/Logo';
import MenuIcon from 'components/Icons/MenuIcon';
import MobileMenu from './MobileMenu';

export default function MobileHeader({}) {
  const [isOpened, setIsOpened] = useState(false);
  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <div className={styles.header}>
        <Logo width={180} height={120} />
        <MenuIcon onClick={toggleMenu} />
      </div>
      <MobileMenu isOpened={isOpened} setIsOpened={setIsOpened} />
    </>
  );
}
