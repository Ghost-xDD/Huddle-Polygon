import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { config } from '../constants';
import { useAccount } from 'wagmi';
import huddleTipsAbi from '../constants/huddleTips.json';
import TipsTransferContent from './TipsTransferContent';

// const dummyTransactions = [
//   {
//     senderAddress: '0x9848839498885hi4494jj49',
//     receiverAddress: '0x789042084829h4489393p0',
//     amount: 3,
//     timestamp: '20th October, 2021',
//     status: 'Transfered',
//   },
//   {
//     senderAddress: '0x9848839498885hi4494jj49',
//     receiverAddress: '0x789042084829h4489393p0',
//     amount: 1,
//     timestamp: '10th Mar, 2021',
//     status: 'Transfered',
//   },
//   {
//     senderAddress: '0x9848839498885hi4494jj49',
//     receiverAddress: '0x4958893098858590988js',
//     amount: 2,
//     timestamp: '14th Apr, 2021',
//     status: 'Transfered',
//   },
//   {
//     senderAddress: '0x9848839498885hi4494jj49',
//     receiverAddress: '0x23848949498737499948',
//     amount: 2,
//     timestamp: '20th Dec, 2021',
//     status: 'Transfered',
//   },
//   {
//     senderAddress: '0x9848839498885hi4494jj49',
//     receiverAddress: '0x23848949498737499948',
//     amount: 2,
//     timestamp: '20th Dec, 2021',
//     status: 'Transfered',
//   },
//   {
//     senderAddress: '0x9848839498885hi4494jj49',
//     receiverAddress: '0x23848949498737499948',
//     amount: 2,
//     timestamp: '20th Dec, 2021',
//     status: 'Transfered',
//   },
// ];

const TipsTransfer = () => {
  const [tips, setTips] = useState([]);
  const [tipsTransferred, setTipsTransferred] = useState();

  const { address } = useAccount();

  const getAllTips = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const tipContract = new ethers.Contract(
          config.huddleTipsAddress,
          huddleTipsAbi,
          signer
        );

        const allTips = await tipContract.getAllTransactions();

        const formatAllTips = allTips.map((transfers) => ({
          receiverAddress: transfers.receiver,
          senderAddress: transfers.sender,
          timestamp: new Date(
            transfers.timestamp.toNumber() * 1000
          ).toLocaleString(),
          senderName: transfers.sender_name,
          receiverName: transfers.receiver_name,
          amount: parseInt(transfers.amount._hex) / 10 ** 18,
        }));

        // console.log(formatTransferredTips);

        setTips(formatAllTips);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTips();
  }, []);

  const transferredTips = tips.filter((tip) => address === tip.senderAddress);
  console.log(transferredTips);

  return (
    <div className="w-full h-full mx-auto rounded-2xl mt-2 shadow-lg rex2 border border-gray-800">
      <header className="px-5 py-4 border-b border-gray-500">
        <h2 className="font-semibold text-xl text-black">Tip Transactions</h2>
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
          {transferredTips.map((data, index) => (
            <TipsTransferContent
              key={index}
              senderAddress={data.senderAddress}
              receiverAddress={data.receiverAddress}
              receiverName={data.receiverName}
              amount={data.amount}
              timestamp={data.timestamp}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default TipsTransfer;
