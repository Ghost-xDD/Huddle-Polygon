import { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { config } from '../constants';
import huddleTipsAbi from '../constants/huddleTips.json';

export const TipContext = createContext();

useEffect(() => {
  if (!window.ethereum) return;
}, []);

const connectContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const tipsContract = new ethers.Contract(
    config.huddleTipsAddress,
    huddleTipsAbi,
    signer
  );
  return tipsContract;
};

export const TipsContextProvider = ({ children }) => {
  return <div>TipsContext</div>;
};

export default TipsContext;
