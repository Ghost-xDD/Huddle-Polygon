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
        className="hidden py-6 items-center h-[300px] w-[250px] absolute left-0 top-0 right-0 pt-[40px] navbar md:mt-[500px] mt-0 md:border-r-2 md:border-black md:block "
        aria-label="Sidebar"
      >
        <ul className="list-none ml-10 pl-16 flex flex-col sm:flex justify-start items-start gap-6 flex-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              scroll={false}
              className={`font-poppins font-normal cursor-pointer text-[16px]  ${
                router.pathname == item.href
                  ? 'text-white font-semibold  bg-red-800 p-1 px-6 rounded-xl transition-all duration-500'
                  : 'text-dimWhite px-6 hover:opacity-80'
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
