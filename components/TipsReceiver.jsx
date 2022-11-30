import { useAccount } from 'wagmi';
import TipsReceiverContent from './TipsReceiverContent';

const TipsReceiver = ({ tips }) => {
  const { address } = useAccount();

  const receivedTips = tips.filter((tip) => address === tip.receiverAddress);
  console.log('Receiver', receivedTips);

  return (
    <div className="w-full h-full mx-auto rounded-2xl mt-2 shadow-lg rex2 border border-gray-800">
      <header className="px-5 py-4 border-b border-gray-500">
        <h2 className="font-semibold text-xl text-black">Total Tips Received:</h2>
      </header>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-3xl">
          <thead className="text-xs text-white uppercase bg-red-800 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Sender Name :
              </th>
              <th scope="col" className="py-3 px-6">
                Sender Address :
              </th>
              <th scope="col" className="py-3 px-6">
                Your Address :
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
          {receivedTips.map((data, index) => (
            <TipsReceiverContent
              key={index}
              senderAddress={data.senderAddress}
              receiverAddress={data.receiverAddress}
              amount={data.amount}
              timestamp={data.timestamp}
              senderName={data.senderName}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default TipsReceiver;