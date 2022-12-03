import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { config } from '../constants';
import { useAccount } from 'wagmi';
import huddleABI from '../constants/huddleABI.json';
import { motion } from 'framer-motion';
import TransferNftModal from '../components/TransferNftModal';

const formatAddresses = (address) => {
  let addressFormatted;
  if (address) {
    addressFormatted = `${address.slice(0, 5)}...${address.slice(
      address.length - 4
    )}`;
  }
  return addressFormatted;
};

const NftCard = ({ image, title, tokenId, contractAddress }) => {
  const [showModal, setShowModal] = useState(false);

  const formattedToken = formatAddresses(tokenId);

  // const huddleContract = config.huddleAddress;

  const handleOnClose = () => setShowModal(false);

  return (
    <div
      className={`w-full h-full cursor-pointer relative overflow-hidden rex2 p-1 flex flex-col items-center mb-10`}
    >
      <img
        src={image}
        alt=""
        className="w-[250px] h-[300px] object-cover rounded-[30px] transition-all duration-500 hover:opacity-90 pt-2"
      />

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="mt-1 text-md text-center font-bold text-gray-700 w-full">
            {title}
          </h3>
          <div className="flex items-center justify-between mt-1">
            <div className="flex flex-col">
              <p className="bg-slate-600 text-sm p-1 rounded-md cursor-text font-bold">
                Token ID: {formatAddresses(tokenId)}
              </p>
              <p className="bg-gray-400 text-sm p-1 rounded-md font-bold mt-1">
                Contract Address: {formatAddresses(contractAddress)}
              </p>
              <motion.button
                className=" transition-all duration-500 hover:opacity-80  right-0 mt-2 text-white bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm ml-2  py-2 "
                onClick={() => setShowModal(true)}
              >
                Transfer NFT
              </motion.button>
              <TransferNftModal
                onClose={handleOnClose}
                visible={showModal}
                tokenId={tokenId}
                formattedToken={formattedToken}
              />
            </div>

            {/* <h6 className="text-md">Charles</h6> */}
            {/* <button className=" transition-all duration-500 hover:opacity-80 mr-4 right-0 mt-2 text-white bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-4 py-2 ">
              Transfer NFT
            </button> */}
          </div>
          <div className="p-3" />
        </div>
      </div>
    </div>
  );
};

export default NftCard;
