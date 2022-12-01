import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import getAvatar from '../utils/getAvatars';

const Pin = ({ imgSrc, title, authorName, cid }) => {
  const separate = authorName.split(',');
  const setAuthor = separate[0];
  // console.log(separate);

  return (
    <div
      className={`w-full h-full cursor-pointer relative overflow-hidden hover:opacity-90`}
    >
      <Image
        src={imgSrc}
        alt="pin-images"
        className="w-full h-[400px] object-cover rounded-[30px] transition-all duration-500"
        width={500}
        height={400}
        blurDataURL="data"
      />

      <Link href="/details/[id]" as={`/details/${cid}`}>
        <button className="absolute transition-all duration-500 top-0 mr-4 right-0 mt-2 text-white bg-red-700  hover:text-lg focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-4 py-2 dark:opacity-80 dark:hover:bg-red-700 dark:focus:ring-red-800">
          View
        </button>
      </Link>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="mt-4 text-md font-bold text-gray-700 w-full">
            {title}
          </h3>
          <div className="flex items-center mt-1">
            <span className="bg-gray-400 rounded-full">
              <Image
                src={getAvatar()}
                width={40}
                height={40}
                alt="profile-image"
              />
            </span>
            &nbsp;&nbsp;
            <h6 className="text-md">{setAuthor}</h6>
          </div>
          <div className="p-3" />
        </div>
        {/* <button className="mt-2 text-white   bg-red-700  hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-4 py-2 dark:opacity-80 dark:hover:bg-red-700 dark:focus:ring-red-800">
          View
        </button> */}
      </div>
    </div>
  );
};

export default Pin;
