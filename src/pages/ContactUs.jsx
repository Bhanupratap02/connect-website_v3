import React from 'react'
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer2 from '../components/Footer2';
const ContactUs = () => {
  return (
    <div className="w-full relative bg-white dark:bg-black overflow-hidden flex flex-col items-start justify-start gap-[30.5px] leading-[normal] tracking-[normal] mq450:gap-[23px] mq800:gap-[35px]">
      <Navbar />
      <Contact/>
      <Footer2/>
    </div>
  );
}

export default ContactUs