import React from 'react';
import TipsTransfer from './TipsTransfer';
import TipsReceiver from './TipsReceiver';
import dynamic from 'next/dynamic';

import { useState } from 'react';

const Tips = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div className=" mx-auto mt-4">
        <div className="flex flex-col items-center justify-center">
          <ul className="flex space-x-2 bg-white rounded-xl">
            <li>
              <a
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1
                    ? 'bg-gradient-to-r from-red-400 to-slate-500 text-white'
                    : ''
                } inline-block px-4 py-2 text-black font-bold rounded-xl shadow cursor-pointer`}
              >
                Tips Transferred
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2
                    ? 'bg-gradient-to-r from-red-400 to-slate-500 text-white'
                    : ''
                } inline-block px-4 py-2 text-black font-bold rounded-xl shadow cursor-pointer`}
              >
                Tips Received
              </a>
            </li>
          </ul>
          <div className="w-full mt-6">
            <div className={openTab === 1 ? 'block' : 'hidden'}>
              <TipsTransfer />
            </div>
            <div className={openTab === 2 ? 'block' : 'hidden'}>
              <TipsReceiver />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
