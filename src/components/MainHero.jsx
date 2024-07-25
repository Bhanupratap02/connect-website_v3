/** @format */

import PropTypes from "prop-types";
import HeroSection2 from "./HeroSection2";
import Navbar from "./Navbar";
import HeroSection3 from "./HeroSection3";
import QRCodeModal from "./QRCodeModal";
import { useEffect, useState } from "react";
import { AppStore, PlayStore } from "../assets";
// prev ver

const MainHero = ({ className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream);
    setIsAndroid(/android/i.test(userAgent));
  }, []);
  const handleButtonClick = () => {
    // const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // if (/android/i.test(userAgent)) {
    //   setQrCodeValue(
    //     "https://play.google.com/store/apps/details?id=com.connect.driverapp"
    //   );
    // } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    //   setQrCodeValue("https://apps.apple.com/app/connect-plus/id6504287764");
    // } else {
    //   setQrCodeValue("https://apps.apple.com/app/connect-plus/id6504287764"); 
    // }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[200px] box-border relative gap-[140px] max-w-full h-full text-left text-19xl text-limegreen font-poppins overflow-hidden ${className} 
      mq450:gap-[35px] mq450:pb-[50px] mq750:gap-[70px] mq1050:pb-[201px]`}
    >
      <Navbar />
      <div
        className="w-[683px] flex flex-row items-start justify-start py-0
        px-[65px] box-border max-w-full mq750:w-full mq750:px-[30px]
        mq450:w-full mq450:px-[20px] ml-8 mq1050:ml-0"
      >
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[45px]
          max-w-full mq750:gap-[22px] mq450:gap-[15px]"
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-[28px]  max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
              <div className=" relative inline-block z-[3] mq450:text-4xl mq1050:text-11xl">
                <span>
                  <span>Your Ride,</span>
                </span>
                <span className="text-23xl  text-darkslategray-400 font-gilroy-bold">
                  <span>
                    <span className="text-lime-100">{` `}</span>
                  </span>
                  <span className="uppercase">Just a Tap Away!</span>
                </span>
              </div>
              <div className="w-[497px] h-0.5 relative box-border max-w-full z-[3] border-t-[2px] border-solid border-darkslategray-400" />
            </div>
            <div
              className="relative inline-block max-w-full z-[3] text-16xl text-darkslategray-400 
            mq450:text-lg mq450:w-full mq1050:text-5xl"
            >
              <p className="m-0">
                <span className="leading-[50px] font-poppins text-darkslategray-400 text-11xl mq750:text-inherit">
                  Simplify Your Commute with
                  <br />
                  <i className="font-semibold text-transparent !bg-clip-text [background:linear-gradient(117.21deg,_#00ff00,_#009900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Instant Ride Bookings
                  </i>
                </span>
              </p>
              <p className="m-0 text-11xl mq750:text-inherit">
                <span className="leading-[42px]">
                  <span>from Your Phone.</span>
                </span>
              </p>
            </div>
          </div>
          {isIOS ? (
            <a
              href="https://apps.apple.com/app/connect-plus/id6504287764"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="self-stretch w-52 relative object-contain min-h-[80px] mq450:w-[90%] mq450:object-contain mq450:h-[30px]"
                loading="lazy"
                alt="Download on the App Store"
                src={AppStore}
              />
            </a>
          ) : isAndroid ? (
            <a
              href="https://play.google.com/store/apps/details?id=com.connect.driverapp"
              className="mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="self-stretch w-[235px] relative object-contain min-h-[80px] mq450:w-[80%] mq450:object-contain mq450:h-[40px] mq450:pl-[20px]"
                loading="lazy"
                alt="Get it on Google Play"
                src={PlayStore}
              />
            </a>
          ) : (
            <button
              onClick={handleButtonClick}
              className="cursor-pointer py-5 pr-[39px] pl-10 bg-gainsboro-200 rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[3] border-[1px] border-solid border-white hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100"
            >
              <b className="relative text-16xl leading-[25px] font-poppins text-limegreen text-center">
                Book A Ride
              </b>
            </button>
          )}
        </div>
      </div>
      <HeroSection2 className="mq1050:hidden" />
      <HeroSection3 className="hidden mq1050:block" />
      <QRCodeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        qrCodeValue={"https://app.connectplus.org.uk/test1/redirect.html"}
      />
    </div>
  );
};

MainHero.propTypes = {
  className: PropTypes.string,
};

export default MainHero;
