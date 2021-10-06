import { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { AppContext } from 'contexts';
import { useWeb3React } from '@web3-react/core';
import AppWrapper from 'hoc/AppWrapper';
import { theme, lightTheme } from 'styles/theme';

import '../styles/globals.css';

const getLibrary = provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

function MyApp({ Component, pageProps }) {
  const [themeType, themeChange] = useState('dark');
  const [isWalletModalOpened, setIsWalletModalOpened] = useState(false);

  const context = useWeb3React();

  return (
    <ThemeProvider theme={themeType === 'dark' ? theme : lightTheme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AppContext.Provider
          value={{
            themeType,
            themeChange,
            isWalletModalOpened,
            setIsWalletModalOpened,
          }}>
          <CssBaseline />
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </AppContext.Provider>
      </Web3ReactProvider>
    </ThemeProvider>
  );
}

export default MyApp;
