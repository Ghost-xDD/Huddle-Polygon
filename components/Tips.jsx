import React from 'react';
import TipsContent from './TipsContent';

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
];

const Tips = () => {
  return (
    <div class="">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-red-800 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Your Address :
            </th>
            <th scope="col" class="py-3 px-6">
              Receiver Address :
            </th>
            <th scope="col" class="py-3 px-6">
              Tip Amount :
            </th>
            <th scope="col" class="py-3 px-6">
              Timestamp :
            </th>
            <th scope="col" class="py-3 px-6">
              Status :
            </th>
          </tr>
        </thead>
        {dummyTransactions.map((data, index) => (
          <TipsContent
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
  );
};

export default Tips;
