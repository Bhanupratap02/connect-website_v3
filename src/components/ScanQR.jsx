/** @format */

import PropTypes from "prop-types";
import {
  ScanQRMobile,
  PlayStore,
  AppStore,
  DarkAppStore,
  DarkPlayStore,
} from "../assets";
import QRCodeModal from "./QRCodeModal";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);
const ScanQR = ({ className = "" }) => {
   const { t } = useTranslation();
    const sectionRef = useRef(null);
    const stepsRef = useRef([]);
    const imageRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream);
    setIsAndroid(/android/i.test(userAgent));
  }, []);
  useEffect(() => {
   gsap.fromTo(
     stepsRef.current,
     { opacity: 0, y: 50 },
     {
       opacity: 1,
       y: 0,
       duration: 0.5,
       stagger: 0.3,
       scrollTrigger: {
         trigger: sectionRef.current,
         start: "top 80%",
         toggleActions: "play none none reset",
       },
     }
   );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
  }, [])
  
  const handleButtonClick = () => {
    // const userAgent =
    //   navigator.userAgent || navigator.vendor || window.opera;
    // if (/android/i.test(userAgent)) {
    //   setQrCodeValue(
    //     "https://play.google.com/store/apps/details?id=com.connect.driverapp"
    //   );
    // } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    //   setQrCodeValue(
    //     "https://apps.apple.com/app/connect-plus/id6504287764"
    //   );
    // } else {
    //   setQrCodeValue(
    //     "https://apps.apple.com/app/connect-plus/id6504287764"
    //   ); // Default to App Store
    // }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      ref={sectionRef}
      className={`w-[1336px] flex flex-row items-start justify-center pt-[0] px-[178px] pb-[54px] box-border max-w-full text-left text-26xl text-darkslategray-400 dark:text-white font-poppins mq750:pb-[35px] mq750:box-border ${className} mq1050:px-[60px] mq750:px-[40px]`}
    >
      <div
        className={`w-[1156px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-26xl text-darkslategray-400 dark:text-white font-poppins mq1050:flex-wrap relative`}
      >
        <div className="w-[606px] flex flex-col items-start justify-start gap-[39px] min-w-[606px] max-w-full mq750:gap-[19px] mq750:min-w-full mq1050:flex-1 relative">
          <div className="w-[437px] flex flex-col items-start justify-start gap-[6px] max-w-full">
            <div className="self-stretch h-full relative leading-[55px] inline-block mq450:text-8xl mq450:leading-[33px] mq750:text-17xl mq750:leading-[44px]">
              <p className="m-0 ">
                <span>{t("scan-qr.scanQRHeading1")}</span>
                <b className="text-31xl font-poppins text-transparent !bg-clip-text [background:linear-gradient(131.74deg,_#00ff00,_#009900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  {t("scan-qr.scanQRHeading2")}
                </b>
              </p>
              <p className="m-0">{t("scan-qr.scanQRHeading3")}</p>
            </div>
            <div className="w-[282px] h-0.5 relative box-border border-t-[2px] border-solid border-darkslategray-400 dark:border-white" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-white mq750:flex-wrap relative">
            {[
              { step: 1, text: t("scan-qr.step1") },
              { step: 2, text: t("scan-qr.step2") },
              {
                step: 3,
                text: t("scan-qr.step3"),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-4 mb-6 relative"
              >
                <div className="h-[53px] w-[53px] relative">
                  <div className="absolute top-0 left-0 rounded-full bg-lime-100 w-full h-full" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-[55px] font-medium z-[1] text-5xl">
                    {item.step}
                  </div>
                </div>
                <div
                  ref={(el) => (stepsRef.current[index] = el)}
                  className="flex-1 text-darkslategray-400 dark:text-white mq1050:text-5xl mq750:text-2xl mq450:text-lg text-5xl leading-[35px]"
                >
                  {item.text}
                </div>
              </div>
            ))}
            {/* Lines connecting the steps */}
            <div className="absolute top-[53px] left-[25px] h-[90px] w-[2px] bg-lime-100"></div>
            <div className="absolute top-[100px] left-[25px] h-[90px] w-[2px] bg-lime-100 mq450:top-[150px]"></div>
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
                src={theme === "light" ? AppStore : DarkAppStore}
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
                src={theme === "light" ? PlayStore : DarkPlayStore}
              />
            </a>
          ) : (
            <button
              className="cursor-pointer py-5 px-10 bg-gainsboro-200 rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-white hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100 mq450:min-w-full mq1050:flex-1 mq750:w-full mq450:justify-center dark:bg-darkslategray-400 "
              onClick={handleButtonClick}
            >
              <b className="relative text-11xl leading-[25px] font-poppins text-limegreen dark:text-lime-100 text-center">
                {t("scan-qr.scanQRButton")}
              </b>
            </button>
          )}
        </div>
        <div
          ref={imageRef}
          className="h-[526px] w-[343px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[343px] max-w-full mq450:min-w-full mq1050:flex-1"
        >
          <div className="absolute top-[0px] right-[-45%] mq450:right-0 [filter:blur(200px)] rounded-[50%] bg-lime-300 w-[647px] h-[461px] mq750:w-[350px] mq750:h-[350px]  mq450:h-[250px]" />
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full mq1050:self-stretch mq1050:w-auto"
            loading="lazy"
            alt=""
            src={ScanQRMobile}
          />
        </div>
      </div>
      <QRCodeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        qrCodeValue={"https://connectplus.org.uk/redirect.html"}
      />
    </section>
  );
};

ScanQR.propTypes = {
  className: PropTypes.string,
};

export default ScanQR;
