import React from 'react';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { config } from '../constants';
import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { AiOutlineWarning } from 'react-icons/ai';
import { HashLoader } from 'react-spinners';

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

const TransferNftModal = ({ visible, onClose, tokenId, formattedToken }) => {
  const [recipientAddress, setRecipientAddress] = useState('');

  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
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
        <div className="bg-white z-50 p-10 rounded-lg w-full mx-[380px] py-24">
          <div className="text-red-600 text-center w-full flex items-center text-4xl ml-[250px]">
            <AiOutlineWarning />
          </div>
          <h1
            className="font-semibold text-center text-xl text-gray-700
                "
          >
            You're about to transfer ownership of this NFT to a different
            address{' '}
          </h1>

          <form className="flex flex-col" noValidate autoComplete="off">
            <label
              htmlFor="tokenId"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Token Id:
            </label>
            <span className="bg-gray-400 text-white py-[8px] rounded-md">
              <span className="ml-6">{formattedToken}</span>
            </span>

            <label
              htmlFor="recipient"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Recipient Address
            </label>
            <input
              type="text"
              className="border text-sm border-gray-700 p-2 rounded mb-5"
              placeholder="Please input recipient address"
              required
              defaultValue={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
            />
            <div className="text-center">
              <button disabled className="px-5 py-2 bg-red-700 opacity:80 text-white rounded">
                Transfer
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default TransferNftModal;
