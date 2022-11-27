import React from 'react';
import NftCard from './NftCard';

const dummyNFTs = [
  {
    tokenId: '0023',
    image:
      'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
    description: 'Charles Rabbit, 0x98874893937748493ji',
  },
  {
    tokenId: '0020',
    image:
      'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
    description: 'Johnny Stone, 0x323874893937748493ji',
  },
  {
    tokenId: '0021',
    image:
      'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'Johnny Stone, 0x87674893937748493ji',
  },
  {
    tokenId: '0021',
    image:
      'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'Charles Rabbit, 0x87674893937748493ji',
  },
  {
    tokenId: '0021',
    image:
      'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'Charles Rabbit, 0x87674893937748493ji',
  },
  {
    tokenId: '0021',
    image:
      'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'Charles Rabbit, 0x87674893937748493ji',
  },
  {
    tokenId: '0021',
    image:
      'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'Charles Rabbit, 0x87674893937748493ji',
  },
];

console.log(dummyNFTs);

const Nft = () => {
  return (
    <>
      <h1 className="text-3xl text-black">My NFTs</h1>
      <div className="mx-[40px] gap-2 columns-2 md:gap-8 sm:columns-4">
        {dummyNFTs.map((data) => (
          <NftCard
            key={data.tokenId}
            image={data.image}
            title={data.description}
            tokenId={data.tokenId}
          />
        ))}
      </div>
    </>
  );
};

export default Nft;
