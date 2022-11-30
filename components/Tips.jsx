import React from 'react';
import TipsTransfer from './TipsTransfer';
import TipsReceiver from './TipsReceiver';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { config } from '../constants';
import { useAccount } from 'wagmi';
import huddleTipsAbi from '../constants/huddleTips.json';

const Tips = () => {
  const [openTab, setOpenTab] = useState(1);

  const [tips, setTips] = useState([]);

  const { address } = useAccount();

  const getAllTips = async () => {
    try {
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

        // console.log(formatTransferredTips);

        setTips(formatAllTips);
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
          <div className="w-full mt-6">
            <div className={openTab === 1 ? 'block' : 'hidden'}>
              <TipsTransfer tips={tips} />
            </div>
            <div className={openTab === 2 ? 'block' : 'hidden'}>
              <TipsReceiver tips={tips} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
