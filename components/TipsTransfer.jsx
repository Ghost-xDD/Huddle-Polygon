import React from 'react';
import TipsTransferContent from './TipsTransferContent';

const dummyTransactions = [
  {
    senderAddress: '0x9848839498885hi4494jj49',
    receiverAddress: '0x789042084829h4489393p0',
    amount: 3,
    timestamp: '20th October, 2021',
    status: 'Transfered',
  },
  {
    senderAddress: '0x9848839498885hi4494jj49',
    receiverAddress: '0x789042084829h4489393p0',
    amount: 1,
    timestamp: '10th Mar, 2021',
    status: 'Transfered',
  },
  {
    senderAddress: '0x9848839498885hi4494jj49',
    receiverAddress: '0x4958893098858590988js',
    amount: 2,
    timestamp: '14th Apr, 2021',
    status: 'Transfered',
  },
  {
    senderAddress: '0x9848839498885hi4494jj49',
    receiverAddress: '0x23848949498737499948',
    amount: 2,
    timestamp: '20th Dec, 2021',
    status: 'Transfered',
  },
  {
    senderAddress: '0x9848839498885hi4494jj49',
    receiverAddress: '0x23848949498737499948',
    amount: 2,
    timestamp: '20th Dec, 2021',
    status: 'Transfered',
  },
  {
    senderAddress: '0x9848839498885hi4494jj49',
    receiverAddress: '0x23848949498737499948',
    amount: 2,
    timestamp: '20th Dec, 2021',
    status: 'Transfered',
  },
];

const TipsTransfer = () => {
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
          {dummyTransactions.map((data, index) => (
            <TipsTransferContent
              key={index}
              senderAddress={data.senderAddress}
              receiverAddress={data.receiverAddress}
              amount={data.amount}
              timestamp={data.timestamp}
              status={data.status}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default TipsTransfer;
