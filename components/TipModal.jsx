import React from 'react';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { config } from '../constants';
import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';
import huddleTipsAbi from '../constants/huddleTips.json';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { GridLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.8,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const TipModal = ({ visible, onClose, authorName, tipAddress }) => {
  const { isConnected, address } = useAccount();
  const [tipsCount, setTipsCount] = useState(
    localStorage.getItem('transactionCount')
  );
  const [senderName, setSenderName] = useState('');

  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [receipt, setReceipt] = useState(false);
  const [hash, setHash] = useState('');

  const senderAddress = address;
  const receiverAddress = tipAddress;
  const receiverName = authorName;

  const notify = (e) => {
    e.preventDefault();

    toast.error('Nice Try!! Please connect a Compatible Web3 Wallet', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    if (!window.ethereum) return;
  }, []);

  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
    setReceipt(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      senderAddress,
      receiverAddress,
      amount,
      senderName,
      receiverName
    );
  };

  const handleTipAuthor = async (e) => {
    try {
      if (window.ethereum) {
        e.preventDefault();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const tipContract = new ethers.Contract(
          config.huddleTipsAddress,
          huddleTipsAbi,
          signer
        );

        const parsedAmount = ethers.utils.parseEther(amount);

        // setIsLoading(true);

        await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: senderAddress,
              to: receiverAddress,
              maxFeePerGas: '1000000000',
              maxPriorityFeePerGas: '1000000000',
              value: parsedAmount._hex,
            },
          ],
        });

        setIsLoading(true);

        const transactionHash = await tipContract.addToBlockchain(
          receiverAddress,
          parsedAmount,
          senderName,
          receiverName,
          {
            maxFeePerGas: '30000000000',
            maxPriorityFeePerGas: '30000000000',
          }
        );

        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setHash(transactionHash.hash);

        const tipsCount = await tipContract.getTransactionCount();

        setTipsCount(tipsCount.toNumber());
        setIsLoading(false);
        setReceipt(true);
        setAmount('');
        setSenderName('');
        // window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <motion.div
        id="container"
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        onClick={handleOnClose}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="bg-white p-10 rounded-lg w-full mx-[380px] py-24">
          <div className={receipt === true ? 'hidden' : 'block'}>
            {isLoading && (
              <div className="w-full py-20 h-[100px] flex flex-col items-center justify-center">
                <h1 className="font-semibold text-center text-xl text-gray-700 mb-8">
                  Please Wait!{' '}
                  <span className="italic">Confirming your Transaction...</span>
                </h1>
                <GridLoader size={60} color="#CD1021" />
              </div>
            )}
            {!isLoading && (
              <>
                <h1
                  className="font-semibold text-center text-xl text-gray-700
                "
                >
                  Say thank you to {authorName}
                </h1>
                <p className="text-center text-2xl text-gray-700 mb-5">😊</p>

                <form className="flex flex-col" noValidate autoComplete="off">
                  <label
                    htmlFor="eventname"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Your Name:
                  </label>
                  <input
                    type="text"
                    className="border text-sm border-gray-700 p-2 rounded mb-5"
                    placeholder="Please input a name"
                    required
                    defaultValue={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                  />
                  <label
                    htmlFor="eventname"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Tip Amount:
                  </label>
                  <input
                    id="amount"
                    type="number"
                    min="0.001"
                    step="0.001"
                    className="border border-gray-700 p-2 rounded mb-5 text-sm"
                    placeholder="Amount in MATIC"
                    required
                    defaultValue={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </form>
                {!isConnected && (
                  <div className="text-center">
                    <button
                      className="px-5 py-2 bg-red-700 text-white rounded"
                      onClick={notify}
                    >
                      Send Tip
                    </button>
                  </div>
                )}
                {isConnected && (
                  <div className="text-center">
                    <button
                      className="px-5 py-2 bg-red-700 text-white rounded"
                      onClick={handleTipAuthor}
                    >
                      Send Tip
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          {/* Transaction success */}
          <div className={receipt === true ? 'block' : 'hidden'}>
            <h1 className="text-center text-lg mb-6">
              Yayyy! You just sent {authorName} a tip.
            </h1>
            <div className="flex items-center w-full justify-center text-[100px] text-green-500">
              <IoMdCheckmarkCircle />
            </div>
            <div className="text-center py-4">Transaction Receipt:</div>
            <div className='className="px-5 text-center rounded-2xl mx-[180px] py-2 bg-red-700 cursor-pointer text-white rounded"'>
              <a href={'https://mumbai.polygonscan.com/tx/' + hash}>
                View Receipt
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TipModal;
