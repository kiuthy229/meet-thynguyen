import React from 'react';
import Routers from '../routes/Routers';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
