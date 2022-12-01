import { useState, useEffect } from 'react';
import Pin from './Pin';
import 'react-loading-skeleton/dist/skeleton.css';
import SkeletonCard from './SkeletonCard';

const Collage = () => {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKeys = process.env.NEXT_PUBLIC_NFTSTORAGE_TOKEN;

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        let cids = await fetch('https://api.nft.storage', {
          headers: {
            Authorization: `Bearer ${apiKeys}`,
            'Content-Type': 'application/json',
          },
        });
        cids = await cids.json();
        const temp = [];
        for (let cid of cids.value) {
          if (cid?.cid) {
            let data = await fetch(
              `https://nftstorage.link/ipfs/${cid.cid}/metadata.json`
            );
            data = await data.json();
            console.log(data);

            data.image = await getImage(data.image);
            data.cid = cid.cid;
            data.created = cid.created;
            temp.push(data);
          }
        }
        setImageData(temp);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    loadImages();
  }, []);

  const getImage = async (ipfsURL) => {
    if (!ipfsURL) return;
    ipfsURL = ipfsURL.split('://');
    return 'https://nftstorage.link/ipfs/' + ipfsURL[1];
  };

  return (
    <div className="gap-4 columns-2 md:gap-4 sm:columns-5">
      {loading && <SkeletonCard cards={10} />}
      {!loading &&
        imageData.map((data, index) => (
          <Pin
            key={index}
            imgSrc={data.image}
            title={data.name}
            authorName={data.description}
            cid={data.cid}
          />
        ))}
    </div>
  );
};

export default Collage;
