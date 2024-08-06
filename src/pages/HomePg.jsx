import OurServices from "../components/OurServices";
import UseApp from "../components/UseApp";
import DriveSuccess from "../components/DriveSuccess";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import HeroSection from "../components/MainHero";
import AboutUs from "../components/AboutUs";
import ScanQR from "../components/ScanQR";
import Blogs from "../components/Blogs";
const HomePg = () => {
  return (
    <div className="w-full relative bg-white dark:bg-black overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 pb-[90px] px-0 box-border max-w-full lg:pb-[58px] lg:box-border mq450:pb-[25px] mq450:box-border mq1050:pb-[38px] mq1050:box-border">
        <HeroSection />
        <AboutUs />
      </section>

      <OurServices />
      <UseApp />
      <DriveSuccess />
      <ScanQR/>
      <Blogs/>
      <Footer2 />
    </div>
  );
};

export default HomePg;
