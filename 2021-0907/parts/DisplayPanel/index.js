import { useState } from 'react';
import Card from 'components/UI/Card';
import Panel from 'components/UI/Panel';
import GradientButton from 'components/UI/Buttons/GradientButton';
import Box from '@material-ui/core/Box';
import { useWeb3React } from '@web3-react/core';
import Web3Status from 'components/Web3Status';
import { claim } from 'utils/web3';

export default function DisplayPanel({ state, callback }) {
  const { chainId, account } = useWeb3React();
  const [isLoading, setIsLoading] = useState(false);

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

  const claimHandler = async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      await claim(account);
      callback();
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Card>
      <h3>EARNINGS TRACKER</h3>
      <Panel>
        <span>XRP Apes Balance</span>
        <span> {(state?.balance ?? 0) / 1e18}</span>
      </Panel>
      <Panel>
        <span>Dividend Token Balance</span>
        <span>{(state.dividendTokenBalanceOf ?? 0) / 1e18}</span>
      </Panel>
      <Panel>
        <span>Total XRP Paid to Address</span>
        <span>{(state.accountDividendsInfo?.[4] ?? 0) / 1e18}</span>
      </Panel>

      <Panel>
        <span>Withdrawable Dividend</span>
        <span>{(state?.withdrawableDividendOf ?? 0) / 1e18}</span>
      </Panel>
      <Box mt={2} ml='auto' width={1} display='flex' justifyContent='flex-end'>
        {!account ? (
          <Web3Status />
        ) : chainId !== 56 ? (
          <GradientButton onClick={switchNetworkHandler}>Switch Network</GradientButton>
        ) : (
          <GradientButton onClick={claimHandler}>Claim</GradientButton>
        )}
      </Box>
    </Card>
  );
}
