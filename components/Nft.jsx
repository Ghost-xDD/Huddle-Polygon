import { useState, useEffect } from 'react';
import { config } from '../constants';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import NftCard from './NftCard';
import NftSkeleton from './skeletons/NftSkeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Nft = () => {
  const { address, isConnected } = useAccount();

  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNFTs = async () => {
    setLoading(true);
    let nfts;
    const api_key = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
    const baseUrl = `https://polygon-mumbai.g.alchemy.com/v2/${api_key}/getNFTs`;

    var requestOptions = {
      method: 'GET',
    };

    const fetchURL = `${baseUrl}?owner=${address}`;

    nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    setNfts(nfts.ownedNfts);
    setLoading(false);
  };

  useEffect(() => {
    fetchNFTs();
  }, [address, isConnected]);

  const nftContract = nfts.filter(function (data) {
    return (
      data.contract.address === config.huddleAddress &&
      data.media[0].gateway &&
      data.title
    );
  });

  console.log(nftContract);

  // console.log(nfts);

  return (
    <>
      <h1 className="text-2xl font-bold bg-red-800 w-[200px] rounded-md text-center text-white leading-9 ml-20 py-2 mb-4">
        My NFTs
      </h1>
      {isConnected && (
        <div className="mx-[40px] gap-2 columns-2 md:gap-8 sm:columns-4">
          {loading && <NftSkeleton cards={10} />}
          {!loading &&
            nfts?.map((data, index) => (
              <NftCard
                key={index}
                image={data.media[0].gateway}
                title={data.title}
                tokenId={data.id.tokenId}
                contractAddress={data.contract.address}
              />
            ))}
          {nfts === [] ? 'You currently have zero nfts' : 'Doing good partner'}
        </div>
      )}
      {!isConnected && (
        <section
          div
          className="max-w-7xl mt-4 flex gap-20 h-full py-4  mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div>
            <h1 className="text-center w-full mt-10 text-2xl font-bold text-black">
              Please Connect Wallet To View NFTs
            </h1>
            <p>
              <ConnectButton />
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Nft;
