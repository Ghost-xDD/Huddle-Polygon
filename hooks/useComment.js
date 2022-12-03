import wagmi from 'wagmi';
import { useProvider, useSigner } from 'wagmi';
import { BigNumber } from 'ethers';
import CommentsAbi from '../constants/huddleCommentsABI.json';
import { config } from '../constants';

const useComment = () => {
  const [signer] = useSigner();
  const provider = useProvider();

  const contract = wagmi.useContract({
    addressOrName: config.huddleCommentsAddress,
    contractInterface: CommentsAbi, //revisit
    signerOrProvider: signer.data || provider,
  });

  const getComments = async (slug) => {
    
  }

  return <div>useComment</div>;
};

export default useComment;
