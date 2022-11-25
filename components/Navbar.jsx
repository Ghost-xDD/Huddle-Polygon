import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';
import NavMenu from './NavMenu';
import SearchBar from './SearchBar';
import Image from 'next/image';
import profile from '../public/Images/profile.png';

const Navbar = () => {
  const { data: account } = useAccount();
  const { disconnect } = useDisconnect();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <header className="bg-white border-b-2 border-gray-100">
        <nav
          className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="w-full py-4 pb-2 flex flex-wrap items-center justify-between border-b border-red-500 lg:border-none">
            <div className="flex items-center">
              <Link
                href="/"
                className="font-bold font-[Freehand] text-transparent bg-clip-text text-3xl bg-gradient-to-r bg-red-500 p-2"
              >
                Huddle
              </Link>
              <Link
                href="/"
                className="text-white bg-slate-700 p-2 rounded-md ml-6 font-bold font-[Manrope] cursor-pointer hover:opacity-80"
              >
                Home
              </Link>
              <Link
                href="/create-post"
                className="text-white bg-slate-700 p-2 rounded-md ml-3 font-bold font-[Manrope]  cursor-pointer hover:opacity-80"
              >
                Create Post
              </Link>
            </div>
            <div className="hidden md:block md:w-2/5">
              <SearchBar />
            </div>
            <div className="ml-10 space-x-4 flex items-center">
              {account ? (
                <NavMenu account={account} disconnect={() => disconnect()} />
              ) : (
                <ConnectButton showBalance={false} />
              )}
              <Link
                href="/profile"
                className="text-white bg-slate-300 p-2 rounded-full ml-6 font-bold font-[Manrope] cursor-pointer hover:opacity-80"
              >
                <Image src={profile} width={30} height={30} />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    )
  );
};

export default Navbar;
