import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from 'react-sidebar';
import MobileMenuContent from '../MobileMenuContent';

const styles = {
  root: {
    width: 0,
  },
  sidebar: {
    background: '#1b1d34',
    zIndex: 2000,
    width: 'calc(100% - 40px)',
    maxWidth: '400px',
    position: 'fixed',
    minHeight: '-webkit-fill-available',
  },
  overlay: {
    zIndex: 150,
  },
};

const MobileMenu = ({ isOpened, setIsOpened }) => {
  const router = useRouter();
  const openSidebar = open => {
    setIsOpened(open);
  };

  useEffect(() => {
    if (isOpened) {
      setIsOpened(false);
    }
  }, [router.asPath]);

  return (
    <Sidebar
      sidebar={<MobileMenuContent />}
      open={isOpened}
      onSetOpen={() => openSidebar(false)}
      styles={styles}
      dragToggleDistance={40}>
      <div />
    </Sidebar>
  );
};

export default MobileMenu;
