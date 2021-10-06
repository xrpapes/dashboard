import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import Head from 'next/head';

import InputPanel from 'parts/InputPanel';
import DisplayPanel from 'parts/DisplayPanel';

import {
  isAddress,
  getNetworkId,
  getBalance,
  getDividendTokenBalanceOf,
  // checkIsExcludedFromFees,
  getWithdrawableDividendOf,
  getTotalDividendsDistributed,
  getAccountDividendsInfo,
} from 'utils/web3';

export default function Home() {
  const [address, setAddress] = useState('');
  const [state, setState] = useState({});
  const [showInvalidAddress, setShowInvalidAddres] = useState(false);
  const [totalDividendsDistributed, setTotalDividendsDistributed] = useState(0);
  const { account } = useWeb3React();

  const initialize = async () => {
    try {
      const totalDividendsDistributed = await getTotalDividendsDistributed();
      setTotalDividendsDistributed(totalDividendsDistributed);
    } catch (error) {
      console.error(error);
    }
  };

  const init = async () => {
    try {
      const balance = await getBalance(address);
      const dividendTokenBalanceOf = await getDividendTokenBalanceOf(address);
      // const isExcludedFromFees = await checkIsExcludedFromFees(address);
      const withdrawableDividendOf = await getWithdrawableDividendOf(address);

      const accountDividendsInfo = await getAccountDividendsInfo(address);

      setState(prev => ({
        ...prev,
        balance,
        dividendTokenBalanceOf,
        // isExcludedFromFees,
        withdrawableDividendOf,
        accountDividendsInfo,
      }));
    } catch (err) {
      console.log('err =>', err);
    }
  };

  useEffect(() => {
    const isValid = isAddress(address);
    if (isValid) {
      init();
    } else {
      setState({});
    }

    if (address?.length == 42 && !isValid) {
      setShowInvalidAddres(true);
    } else {
      setShowInvalidAddres(false);
    }
  }, [address]);

  useEffect(() => {
    if (account) {
      setAddress(account);
    }
  }, [account]);

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div>
      <Head>
        <title>XRP APES Dashboard</title>
        <meta name='description' content='XRP APES Dashboard' />
        <link rel='icon' href='/img/logo-300x300.png' />
      </Head>
      <main>
        <InputPanel
          totalDividendsDistributed={totalDividendsDistributed}
          address={address}
          setAddress={setAddress}
          isValidAddress={showInvalidAddress}
        />
        <DisplayPanel state={state} callback={init} />
      </main>
    </div>
  );
}
