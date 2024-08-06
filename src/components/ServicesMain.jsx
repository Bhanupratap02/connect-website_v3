/** @format */

import { useContext, useEffect, useRef, useState } from "react";
import {
  AppStore,
  Bike,
  CarRental,
  PlayStore,
  Ride,
  Taxi6,
  DarkAppStore,
  DarkMission,
  DarkCar,
  DarkRide,
  DarkTaxi,
  DarkBike,
  DarkPlayStore,
} from "../assets";
import PropTypes from "prop-types";
import QRCodeModal from "./QRCodeModal";
import { ThemeContext } from "../ThemeContext";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
const ServicesMain = ({ className = "" }) => {
    const { t } = useTranslation();
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
  const handleButtonClick = () => {
    // const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // if (/android/i.test(userAgent)) {
    //   setQrCodeValue(
    //     "https://play.google.com/store/apps/details?id=com.connect.driverapp"
    //   );
    // } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    //   setQrCodeValue("https://apps.apple.com/app/connect-plus/id6504287764");
    // } else {
    //   setQrCodeValue(
    //     "https://play.google.com/store/apps/details?id=com.connect.driverapp"
    //   );
    // }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const Button = () => (
    <>
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
          onClick={handleButtonClick}
          className="cursor-pointer py-[15px] pr-[33px] pl-[34px] bg-gainsboro-200 rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-white hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100 dark:bg-darkslategray-400 "
        >
          <b className="relative text-3xl leading-[16px] inline-block font-poppins text-limegreen text-center min-w-[111px]">
            {t("services-main.serviceButton")}
          </b>
        </button>
      )}
    </>
  );

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  const inView1 = useInView(ref1, { triggerOnce: true, threshold: 0.1 });
  const inView2 = useInView(ref2, { triggerOnce: true, threshold: 0.1 });
  const inView3 = useInView(ref3, { triggerOnce: true, threshold: 0.1 });
  const inView4 = useInView(ref4, { triggerOnce: true, threshold: 0.1 });
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideInFromLeft = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.5 } },
  };

  const slideInFromRight = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.5 } },
  };
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-16xl text-green font-poppins ${className}`}
    >
      <div className="w-[1060px] flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px] mq450:gap-[30px] ">
        <div>
          <div className="w-full flex flex-col items-start justify-start pt-0 px-0  box-border gap-[25px] max-w-full text-[60px] font-gilroy-bold ">
            <h1 className="m-0 self-stretch h-full relative text-inherit font-normal font-inherit text-limegreen dark:text-lime-100 inline-block mq450:text-[45px] mq750:text-25xl mq450:text-center">
              {t("services-main.servicesTitle1")}
            </h1>
          </div>
        </div>

        <div className="w-[100%] h-0.5 relative box-border border-t-[2px] border-solid border-darkslategray-400 dark:border-white  mq450:w-[80%] mq450:mx-8" />

        {/* Car Rentals */}
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={slideInFromLeft}
          className="self-stretch rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border dark:[background:linear-gradient(124.1deg,_#161616,_#000)] overflow-hidden flex flex-row items-start justify-start py-[38px] px-[39px] max-w-full border-[1px] border-solid border-darkgray-200 mq750:flex-col mq450:mx-[10px]"
        >
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap mq750:flex-col ">
            <div className="w-[841px] flex flex-col items-start justify-start gap-[10px] max-w-full ">
              <h3 className="m-0 relative text-inherit leading-[35px] font-semibold font-inherit mq450:text-2xl dark:text-limegreen mq450:leading-[21px] mq750:text-9xl mq750:leading-[28px]">
                {t("services-main.service1")}
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[35px] text-5xl text-darkslategray-400 mq450:items-center">
                <div className="self-stretch h-[100%] relative leading-[30px] inline-block mq450:text-lg mq450:leading-[28px] text-2xl mq450:h-full dark:text-white">
                  {t("services-main.service1Description")}
                </div>
                <Button />
              </div>
            </div>
            <img
              className="h-[247px] w-[250px] relative rounded-21xl overflow-hidden shrink-0 mq750:self-center mq450:w-[270px]"
              loading="lazy"
              alt=""
              src={theme === "light" ? CarRental : DarkCar}
            />
          </div>
        </motion.div>

        {/* Rides */}
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={slideInFromRight}
          className="self-stretch rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border dark:[background:linear-gradient(124.1deg,_#161616,_#000)] overflow-hidden flex flex-row items-start justify-start py-8 px-[39px] max-w-full border-[1px] border-solid border-darkgray-200 mq750:flex-col mq450:mx-[10px]"
        >
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap mq750:flex-col">
            <img
              className="h-[247px] w-[250px] relative rounded-21xl overflow-hidden shrink-0 mq750:self-center"
              loading="lazy"
              alt=""
              src={theme === "light" ? Ride : DarkRide}
            />
            <div className="w-[841px] flex flex-col items-start justify-start gap-[10px] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[35px] font-semibold font-inherit mq450:text-2xl mq450:leading-[21px] mq750:text-9xl mq750:leading-[28px] dark:text-limegreen">
                {t("services-main.service2")}
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[35px] text-5xl text-darkslategray-400">
                <div className="self-stretch h-[100%] relative leading-[30px] inline-block mq450:text-lg mq450:leading-[28px] text-2xl mq450:h-full dark:text-white">
                  {t("services-main.service2Description")}
                </div>
                <Button />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Taxies */}
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={slideInFromLeft}
          className="self-stretch rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border dark:[background:linear-gradient(124.1deg,_#161616,_#000)] overflow-hidden flex flex-row items-start justify-start py-[38px] px-[39px] max-w-full border-[1px] border-solid border-darkgray-200 mq750:flex-col mq450:mx-[10px]"
        >
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap mq750:flex-col">
            <div className="w-[841px] flex flex-col items-start justify-start gap-[10px] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[35px] font-semibold font-inherit mq450:text-2xl mq450:leading-[21px] dark:text-limegreen mq750:text-9xl mq750:leading-[28px]">
                {t("services-main.service3")}
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[35px] text-5xl text-darkslategray-400 mq450:items-center">
                <div className="self-stretch h-[100%] relative leading-[30px] inline-block mq450:text-lg mq450:leading-[28px] text-2xl mq450:h-full dark:text-white">
                  {t("services-main.service3Description")}
                </div>
                <Button />
              </div>
            </div>
            <img
              className="h-[257px] w-[257px] relative rounded-21xl overflow-hidden shrink-0 mq750:self-center"
              loading="lazy"
              alt=""
              src={theme === "light" ? Taxi6 : DarkTaxi}
            />
          </div>
        </motion.div>

        {/* Bikes */}
        <motion.div
          ref={ref4}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={slideInFromRight}
          className="self-stretch rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border dark:[background:linear-gradient(124.1deg,_#161616,_#000)] overflow-hidden flex flex-row items-start justify-start py-8 px-[39px] max-w-full border-[1px] border-solid border-darkgray-200 mq750:flex-col mq450:mx-[10px]"
        >
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap mq750:flex-col">
            <img
              className="h-[247px] w-[250px] relative rounded-21xl overflow-hidden shrink-0 mq750:self-center"
              loading="lazy"
              alt=""
              src={theme === "light" ? Bike : DarkBike}
            />
            <div className="w-[841px] flex flex-col items-start justify-start gap-[10px] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[35px] font-semibold font-inherit mq450:text-2xl mq450:leading-[21px] mq750:text-9xl mq750:leading-[28px] dark:text-limegreen">
                {t("services-main.service4")}
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[35px] text-5xl text-darkslategray-400">
                <div className="self-stretch h-[100%] relative leading-[30px] inline-block mq450:text-lg mq450:leading-[28px] text-2xl mq450:h-full dark:text-white">
                  {t("services-main.service4Description")}
                </div>
                <Button />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <QRCodeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        qrCodeValue={"https://connectplus.org.uk/redirect.html"}
      />
    </section>
  );
};

ServicesMain.propTypes = {
  className: PropTypes.string,
};

export default ServicesMain;
