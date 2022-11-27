import React from 'react';

const user = 'James';

const TipsReceiverContent = ({
  senderAddress,
  receiverAddress,
  amount,
  timestamp,
  status,
}) => {
  return (
    <>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 border-gray-700 shadow-[100px] rex2">
          <th
            scope="row"
            className="py-4 my-[20px] px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer "
          >
            <p>{user}</p>
          </th>
          <td className="py-4 px-6 cursor-pointer">{senderAddress}</td>
          <td className="py-4 px-6 cursor-pointer">{receiverAddress}</td>
          <td className="py-4 px-6 cursor-pointer">{amount} MATIC</td>
          <td className="py-4 px-6 cursor-pointer">{timestamp}</td>

          <td>
            <span className="bg-amber-700 hover:opacity-60 py-2 px-2 rounded-full text-white font-bold cursor-pointer">
              {status}
            </span>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TipsReceiverContent;
