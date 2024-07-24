import React from 'react'
import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer2';
import ServicesMain from '../components/ServicesMain';
const Services = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[20px] leading-[normal] tracking-[normal] mq800:gap-[25px]">
      <Navbar/>
      <ServicesMain/>
      <Footer2/>
    </div>
  );
}

export default Services