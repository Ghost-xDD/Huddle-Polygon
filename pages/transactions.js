import { useState, useEffect } from 'react';
import Head from 'next/head';
import ProfileHero from '../components/ProfileHero';
import DashboardNav from '../components/DashboardNav';
import Tips from '../components/Tips';

const Transactions = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className="mb-[100px]">
        <Head>
          <title>My Transactions | Huddle</title>
          <meta name="description" content="Manage your events and RSVPs" />
        </Head>
        <div className="w-full h-full mt-6 text-white black-bg-gradient">
          <ProfileHero />

          {/* <h1 className="ml-[260px] mt-12 text-black text-2xl font-bold">
            Your Tips History
          </h1> */}

          <div className="mx-[20px] text-black block items-center mt-4 md:flex md:mx-0">
            <DashboardNav />
          </div>
          <div className="bg-red mx-20 ">
            <Tips />
          </div>
        </div>
      </div>
    )
  );
};

export default Transactions;
