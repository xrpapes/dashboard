import Web3 from 'web3';
import { XRPAddress } from 'config/settings';
const abi = require('config/abi/xrp.json');

// web3 = new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org');
const web3 = new Web3('https://bsc-dataseed.binance.org');

const bep20Contract = new web3.eth.Contract(abi, XRPAddress);

export const getFormatedBalance = balance => {
  if (web3?.utils) {
    return (web3.utils.fromWei(balance || '0', 'ether') * 1).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 3,
    });
  }
  return (balance / 1e18).toFixed(2);
};

export const getNetworkId = async () => {
  const networkId = await web3.eth.net.getId();
  return networkId;
};

export const getBalance = async address => {
  if (!bep20Contract) {
    return undefined;
  }

  const balance = await bep20Contract.methods.balanceOf(address).call();
  return balance;
};

export const getWithdrawableDividendOf = async address => {
  if (!bep20Contract) {
    return undefined;
  }

  const balance = await bep20Contract.methods.withdrawableDividendOf(address).call();
  return balance;
};

export const checkIsExcludedFromFees = async address => {
  if (!bep20Contract) {
    return undefined;
  }

  const balance = await bep20Contract.methods.isExcludedFromFees(address).call();
  return balance;
};

export const getDividendTokenBalanceOf = async address => {
  if (!bep20Contract) {
    return undefined;
  }

  const balance = await bep20Contract.methods.dividendTokenBalanceOf(address).call();
  return balance;
};

export const getTotalDividendsDistributed = async () => {
  if (!bep20Contract) {
    return undefined;
  }

  const balance = await bep20Contract.methods.getTotalDividendsDistributed().call();
  return balance;
};

export const getAccountDividendsInfo = async address => {
  if (!bep20Contract) {
    return undefined;
  }

  const balance = await bep20Contract.methods.getAccountDividendsInfo(address).call();
  return balance;
};

export const claim = async address => {
  let web3 = null;
  try {
    if (typeof window !== 'undefined' && window?.ethereum !== undefined) {
      web3 = new Web3(window.ethereum);
    } else {
      web3 = new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org');
    }
    const bep20Contract = new web3.eth.Contract(abi, XRPAddress);
    const result = await bep20Contract.methods.claim();
    const res = await result.send({
      from: address,
    });

    console.log('res ==>', res);
  } catch (error) {
    console.log('[claim] error ==>', error);
  }
};

export const isAddress = address => {
  if (web3?.utils) {
    return web3.utils.isAddress(address);
  } else {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
      // check if it has the basic requirements of an address
      return false;
    } else if (
      /^(0x)?[0-9a-f]{40}$/.test(address.toLowerCase()) ||
      /^(0x)?[0-9A-F]{40}$/.test(address.toLowerCase())
    ) {
      // If it's all small caps or all all caps, return true
      return true;
    } else {
      // Otherwise check each case
      return isChecksumAddress(address);
    }
  }
};

const isChecksumAddress = function (address) {
  // Check each case
  address = address.replace('0x', '');
  var addressHash = sha3(address.toLowerCase());
  for (var i = 0; i < 40; i++) {
    // the nth letter should be uppercase if the nth digit of casemap is 1
    if (
      (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) ||
      (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])
    ) {
      return false;
    }
  }
  return true;
};
