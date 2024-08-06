/** @format */

import Card from "./Card";
import PropTypes from "prop-types";
import {
  Isolation2,
  Frame148,
  Frame1481,
  Frame1482,
  Building,
} from "../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);
const DriveSuccess = ({ className = "" }) => {
  const { t } = useTranslation();
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (cards) {
      gsap.fromTo(
        cards,
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
            trigger: cards[0].parentNode, // Trigger based on the parent element of all cards
            start: "top 80%", // Adjust start point as needed
            end: "bottom 20%", // Adjust end point as needed
            scrub: 1,
            toggleActions: "play none none reverse",
          },
          stagger: 0.2, // Stagger animation for each card
        }
      );
    }
  }, []);
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[70px]  box-border max-w-full text-left text-26xl text-darkslategray-400 dark:text-white font-poppins mq750:pb-[122px] mq750:box-border mq1050:pb-[87px] mq450:pb-[5px] mq750:px-[10px] mq1050:box-border ${className}`}
    >
      <div className="flex-1 bg-white dark:bg-black overflow-hidden flex flex-col items-start justify-start pt-[99px] px-[90px] pb-[90px] box-border relative gap-[90px] max-w-full z-[2] mq450:gap-[22px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[45px] mq750:pt-16 mq750:px-[45px] mq750:pb-[58px] mq750:box-border">
        <img
          className="w-[1940px] h-[747.1px] absolute !m-[0] bottom-[0px]  left-[-268.4px]"
          alt=""
          src={Isolation2}
        />
        <div className="w-[559px] flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="self-stretch h-[90px] relative leading-[55px] inline-block z-[1] mq450:text-8xl mq450:leading-[33px] mq1050:text-17xl mq1050:leading-[44px]">
            <p className="m-0">
              <span> {t("success.successTitle1")}</span>
              <b className="text-31xl font-poppins text-transparent !bg-clip-text [background:linear-gradient(131.74deg,_#00ff00,_#009900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                {t("success.successTitle2")}
              </b>
            </p>
            <p className="m-0">{t("success.successTitle3")}</p>
          </div>
          <div className="w-[385px] h-0.5 relative box-border max-w-full z-[1] border-t-[2px] border-solid border-darkslategray-400 dark:border-white" />
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[30px] grid-cols-[repeat(4,_minmax(216px,_1fr))] text-13xl lg:justify-center lg:grid-cols-[repeat(2,_minmax(216px,_374px))] mq750:gap-[18px] mq750:grid-cols-[minmax(216px,_1fr)]">
          {/* <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="h-[350px] relative rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] dark:[background:linear-gradient(124.1deg,_#161616,_#000)] box-border overflow-hidden z-[1] border-[1px] border-solid border-darkgray"
          >
            <div className="absolute top-[35px] left-[0px] leading-[35px] inline-block w-[185px] z-[1] mq450:text-lgi mq450:leading-[21px] mq1050:text-7xl mq1050:leading-[28px] text-8xl">
              {t("success.success1")}
            </div>
            <div className="absolute top-[-22px] left-[-27px] w-[314px] h-[391px]">
              <div className="absolute top-[0px] left-[0px] [filter:blur(300px)] rounded-[50%] bg-lime-400 w-[213px] h-[220px]" />
              <img
                className="absolute top-[169px] left-[15px] w-[267px] h-[222px] overflow-hidden z-[1]"
                loading="lazy"
                alt=""
                src={Frame148}
              />
            </div>
          </div> */}
          <Card
            ref={(el) => (cardRefs.current[0] = el)}
            easyPayments={t("success.success1")}
            frame148={Frame148}
            isBlur={true}
          />
          <Card
            ref={(el) => (cardRefs.current[1] = el)}
            easyPayments={t("success.success2")}
            frame148={Frame1481}
            isBlur={false}
          />
          <Card
            ref={(el) => (cardRefs.current[2] = el)}
            easyPayments={t("success.success3")}
            frame148={Frame1482}
            isBlur={false}
          />
          <Card
            ref={(el) => (cardRefs.current[3] = el)}
            easyPayments={t("success.success4")}
            frame148={Building}
            isBlur={false}
          />
          {/* <div className="rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] overflow-hidden flex flex-col items-start justify-start pt-[33px] px-0 pb-0 gap-[43px] z-[1] border-[1px] border-solid border-darkgray mq450:gap-[21px]">
            <div className="w-72 flex flex-row items-start justify-start py-0 pr-[37px] pl-[35px] box-border">
              <div className="flex-1 relative leading-[35px] mq450:text-lgi mq450:leading-[21px] mq1050:text-7xl mq1050:leading-[28px]">
                Make the city your office
              </div>
            </div>
            <div className="w-72 overflow-hidden flex flex-col items-start justify-start pt-7 pb-px pr-px pl-[51px] box-border mq450:pl-5 mq450:box-border">
              <div className="w-[336px] h-[154px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[12.9px] pb-0 pr-[9px] pl-0 box-border max-w-[143%] z-[1]">
                <div className="h-[144.2px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[75.3px] left-[104.8px] w-14 h-[55.5px] object-contain"
                    alt=""
                    src="/group-24@2x.png"
                  />
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <img
                      className="absolute h-[55.41%] w-[56.65%] top-[42.65%] right-[43.35%] bottom-[1.94%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group-25.svg"
                    />
                    <img
                      className="absolute h-[91.19%] w-[8.17%] top-[6.87%] right-[67.81%] bottom-[1.94%] left-[24.01%] max-w-full overflow-hidden max-h-full z-[1]"
                      alt=""
                      src="/group-26.svg"
                    />
                    <img
                      className="absolute h-[98.06%] w-[13.29%] top-[0%] right-[6.44%] bottom-[1.94%] left-[80.27%] max-w-full overflow-hidden max-h-full object-contain"
                      alt=""
                      src="/group-27@2x.png"
                    />
                    <img
                      className="absolute h-[75.66%] w-[26.14%] top-[22.4%] right-[21.92%] bottom-[1.94%] left-[51.95%] max-w-full overflow-hidden max-h-full z-[1]"
                      alt=""
                      src="/group-28.svg"
                    />
                    <img
                      className="absolute h-[56.66%] w-[7.54%] top-[41.4%] right-[2.25%] bottom-[1.94%] left-[90.21%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                      alt=""
                      src="/group-29@2x.png"
                    />
                    <div className="absolute h-[35.02%] w-[52.22%] top-[63.11%] right-[16.44%] bottom-[1.87%] left-[31.35%] z-[2]">
                      <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[100.6px]">
                        <img
                          className="absolute h-full w-[26.64%] top-[0%] right-[0%] bottom-[0%] left-[73.36%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/group-30.svg"
                        />
                        <img
                          className="absolute h-[86.53%] w-[23.16%] top-[13.27%] right-[76.84%] bottom-[0.2%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/group-31.svg"
                        />
                        <div className="absolute h-[79.8%] w-[50.3%] top-[20%] right-[26.64%] bottom-[0.2%] left-[23.06%] z-[1]">
                          <img
                            className="absolute h-[83.62%] w-full top-[16.38%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/group-32.svg"
                          />
                          <img
                            className="absolute h-[16.38%] w-full top-[0%] right-[0%] bottom-[83.62%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector-7.svg"
                          />
                          <div className="absolute h-[71.46%] w-[83.6%] top-[28.54%] right-[8.3%] bottom-[0%] left-[8.1%] z-[1]">
                            <img
                              className="absolute h-[37.5%] w-[14.66%] top-[62.5%] right-[42.55%] bottom-[0%] left-[42.79%] max-w-full overflow-hidden max-h-full"
                              alt=""
                              src="/vector-8.svg"
                            />
                            <img
                              className="absolute top-[0px] left-[0px] w-[42.3px] h-[9.1px]"
                              alt=""
                              src="/group-33.svg"
                            />
                            <img
                              className="absolute top-[16.8px] left-[0px] w-[42.3px] h-[9.1px] z-[1]"
                              alt=""
                              src="/group-34.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className="absolute top-[6.7px] left-[151.2px] w-[23.3px] h-[43.7px]"
                        alt=""
                        src="/group-35.svg"
                      />
                      <div className="absolute top-[10.1px] left-[100.6px] w-[50.6px] h-[40.3px]">
                        <img
                          className="absolute h-[83.62%] w-full top-[16.38%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/group-32.svg"
                        />
                        <img
                          className="absolute h-[16.38%] w-full top-[0%] right-[0%] bottom-[83.62%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector-9.svg"
                        />
                        <div className="absolute h-[71.46%] w-[83.6%] top-[28.54%] right-[8.1%] bottom-[0%] left-[8.3%] z-[1]">
                          <img
                            className="absolute h-[37.5%] w-[14.66%] top-[62.5%] right-[42.79%] bottom-[0%] left-[42.55%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector-10.svg"
                          />
                          <img
                            className="absolute top-[0px] left-[0px] w-[42.3px] h-[9.1px]"
                            alt=""
                            src="/group-33.svg"
                          />
                          <img
                            className="absolute top-[16.8px] left-[0px] w-[42.3px] h-[9.1px] z-[1]"
                            alt=""
                            src="/group-34.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="absolute h-[79.8%] w-[90.42%] top-[20%] right-[-0.06%] bottom-[0.2%] left-[9.63%] max-w-full overflow-hidden max-h-full z-[2]"
                        alt=""
                        src="/group-39.svg"
                      />
                    </div>
                    <div className="absolute h-[22.4%] w-[19.64%] top-[77.6%] right-[0%] bottom-[0%] left-[80.36%] z-[2]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <img
                          className="absolute top-[22.7px] left-[3.1px] w-[10.3px] h-[9.6px]"
                          alt=""
                          src="/group-40.svg"
                        />
                        <img
                          className="absolute top-[22.7px] left-[44.2px] w-[10.3px] h-[9.6px]"
                          alt=""
                          src="/group-41.svg"
                        />
                        <img
                          className="absolute h-[91.64%] w-full top-[0%] right-[0%] bottom-[8.36%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/group-42.svg"
                        />
                        <div className="absolute h-[76.47%] w-[95.88%] top-[6.81%] right-[0%] bottom-[16.72%] left-[4.12%] z-[2]">
                          <img
                            className="absolute top-[21.1px] left-[11.8px] w-[29px] h-[3.1px] mix-blend-multiply"
                            alt=""
                            src="/group-43.svg"
                          />
                          <img
                            className="absolute top-[6.6px] left-[0px] w-[62.9px] h-1"
                            alt=""
                            src="/group-44.svg"
                          />
                          <img
                            className="absolute top-[0px] left-[2.9px] w-14 h-[5.3px]"
                            alt=""
                            src="/group-45.svg"
                          />
                          <img
                            className="absolute top-[11.7px] left-[2px] w-[58.1px] h-[13px] z-[1]"
                            alt=""
                            src="/group-46.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="absolute h-[91.64%] w-[51.52%] top-[0%] right-[0%] bottom-[8.36%] left-[48.48%] max-w-full overflow-hidden max-h-full mix-blend-multiply z-[3]"
                        alt=""
                        src="/vector-11.svg"
                      />
                    </div>
                    <img
                      className="absolute h-[19.28%] w-[3.53%] top-[78.85%] right-[74.97%] bottom-[1.87%] left-[21.5%] max-w-full overflow-hidden max-h-full z-[2]"
                      alt=""
                      src="/group-47.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[39px] relative rounded-tl-xl rounded-tr-none rounded-b-none bg-darkslategray-100 overflow-hidden shrink-0 z-[2]" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

DriveSuccess.propTypes = {
  className: PropTypes.string,
};

export default DriveSuccess;
