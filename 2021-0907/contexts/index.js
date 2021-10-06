import { createContext } from 'react';
const AppContext = createContext({
  isWalletModalOpened: false,
  setIsWalletModalOpened: () => {},
});

export { AppContext };
