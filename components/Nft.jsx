import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import NftCard from './NftCard';

const Nft = () => {
  const { address } = useAccount();

  const [nfts, setNfts] = useState([]);

  const fetchNFTs = async () => {
    let nfts;
    const api_key = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
    const baseUrl = `https://polygon-mumbai.g.alchemy.com/v2/${api_key}/getNFTs`;

    var requestOptions = {
      method: 'GET',
    };

    const fetchURL = `${baseUrl}?owner=${address}`;

    nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
    setNfts(nfts.ownedNfts);
  };

  useEffect(() => {
    fetchNFTs();
  }, [address]);

  return (
    <>
      <h1 className="text-2xl font-bold bg-red-800 w-[200px] rounded-md text-center text-white leading-9 ml-20 py-2 mb-4">
        My NFTs
      </h1>
      <div className="mx-[40px] gap-2 columns-2 md:gap-8 sm:columns-4">
        {nfts.map((data, index) => (
          <NftCard
            key={index}
            image={data.media[0].gateway}
            title={data.title}
            tokenId={data.id.tokenId}
            contractAddress={data.contract.address}
          />
        ))}
      </div>
    </>
  );
};

export default Nft;
