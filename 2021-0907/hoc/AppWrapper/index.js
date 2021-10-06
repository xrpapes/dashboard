import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useWeb3React } from '@web3-react/core';

import Header from 'components/Header';
import Footer from 'components/Footer';
import WalletModal from 'components/WalletModal';
import { AppContext } from 'contexts';
import { useEagerConnect, useInactiveListener } from 'utils/hooks';
import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: theme.palette.background.main,
    // minHeight: '100vh',
    maxWidth: 1200,
    margin: '0 auto',
  },
  headerWrapper: {
    // maxWidth: theme.custom.layout.maxAppWidth,
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  main: {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
    },
    // minHeight: `calc(100vh - ${
    //   theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight
    // }px)`,
    padding: theme.spacing(3, 5, 3, 5),
    // backgroundColor: theme.palette.background.main,
    maxWidth: theme.custom.layout.maxAppWidth,
    width: '100%',
  },
}));

const AppWrapper = ({ children }) => {
  const classes = useStyles({});
  const context = useWeb3React();
  const { connector, library, chainId, account, activate, deactivate, active, error } = context;
  const { isWalletModalOpened, setIsWalletModalOpened } = useContext(AppContext);
  const [activatingConnector, setActivatingConnector] = useState();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  useEffect(() => {
    if (!isEmpty(account) && isWalletModalOpened) {
      setIsWalletModalOpened(false);
    }
  }, [account, isWalletModalOpened]);

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector);

  const openCloseDialogHandler = show => () => {
    setIsWalletModalOpened(show);
  };

  return (
    <div className={classes.root}>
      {isWalletModalOpened && (
        <WalletModal
          headerTitle={'Select a Wallet'}
          open={true}
          onClose={openCloseDialogHandler(false)}
          setActivatingConnector={setActivatingConnector}
          activatingConnector={activatingConnector}
          context={context}
        />
      )}
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default AppWrapper;
