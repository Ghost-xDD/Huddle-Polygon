import React from 'react';
import Head from 'next/head';
import ProfileHero from '../components/ProfileHero';
import DashboardNav from '../components/DashboardNav';

const Profile = () => {
  return (
    <div>
      <Head>
        <title>My Profile | Huddle</title>
        <meta name="description" content="Manage your events and RSVPs" />
      </Head>
      <div className="w-full h-full mt-12 text-white black-bg-gradient">
        <ProfileHero />

        <div className="mx-[20px] h-screen text-black block items-center mt-20 md:flex md:mx-0 ">
          <DashboardNav />
        </div>
      </div>
    </div>
  );
};

export default Profile;
