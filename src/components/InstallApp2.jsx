/** @format */
import PropTypes from "prop-types";

import { useEffect, useRef } from "react";
import { Install } from "../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";


gsap.registerPlugin(ScrollTrigger);
const InstallApp2 = ({ className = "" }) => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const imageRef = useRef(null);
  const steps = [
    { step: 1, text: t("use-app.install-app.step1") },
    { step: 2, text: t("use-app.install-app.step2") },
    { step: 3, text: t("use-app.install-app.step3") },
  ];
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
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-[800px] flex flex-row items-center justify-between max-w-full gap-[20px] text-left text-26xl text-darkslategray-400 dark:text-white font-poppins mq1050:flex-wrap relative`}
    >
      <div className="w-[606px] flex flex-col items-start justify-start gap-[39px] min-w-[606px] max-w-full mq750:gap-[19px] mq750:min-w-full mq1050:flex-1 relative">
        <div className="w-[437px] flex flex-col items-start justify-start gap-[6px] max-w-full">
          <div className="self-stretch h-full relative leading-[55px] inline-block mq450:text-8xl mq450:leading-[33px] mq750:text-17xl mq750:leading-[44px]">
            <p className="m-0 flex flex-col ">
              <span className="">
                {t("use-app.install-app.installAppTitle1")}
              </span>
              <b className="text-31xl mq750:text-17xl mq450:text-8xl font-poppins text-transparent !bg-clip-text [background:linear-gradient(131.74deg,_#00ff00,_#009900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                {t("use-app.install-app.installAppTitle2")}
              </b>
            </p>
          </div>
          <div className="w-[282px] h-0.5 relative box-border border-t-[2px] border-solid border-darkslategray-400 dark:border-white" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-white mq750:flex-wrap relative">
          {steps.map((item, index) => (
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
          <div className="absolute top-[100px] left-[25px] h-[90px] w-[2px] bg-lime-100 mq450:top-[120px]"></div>
        </div>
      </div>
      <div className="h-[526px] w-[343px] flex flex-col items-start justify-start pt-5 mq450:pt-0 px-0 pb-0 box-border min-w-[343px] max-w-full mq450:min-w-full mq1050:flex-1">
        <div className="absolute top-[0px] right-[-45%] mq450:right-0 [filter:blur(200px)] rounded-[50%] bg-lime-300 w-[647px] h-[461px] mq750:w-[350px] mq750:h-[350px]  mq450:h-[250px]" />
        <img
          ref={imageRef}
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full mq1050:self-stretch mq1050:w-auto"
          loading="lazy"
          alt=""
          src={Install}
        />
      </div>
    </div>
  );
};

InstallApp2.propTypes = {
  className: PropTypes.string,
};

export default InstallApp2;
