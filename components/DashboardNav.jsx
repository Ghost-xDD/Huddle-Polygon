import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { menu, close } from '../public/Images';
import { useRouter } from 'next/router';

const DashboardNav = () => {
  const [toggle, setToggle] = useState('Profile');
  const router = useRouter();

  let navigation = [
    {
      name: 'Profile',
      href: '/profile',
    },
    {
      name: 'Transactions',
      href: '/transactions',
    },
  ];

  return (
    <>
      <nav
        className="hidden py-6 items-center text-center w-full    navbar md:mt-[0px] mt-0 md:border-b-2 md:border-slate-500 md:block "
        aria-label="Sidebar"
      >
        <ul className="list-none bg-red flex flex-row sm:flex justify-center items-center gap-6 flex-1 border mx-[550px] rounded-2xl border-gray-500">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              scroll={false}
              className={`font-poppins font-normal cursor-pointer text-[16px]  ${
                router.pathname == item.href
                  ? 'text-white font-semibold  bg-red-800 p-1 px-6 rounded-xl transition-all duration-500'
                  : 'text-black px-6 hover:opacity-80'
              } `}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default DashboardNav;
