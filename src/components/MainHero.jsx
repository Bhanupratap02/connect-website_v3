/** @format */

import PropTypes from "prop-types";
import HeroSection2 from "./HeroSection2";
import HeroImg from "./HeroImg"
import Navbar from "./Navbar";
import HeroSection3 from "./HeroSection3";
import HeroMobileImg from "./HeroMobileImg";
import QRCodeModal from "./QRCodeModal";
import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppStore, PlayStore, DarkAppStore, DarkPlayStore } from "../assets";
import { gsap } from "gsap";
import { ThemeContext } from "../ThemeContext";

const MainHero = ({ className = "" }) => {
    const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const heroTextRef = useRef(null);
  const buttonRef = useRef(null);
  const lineRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream);
    setIsAndroid(/android/i.test(userAgent));

    // Set initial states to ensure visibility before animation
    gsap.set(heroTextRef.current, { y: 50, opacity: 0 });
    gsap.set(lineRef.current, { scaleX: 0 });
    gsap.set(buttonRef.current, { y: 20, opacity: 0 });

    // GSAP Animations
    gsap.to(heroTextRef.current, {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power3.out",
      stagger: 0.3,
    });

    gsap.to(lineRef.current, {
      duration: 1,
      scaleX: 1,
      transformOrigin: "left center",
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.to(buttonRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      delay: 1,
    });
  }, []);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[100px] box-border relative gap-[80px]  max-w-full h-full text-left text-19xl text-limegreen font-poppins overflow-hidden ${className} 
      mq450:gap-[10px] mq450:pb-[0px] mq750:gap-[70px] mq1050:pb-[100px]`}
    >
      <Navbar />
      <div
        className="w-[593px] flex flex-row items-start justify-start py-0 
        px-[65px] box-border max-w-full mq750:w-full mq750:px-[30px]
        mq450:w-full mq450:px-[20px] ml-8 mq1050:ml-0 mq450:mb-[10px] mq1050:mb-[0px] mb-[30px]"
      >
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[45px]
          max-w-full mq750:gap-[22px] mq450:gap-[10px]"
        >
          <div
            ref={heroTextRef}
            className="self-stretch z-[3] flex flex-col items-start justify-start gap-[28px] mq450:gap-[10px] max-w-full"
          >
            <div className="self-stretch flex flex-col items-start justify-start  gap-[25px] max-w-full">
              <div className="relative inline-block z-[3] mq450:text-4xl mq1050:text-11xl">
                <span>{t("hero.welcomeMessage1")}</span>
                <span className="text-23xl mq450:text-11xl text-darkslategray-400 dark:text-white font-gilroy-bold">
                  <span className="text-lime-100"> </span>
                  <span className="uppercase">{t("hero.welcomeMessage2")}</span>
                </span>
              </div>
              <div
                ref={lineRef}
                className="w-[407px] h-0.5 relative box-border max-w-full z-[3] border-t-[2px] border-solid border-darkslategray-400 dark:border-gray-200"
              />
            </div>
            <div
              className="relative inline-block max-w-full z-[3] text-16xl dark:text-white text-darkslategray-400 
              mq450:text-3xl mq450:w-full mq1050:text-5xl"
            >
              <p className="m-0 mq450:ml-2 mq450:font-medium">
                <span className="leading-[50px] font-poppins text-darkslategray-400 dark:text-white text-11xl mq750:text-inherit ">
                  {t("hero.welcomeSubMessage1")}
                  <br />
                  <i className="font-semibold text-transparent !bg-clip-text [background:linear-gradient(117.21deg,_#00ff00,_#009900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    {t("hero.welcomeSubMessage2")}
                  </i>
                </span>
              </p>
              <p className="m-0 text-11xl mq750:text-inherit mq450:ml-2 mq450:font-medium  ">
                <span className="leading-[42px]">
                  {t("hero.welcomeSubMessage3")}
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
                className="hero-button self-stretch w-52 relative object-contain min-h-[80px] mq450:w-[90%] mq450:object-contain mq450:h-[30px] z-[3] mq450:ml-2"
                loading="lazy"
                alt="Download on the App Store"
                src={theme === "light" ? AppStore : DarkAppStore}
              />
            </a>
          ) : isAndroid ? (
            <a
              href="https://play.google.com/store/apps/details?id=com.connect.driverapp"
              className="mr-4 z-[3]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="self-stretch w-[235px] relative object-contain min-h-[80px] mq450:w-[80%] mq450:object-contain mq450:h-[40px] mq450:pl-[20px] hero-button mq450:ml-2"
                loading="lazy"
                alt="Get it on Google Play"
                src={theme === "light" ? PlayStore : DarkPlayStore}
              />
            </a>
          ) : (
            <button
              onClick={handleButtonClick}
              ref={buttonRef}
              className="cursor-pointer py-5  pr-[39px] pl-10 bg-gainsboro-200 rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[3] border-[1px] border-solid border-white hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid mq450:ml-2 hover:border-gainsboro-100 dark:bg-darkslategray-400 dark:border-darkslategray-400"
            >
              <b className="relative text-16xl leading-[25px] font-poppins dark:text-lime-100 text-limegreen text-center">
                {t("hero.bookRideButton")}
              </b>
            </button>
          )}
        </div>
      </div>
      <HeroImg className="mq1050:hidden" />
      {/* <HeroSection2 className="mq1050:hidden" /> */}
      {/* <HeroSection3 className="hidden mq1050:block" /> */}
      <HeroMobileImg className="hidden mq1050:block" />
      <QRCodeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        qrCodeValue={"https://connectplus.org.uk/redirect.html"}
      />
    </div>
  );
};

MainHero.propTypes = {
  className: PropTypes.string,
};

export default MainHero;
