/** @format */

import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GpsIcon, Frame108, Character1 } from "../assets";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = ({ className = "" }) => {
  const { t } = useTranslation();
  // References for elements to animate
  const headerRef = useRef(null);
  const textRefs = useRef([]);
  const iconRef = useRef(null);
  const characterRef = useRef(null);

  useEffect(() => {
    // Ensure visibility before animation
    gsap.set(headerRef.current, { opacity: 1, y: 0 });
    textRefs.current.forEach((ref) => {
      gsap.set(ref, { opacity: 1, x: 0 });
    });
    gsap.set(iconRef.current, { opacity: 1, y: 0 });
    gsap.set(characterRef.current, { opacity: 1, x: 0 });

    // Create animations with ScrollTrigger
    gsap.from(headerRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    textRefs.current.forEach((ref, index) => {
      gsap.from(ref, {
        scrollTrigger: {
          trigger: ref,
          start: "top 80%",
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.2,
      });
    });

    gsap.from(iconRef.current, {
      scrollTrigger: {
        trigger: iconRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "bounce.out",
    });

    gsap.from(characterRef.current, {
      scrollTrigger: {
        trigger: characterRef.current,
        start: "top 80%",
      },
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-start gap-[6px] w-full max-w-full text-left text-26xl text-darkslategray-400 dark:text-white font-gilroy-bold ${className}`}
    >
      <div className="w-full flex-1 relative bg-whitesmoke-200 dark:bg-[#0C0C0C] overflow-hidden h-auto min-h-[591px] mq750:min-h-[700px] mq450:min-h-[600px]">
        <div className="absolute top-[560px] left-0 w-full overflow-x-hidden flex items-start justify-between py-3 px-6 box-border gap-[20px] bg-gainsboro-300 dark:bg-lightdark mq750:top-[800px] mq450:top-[560px]">
          {[...Array(10)].map((_, idx) => (
            <div
              key={idx}
              className="h-[6px] w-[93px] relative bg-whitesmoke-300 dark:bg-[#323232] shrink-0 z-[1]"
            />
          ))}
        </div>
        <div className="absolute top-[50%] left-[120px] transform mq450:-translate-y-2/3 -translate-y-2/3 w-[60%] mq1050:w-[90%] flex flex-col items-start justify-start gap-[20px] max-w-full mq750:left-10 mq450:left-6 ">
          <h3
            ref={headerRef}
            className="m-0 self-stretch relative text-inherit font-semibold font-inherit bg-clip-text  inline-block text-17xl mq750:text-14xl mq450:text-8xl z-[5] text-limegreen dark:text-lime-100"
          >
            {t("about-us.aboutTitle")}
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-6xl font-poppins mq750:text-8xl mq450:text-xl ">
            <div
              ref={(el) => (textRefs.current[0] = el)}
              className="self-stretch relative leading-[40px] pr-4 text-justify mq750:leading-[35px] mq450:leading-[30px] mq450:text-lg mq1050:text-5xl"
            >
              {t("about-us.aboutDescription")}
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-5xl">
              {[
                t("about-us.aboutListItem1"),
                t("about-us.aboutListItem2"),
                t("about-us.aboutListItem3"),
              ].map((text, idx) => (
                <div
                  key={idx}
                  ref={(el) => (textRefs.current[idx + 1] = el)}
                  className=" self-stretch flex flex-row items-center justify-start gap-[15px] max-w-full mq450:flex-nowrap mq750:flex-wrap"
                >
                  <img
                    className="h-11 w-[42px] rounded-full overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src={Frame108}
                  />
                  <div className="relative leading-[30px] text-justify mq750:text-lg mq750:leading-[28px] mq450:text-base mq450:leading-[26px]">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img
          ref={iconRef}
          className="absolute top-[280px] right-[190px] w-[101px] h-[101px] block  mq750:w-[100px] mq750:h-[110px] mq450:w-[50px] mq450:h-[70px] mq450:top-[420px] mq450:right-[100px] "
          loading="lazy"
          alt=""
          src={GpsIcon}
        />
        <img
          ref={characterRef}
          className="absolute top-[410px] right-[130px] w-[403px] h-[172px] z-[2] mq750:w-[300px] mq750:h-[150px] mq450:w-[200px] mq450:h-[135px] mq450:top-[466px] mq450:right-[30px] "
          loading="lazy"
          alt=""
          src={Character1}
        />
      </div>
      <div className="w-full flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border ">
        <div className="self-stretch h-[9px] relative bg-whitesmoke-300 dark:bg-black hidden" />
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
