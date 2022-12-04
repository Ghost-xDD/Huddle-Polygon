import Head from 'next/head';
import { useAccount } from 'wagmi';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { BsThreeDots, BsInfoCircle, BsShare } from 'react-icons/bs';
import { FiUpload } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import CommentCard from '../../components/CommentCard';
import MintedModal from '../../components/MintedModal';
import formatAddress from '../../utils/formatAddress';
import getQuote from '../../utils/getQuote';
import { ethers } from 'ethers';
import { config } from '../../constants';
import huddleABI from '../../constants/huddleABI.json';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Comments from '../../components/Comments';

const TipModal = dynamic(
  () => {
    return import('../../components/TipModal');
  },
  { ssr: false }
);

const Details = () => {
  const { address, isConnected } = useAccount();
  const [postTitle, setPostTitle] = useState('');
  const [image, setImage] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [tipAddress, setTipAddress] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [openMintModal, setOpenMintModal] = useState(false);
  const [nftHash, setNftHash] = useState('');

  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  // Get url id
  const { id } = router.query;

  const firstID = { id };

  // Extract URL ID value
  const postId = Object.values(firstID)[0];
  const tokenUri = 'ipfs://' + postId + '/metadata.json';
  // console.log(tokenUri);

  const notify = (e) => {
    e.preventDefault();

    toast.error('Nice Try!! Please connect a Compatible Web3 Wallet', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  //   console.log(e.target.value);
  // };

  const handleOnClose = () => setShowModal(false);

  const handleMintOnClose = () => setOpenMintModal(false);

  useEffect(() => {
    setMounted(true);

    if (postId) {
      getMetadata();
      getImage();
      // getQuote();
    }
  }, [postId]);

  const quote = getQuote();

  const getImage = (ipfsURL) => {
    if (!ipfsURL) return;
    ipfsURL = ipfsURL.split('://');
    return 'https://nftstorage.link/ipfs/' + ipfsURL[1];
  };

  const getMetadata = async () => {
    let data = await fetch(
      `https://nftstorage.link/ipfs/${postId}/metadata.json`
    );
    // console.log(data);
    data = await data.json();
    console.log(data);
    // const [authorName] = data.description;
    const imageFormated = getImage(data.image);
    setImage(imageFormated);
    setPostTitle(data.name);

    // format authorName
    const separate = data.description.split(',');
    setAuthorName(separate[0]);
    const authorAddress = separate[1].replace(/\s+/g, '').trim();
    console.log(authorAddress);
    setTipAddress(authorAddress);
  };

  const mintNFT = async (e) => {
    e.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const nftContract = new ethers.Contract(
      config.huddleAddress,
      huddleABI,
      signer
    );

    const mintNotification = toast.loading('Please wait! Minting your NFT');

    const mint = await nftContract.mintNFT(address, tokenUri, {
      maxFeePerGas: '30000000000',
      maxPriorityFeePerGas: '30000000000',
    });
    const receipt = await mint.wait();
    console.log(receipt);

    toast.update(mintNotification, {
      render: 'Mint Completed Successfully',
      type: 'success',
      isLoading: false,
      autoClose: 7000,
    });

    const txHash = await receipt.transactionHash;
    console.log(txHash);
    setNftHash(txHash);
    setOpenMintModal(true);
  };

  return (
    mounted && (
      <div className="max-w-7xl  mt-4  h-full mx-auto  sm: lg:">
        <Head>
          <title>Image Details | Huddle</title>
          <meta name="description" content="Image Details" />
        </Head>

        <div className="block md:flex gap-14 mt-2 md:mt-10">
          <div>
            <img
              src={image}
              alt="image-detail"
              className="w-[480px] h-[200px] md:w-[650px] md:h-[70vh] rex rounded-[20px]"
            />
          </div>

          {/* comments side */}

          <div className="flex flex-col rex2 px-6 py-0 md:px-6 md:py-4 mt-6 md:mt-0">
            <h1 className="text-3xl tracking-widest italic font-bold pt-4 py-2 px-2">
              {postTitle}
              <span role="img" aria-label="sheep">
                🤖
              </span>
            </h1>
            {/* comments header */}
            <div className="mt-1 py-2 md:py-0 flex justify-between ">
              <div className="flex gap-6 text-2xl cursor-pointer">
                <BsThreeDots className="hover:text-red-900 font-bold" />
                <FiUpload className="hover:text-red-900 font-bold" />
                <BsShare className="hover:text-red-900 font-bold" />
              </div>

              <div className="ml-2 sm:hidden" />

              <div className="mr-0 sm:mr-40" />

              <div className="flex items-center">
                <h3 className="flex items-center font-bold cursor-pointer pb-2">
                  Trending
                  <span className="text-3xl">
                    <RiArrowDropDownLine />
                  </span>
                </h3>

                {isConnected && (
                  <button
                    className="text-white bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-4 py-2 hover:opacity-70 transition-all duration-500 animate-bounce hover:animate-none"
                    onClick={mintNFT}
                  >
                    Mint
                  </button>
                )}
                {!isConnected && (
                  <button
                    type="submit"
                    className="text-white bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-4 py-2 hover:opacity-70 transition-all duration-500 animate-bounce hover:animate-none"
                    onClick={notify}
                  >
                    Mint
                  </button>
                )}
                <ToastContainer autoClose={6000} />
              </div>
            </div>

            <div className="mt-1 text-xl">
              <h1>
                Uploaded by <span className="font-bold">{authorName}</span>
              </h1>
            </div>

            <MintedModal
              txHash={nftHash}
              openMintModal={openMintModal}
              handleOnClose={handleMintOnClose}
            />

            <div className="mt-2">
              <p className="italic text-gray-500 w-full md:w-[500px]">
                {quote}
              </p>
            </div>

            <div className="py-4">
              <p className="text-gray-600 font-bold">
                Author Address:{' '}
                <span className="text-md border rounded-md border-gray-300 w-[55%] px-4 bg-gray-200 text-gray-500">
                  {formatAddress(tipAddress)}...
                </span>
              </p>
            </div>

            <motion.button
              className=" transition-all duration-500 hover:opacity-80  right-0 mt-2 text-white bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm ml-2  py-2"
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowModal(true)}
            >
              Send a Tip
            </motion.button>
            <TipModal
              onClose={handleOnClose}
              visible={showModal}
              authorName={authorName}
              tipAddress={tipAddress}
            />
            <Comments slug={postId} />
          </div>
        </div>
      </div>
    )
  );
};

export default Details;
