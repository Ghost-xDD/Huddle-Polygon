import React from 'react';
import { useState } from 'react';
import { useAccount } from 'wagmi';

const TipModal = ({ visible, onClose, authorName }) => {
  const { isConnected, address } = useAccount();

  const senderAddress = address;
  // console.log(senderAddress);

  const [receiverAddress, setReceiverAddress] = useState('');
  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [amount, setAmount] = useState('');

  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
  };

  return (
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      onClick={handleOnClose}
    >
      <div className="bg-white p-10 rounded-lg w-full mx-[380px] py-24">
        <h1 className="font-semibold text-center text-xl text-gray-700">
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
          />
        </form>
        <div className="text-center">
          <button className="px-5 py-2 bg-red-700 text-white rounded">
            Send Tip
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipModal;
