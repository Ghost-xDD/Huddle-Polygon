import Navbar from './Navbar';

import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="font-serif">
      <Navbar />
      <main className="flex-1">{children}</main>
      {/* <div className='mt-8 pt-8'/> */}
      <Footer />
    </div>
  );
};

export default Layout;
