import Head from 'next/head';

const Landing = ({ children }) => {
  return (
    <div className="max-w-7xl w-full mx-auto px-8 sm:px-6">
      <Head>
        <title className="font-[Freehand]">Huddle</title>
        <meta
          name="description"
          content="Share Images in a decentralized manner"
        />
      </Head>

      <section className="py-4">{children}</section>
    </div>
  );
};

export default Landing;
