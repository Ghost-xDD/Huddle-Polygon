import { useAccount } from 'wagmi';
import TipsTransferContent from './TipsTransferContent';
import { RiseLoader } from 'react-spinners';

const TipsTransfer = ({ tips, isLoading }) => {
  const { address, isConnected } = useAccount();

  const transferredTips = tips.filter((tip) => address === tip.senderAddress);
  console.log(transferredTips);

  return (
    <>
      {tips && (
        <div className="w-full h-full mx-auto rounded-2xl mt-2 shadow-lg rex2 border border-gray-800">
          <header className="px-5 py-4 border-b border-gray-500">
            <h2 className="font-semibold text-xl text-black">
              Total Tips Transferred
            </h2>
          </header>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-3xl">
              <thead className="text-xs text-white uppercase bg-red-800 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Your Address :
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Receiver Address :
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Receiver Name :
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Tip Amount :
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Timestamp :
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Status :
                  </th>
                </tr>
              </thead>
              {isLoading && (
                <div className="text-black text-center flex w-full items-center py-10">
                  <h1 className="mb-6 text-xl">
                    Loading Your Transferred Tips
                  </h1>
                  <RiseLoader size={20} color="#CD1021" />{' '}
                </div>
              )}
              {!isLoading &&
                transferredTips.map((data, index) => (
                  <TipsTransferContent
                    key={index}
                    senderAddress={data.senderAddress}
                    receiverAddress={data.receiverAddress}
                    receiverName={data.receiverName}
                    amount={data.amount}
                    timestamp={data.timestamp}
                  />
                ))}

              <div className={!transferredTips ? 'hidden' : 'block'}>
                <h1>You currently have no transfered Tips</h1>
              </div>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default TipsTransfer;
