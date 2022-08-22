import React from 'react';
import Header from '../layout/header';
import FirstSection from '../components/FirstSection';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import FourthSection from '../components/FourthSection';
import FifthSection from '../components/FifthSection';
import SixthSection from '../components/SixthSection';
import SeventhSection from '../components/SeventhSection';
import EighthSection from '../components/EighthSection';
import Footer from '../layout/footer';

const Homepage = () => {
  return (
    <div className="bg-[#212026]">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <Footer />
    </div>
  );
};

export default Homepage;
