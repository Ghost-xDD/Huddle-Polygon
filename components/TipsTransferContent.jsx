import React from 'react';
import { BiUser } from 'react-icons/bi';

const status = 'Transferred';

const formatTableAddress = (address) => {
  let addressFormatted;
  if (address) {
    addressFormatted = address.slice(0, -19);
  }
  return addressFormatted;
};

const TipsTransferContent = ({
  senderAddress,
  receiverAddress,
  receiverName,
  amount,
  timestamp,
}) => {
  return (
    <>
      {senderAddress && (
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 border-gray-700 shadow-[100px] rex2">
            <th
              scope="row"
              className="py-4 my-[20px] px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer "
            >
              {formatTableAddress(senderAddress)}...
            </th>
            <td className="py-4 px-6 cursor-pointer">
              <span>{formatTableAddress(receiverAddress)}...</span>
            </td>
            <td className="py-4 px-6 cursor-pointer">{receiverName}</td>
            <td className="py-4 px-6 cursor-pointer">{amount} MATIC</td>
            <td className="py-4 px-6 cursor-pointer">{timestamp}</td>

            <td>
              <span className="bg-green-500 hover:opacity-60 py-2 px-2 rounded-full text-white font-bold cursor-pointer">
                {status}
              </span>
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
};

export default TipsTransferContent;
