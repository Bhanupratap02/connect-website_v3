/** @format */

import PropTypes from "prop-types";
import { Frame156, Frame1531, DarkVision, DarkMission } from "../assets";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../ThemeContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
// ver 1
const AboutMain = ({ className = "" }) => {
    const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const visionRef = useRef(null);
  const missionRef = useRef(null);
    useEffect(() => {
      const elements = [visionRef.current, missionRef.current];

      elements.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "bottom 40%",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, []);
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-center pt-0 px-12 pb-2.5 box-border max-w-[full] text-left text-16xl text-green font-poppins ${className}`}
    >
      <div className="w-full max-w-[1090px] flex flex-col items-start justify-start gap-[50px] mq750:gap-[25px]">
        <div className="w-full flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[45px] text-[60px] font-gilroy-bold">
          <h1 className="m-0 w-full max-w-full h-full relative text-inherit font-normal font-inherit  inline-block mq450:text-14xl mq750:text-26xl text-limegreen dark:text-lime-100 mq450:text-center">
            {t("about-main.aboutTitle1")}
          </h1>
          <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-darkslategray-400 dark:border-white mq450:mx-4" />
        </div>
        <div
          ref={visionRef}
          className="self-stretch rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border dark:[background:linear-gradient(124.1deg,_#161616,_#000)] overflow-hidden flex mq1050:flex-col flex-row items-start justify-start py-[38px] px-[39px] max-w-full border-[1px] border-solid border-darkgray-200"
        >
          <div className="flex-1 flex mq1050:flex-col flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
            <div className="mq1050:w-full w-[841px] flex flex-col  items-start justify-start pt-[12.5px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <h3 className="m-0 relative text-inherit leading-[35px] font-semibold font-inherit mq450:text-2xl dark:text-limegreen mq450:leading-[21px] mq800:text-9xl mq750:leading-[28px]">
                  {t("about-main.aboutTitle2")}
                </h3>
                <div className="self-stretch h-auto relative text-2xl leading-[40px] text-darkslategray-400 inline-block mq450:text-lg mq450:leading-[32px] dark:text-white">
                  {t("about-main.aboutDescription1")}
                </div>
              </div>
            </div>
            <img
              className="h-[257px] w-[257px] relative rounded-21xl overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={theme === "light" ? Frame1531 : DarkVision}
            />
          </div>
        </div>
        <div
          ref={missionRef}
          className="self-stretch rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border dark:[background:linear-gradient(124.1deg,_#161616,_#000)] overflow-hidden flex mq1050:flex-col flex-row items-start justify-start py-[38px] px-[39px] max-w-full border-[1px] border-solid border-darkgray-200"
        >
          <div className="flex-1 flex mq1050:flex-col  flex-row flex-wrap items-start justify-start gap-[29px] max-w-full ">
            <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
              <img
                className="w-[257px] h-[297px] mq1050:h-[257px] relative rounded-21xl overflow-hidden shrink-0 mq450:w-[230px]"
                loading="lazy"
                alt=""
                src={theme === "light" ? Frame156 : DarkMission}
              />
            </div>
            <div className="mq1050:w-full w-[621px] flex flex-col  items-start justify-start pt-[12.5px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <h3 className="m-0 relative text-inherit leading-[35px] font-semibold font-inherit mq450:text-2xl mq450:leading-[21px] dark:text-limegreen mq800:text-9xl mq750:leading-[28px]">
                  {t("about-main.aboutTitle3")}
                </h3>
                <div className="self-stretch h-auto relative text-2xl leading-[35px] text-darkslategray-400 inline-block mq450:text-lg mq450:leading-[32px] dark:text-white">
                  {t("about-main.aboutDescription2")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutMain.propTypes = {
  className: PropTypes.string,
};

export default AboutMain;
