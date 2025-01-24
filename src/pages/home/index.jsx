import * as React from 'react';
import Divider from '@mui/material/Divider';
import Header from 'components/Home/Header';
import DashboardImage from 'components/Home/DashboardImage';
import Highlights from 'components/Home/Highlights';
import Pricing from 'components/Home/Pricing';
import Features from 'components/Home/Features';
import FAQ from 'components/Home/FAQ';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <DashboardImage />
      <div>
        <Divider />
        <Features />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
