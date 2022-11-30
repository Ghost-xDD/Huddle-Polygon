import { useState, useEffect } from 'react';
import Head from 'next/head';
import ProfileHero from '../components/ProfileHero';
import DashboardNav from '../components/DashboardNav';
import Nft from '../components/Nft';

const Profile = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div>
        <Head>
          <title>My Profile | Huddle</title>
          <meta name="description" content="Manage your events and RSVPs" />
        </Head>
        <div className="w-full h-full mt-12 text-white black-bg-gradient">
          <ProfileHero />

          <div className="mx-[20px]text-black block items-center md:flex md:mx-0 ">
            <DashboardNav />
          </div>
          <div className="w-full mt-4">
            <Nft />
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
