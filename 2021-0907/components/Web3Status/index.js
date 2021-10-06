import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import NetworkIcon from 'components/Icons/NetworkIcon';
import { getBalance, getFormatedBalance } from 'utils/web3';

import GradientButton from 'components/UI/Buttons/GradientButton';
import { AppContext } from 'contexts';

import { isEmpty, shortenAddress } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  userInfo: {
    borderRadius: theme.spacing(4),
    backgroundColor: theme.palette.background.card,
    paddingLeft: 4,
    '& p': {
      color: theme.palette.text.primary,
    },
  },
  account: {
    color: theme.palette.text.primary,
    borderColor: theme.palette.primary.dark,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0.5, 1.5),
    borderRadius: theme.spacing(4),
    borderWidth: 1,
    borderStyle: 'solid',
    height: theme.spacing(38 / 8),
    display: 'flex',
    alignItems: 'center',
  },
  networkError: {
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.main,
    },
  },
  tokenIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    minWidth: theme.spacing(4),
    minHeight: theme.spacing(4),
  },
}));

export default function Web3Status() {
  const classes = useStyles();
  const { account, connector, error, library } = useWeb3React();
  const [balance, setBalance] = useState({});

  const { isWalletModalOpened, setIsWalletModalOpened } = useContext(AppContext);

  const getBalanceInfo = async () => {
    try {
      if (account) {
        const balanceOfXRPAPE = await getBalance(account);

        setBalance({
          XRPAPE: balanceOfXRPAPE,
        });
      }
    } catch (error) {
      console.log('getBalanceInfo error ==>', error);
    }
  };

  useEffect(() => {
    if (library && account && getBalanceInfo) {
      getBalanceInfo();
    }
  }, [library, account, getBalanceInfo]);

  const toggleWalletModal = () => {
    if (isEmpty(account)) {
      setIsWalletModalOpened(true);
    } else {
      setIsWalletModalOpened(false);
    }
  };

  const switchNetworkHandler = () => {
    try {
      window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x38',
            chainName: 'Binance Smart Chain',
            nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
            blockExplorerUrls: ['https://bscscan.com/'],
          },
        ],
      });
    } catch (error) {
      console.log('[TestHandler] error ==>', error);
    }
  };

  if (account) {
    return (
      <Box
        onClick={toggleWalletModal}
        display='flex'
        alignItems='center'
        className={classes.userInfo}>
        {/* <Image
          className={classes.tokenIcon}
          layout='fixed'
          width={28}
          height={28}
          src='/img/weth.png'
          alt='weth'
        /> */}
        &nbsp;<Typography>{getFormatedBalance(balance['XRPAPE']) || 'N/A'}</Typography>&nbsp;
        <Typography className={classes.account} onClick={toggleWalletModal}>
          {shortenAddress(account)}
        </Typography>
      </Box>
    );
  } else if (error) {
    return (
      // <div className={classes.root}>
      <GradientButton className={classes.networkError} onClick={switchNetworkHandler} fullWidth>
        <Box display='flex' alignItems='center'>
          <NetworkIcon /> &nbsp;{' '}
          <Typography noWrap>
            {error instanceof UnsupportedChainIdError ? 'Network Error' : 'Error'}
          </Typography>
        </Box>
      </GradientButton>
      // </div>
    );
  } else {
    return (
      <GradientButton onClick={toggleWalletModal} fullWidth>
        Connect to a Wallet
      </GradientButton>
    );
  }
}
