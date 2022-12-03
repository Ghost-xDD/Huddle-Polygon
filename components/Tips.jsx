import React from 'react';
import TipsTransfer from './TipsTransfer';
import TipsReceiver from './TipsReceiver';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { config } from '../constants';
import { useAccount } from 'wagmi';
import huddleTipsAbi from '../constants/huddleTips.json';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Tips = () => {
  const [openTab, setOpenTab] = useState(1);
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(false);

  const { address, isConnected } = useAccount();

  const getAllTips = async () => {
    try {
      setLoading(true);
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const tipContract = new ethers.Contract(
          config.huddleTipsAddress,
          huddleTipsAbi,
          signer
        );

        const allTips = await tipContract.getAllTransactions();

        const formatAllTips = allTips.map((transfers) => ({
          receiverAddress: transfers.receiver,
          senderAddress: transfers.sender,
          timestamp: new Date(
            transfers.timestamp.toNumber() * 1000
          ).toLocaleString(),
          senderName: transfers.sender_name,
          receiverName: transfers.receiver_name,
          amount: parseInt(transfers.amount._hex) / 10 ** 18,
        }));

        setTips(formatAllTips);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTips();
  }, []);

  return (
    <div>
      <div className=" mx-auto mt-4">
        <div className="flex flex-col items-center justify-center">
          <ul className="flex space-x-2 bg-white rounded-xl">
            <li>
              <a
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1
                    ? 'bg-gradient-to-r from-red-400 to-slate-500 text-white'
                    : ''
                } inline-block px-4 py-2 text-black font-bold rounded-xl shadow cursor-pointer`}
              >
                Tips Transferred
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2
                    ? 'bg-gradient-to-r from-red-400 to-slate-500 text-white'
                    : ''
                } inline-block px-4 py-2 text-black font-bold rounded-xl shadow cursor-pointer`}
              >
                Tips Received
              </a>
            </li>
          </ul>
          {isConnected && (
            <div className="w-full mt-6">
              <div className={openTab === 1 ? 'block' : 'hidden'}>
                <TipsTransfer tips={tips} isLoading={loading} />
              </div>
              <div className={openTab === 2 ? 'block' : 'hidden'}>
                <TipsReceiver tips={tips} isLoading={loading} />
              </div>
            </div>
          )}
          {!isConnected && (
            <section
              div
              className="max-w-7xl mt-4 flex gap-20 h-full py-4  mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div>
                <h1 className="text-center w-full mt-10 text-2xl font-bold text-black">
                  Please Connect Wallet To View Tips
                </h1>
                <p>
                  <ConnectButton />
                </p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tips;
