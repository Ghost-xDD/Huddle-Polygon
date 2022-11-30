import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-center pt-10">
        <div className="items-center">
          <a className="font-bold font-[Freehand] text-transparent bg-clip-text text-3xl bg-gradient-to-r bg-red-500 ml-10">
            Huddle
          </a>
          <div className="flex gap-6 pt-2 pb-5">
            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-400" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2022 All rights reserved <span className="text-3xl">|</span> Build
          with ❤ by{' '}
          <span className="hover:text-red-400 font-semibold cursor-pointer">
            GhostxD{' '}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
