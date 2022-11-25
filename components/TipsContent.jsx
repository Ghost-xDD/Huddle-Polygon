import React from 'react';
import { BiUser } from 'react-icons/bi';

const TipsContent = ({
  senderAddress,
  receiverAddress,
  amount,
  timestamp,
  status,
}) => {
  return (
    <>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="py-4 my-[20px] px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {senderAddress}
          </th>
          <td className="py-4 px-6">{receiverAddress}</td>
          <td className="py-4 px-6">{amount} MATIC</td>
          <td className="py-4 px-6">{timestamp}</td>

          <td>
            <span className="bg-green-500 py-2 px-2 rounded-full text-white font-bold cursor-pointer">
              {status}
            </span>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TipsContent;
