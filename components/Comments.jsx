import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { config } from '../constants';
import { useAccount } from 'wagmi';
import { BsInfoCircle } from 'react-icons/bs';
import huddleCommentsAbi from '../constants/huddleCommentsABI.json';
import { RiseLoader } from 'react-spinners';
import CommentCard from './CommentCard';

const Comments = ({ slug }) => {
  const [message, setMessage] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(slug);

  const getComments = async () => {
    setLoading(true);

    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_POLYGON_MUMBAI_ENDPOINT
    );

    const commentsContract = new ethers.Contract(
      config.huddleCommentsAddress,
      huddleCommentsAbi,
      provider
    );

    const retrieveComments = await commentsContract.getComments(slug);
    // convert to object
    const formatComments = retrieveComments.map((comment) => ({
      ...comment,
    }));

    console.log(formatComments);
    setCommentList(formatComments);
    setLoading(false);
  };

  const addComments = async (e) => {
    e.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const commentsContract = new ethers.Contract(
      config.huddleCommentsAddress,
      huddleCommentsAbi,
      signer
    );

    const sendComment = await commentsContract.addComment(slug, message, {
      maxFeePerGas: '30000000000',
      maxPriorityFeePerGas: '30000000000',
    });
    const tx = await sendComment.wait();
    console.log(tx);
    setMessage('');
    window.location.reload;
  };

  useEffect(() => {
    if (slug) {
      getComments();
    }
  }, [slug]);

  return (
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
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
                disabled={!message}
                onClick={addComments}
              />
            </div>
          </div>
        </div>
      </form>
      {loading && (
        <div className="text-black text-center flex w-full items-center py-10">
          <h1 className="mb-6 text-xl">Loading Your Transferred Tips</h1>
          <RiseLoader size={20} color="#CD1021" />{' '}
        </div>
      )}
      {!loading &&
        commentList.map((comment) => (
          <CommentCard
            key={comment.id}
            message={comment.message}
            sender={comment.creator_address}
            timestamp={comment.created_at}
          />
        ))}
    </div>
  );
};

export default Comments;
