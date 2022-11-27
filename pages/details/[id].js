import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BsThreeDots, BsInfoCircle, BsShare } from 'react-icons/bs';
import { FiUpload } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import CommentCard from '../../components/CommentCard';
import getQuote from '../../utils/getQuote';

const Details = () => {
  const [input, setInput] = useState('');
  const [comment, setComment] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [image, setImage] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [codeHash, setCodeHash] = useState('');

  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  // Get url id
  const { id } = router.query;
  const firstID = { id };

  // Extract URL ID value
  const imageID = Object.values(firstID)[0];
  // console.log(imageID);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment(input);
    setInput('');
  };

  useEffect(() => {
    setMounted(true);

    if (imageID) {
      getMetadata();
      getImage();
      // getQuote();
    }
  }, [imageID]);

  const quote = getQuote();

  const getImage = (ipfsURL) => {
    if (!ipfsURL) return;
    ipfsURL = ipfsURL.split('://');
    return 'https://ipfs.io/ipfs/' + ipfsURL[1];
  };

  const getMetadata = async () => {
    let data = await fetch(`https://ipfs.io/ipfs/${imageID}/metadata.json`);
    console.log(data);
    data = await data.json();
    console.log(data);
    // const [authorName] = data.description;
    const imageFormated = getImage(data.image);
    setImage(imageFormated);
    setPostTitle(data.name);

    // format authorName
    const separate = data.description.split(',');
    setAuthorName(separate[0]);
  };

  return (
    mounted && (
      <div className="max-w-7xl mt-4  h-full mx-auto  sm: lg:">
        <Head>
          <title>Image Details | Huddle</title>
          <meta name="description" content="Image Details" />
        </Head>

        <div className="flex gap-14 mt-10">
          <div>
            <img
              src={image}
              alt=""
              className="w-[650px] h-[70vh] rex rounded-[20px]"
            />
          </div>

          {/* comments side */}

          <div className="flex flex-col rex2 px-6 py-4">
            <h1 className="text-3xl tracking-widest italic font-bold py-4 ">
              {postTitle}
              <span role="img" aria-label="sheep">
                🤖
              </span>
            </h1>
            {/* comments header */}
            <div className="mt-1 flex justify-between">
              <div className="flex gap-6 text-2xl cursor-pointer">
                <BsThreeDots className="hover:text-red-900 font-bold" />
                <FiUpload className="hover:text-red-900 font-bold" />
                <BsShare className="hover:text-red-900 font-bold" />
              </div>

              <div className="mr-40" />

              <div className="flex items-center">
                <h3 className="flex items-center font-bold cursor-pointer pb-2">
                  Trending
                  <span className="text-3xl">
                    <RiArrowDropDownLine />
                  </span>
                </h3>

                <button className="text-white bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-4 py-2 hover:opacity-70 transition-all duration-500 animate-bounce hover:animate-none">
                  Mint
                </button>
              </div>
            </div>

            <div className="mt-1 text-xl">
              <h1>
                Uploaded by <span className="font-bold">{authorName}</span>
              </h1>
            </div>

            <div className="mt-2">
              <p className="italic text-gray-500 w-[500px]">{quote}</p>
            </div>

            {/* Comment Box */}
            <div className=" items-center justify-center mb-4 mt-4 max-w-lg">
              <form className="w-full max-w-xl bg-white rounded-lg  pt-2">
                <div className="flex flex-wrap -mx-3 mb-6">
                  {/* <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
                  Add a Comment
                </h2> */}
                  <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea
                      className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                      name="body"
                      placeholder="Add a Comment"
                      value={input}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="w-full md:w-full flex items-start  px-3">
                    <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                      <BsInfoCircle />
                      <p className="text-xs pl-1 md:text-sm pt-px">
                        Join the Conversation.
                      </p>
                    </div>
                    <div className="-mr-1">
                      <input
                        type="submit"
                        className="bg-red-700 text-white font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:opacity-90 cursor-pointer"
                        value="Post Comment"
                        onClick={handleSubmit}
                      />
                    </div>
                  </div>
                </div>
              </form>
              {/* CARD */}
              {/* <CommentCard account={account} comment={comments} /> */}
              {/* <CommentCard account={account} comment={comments} />
            <CommentCard account={account} comment={comments} /> */}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Details;
