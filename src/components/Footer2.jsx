/** @format */

import PropTypes from "prop-types";
import {
  Logo2,
  Objects,
  Frame16,
  SB,
  PlayStore,
  AppStore,
  DarkFooterImg,
  DarkAppStore,
  DarkPlayStore,
  Sun,
  Moon,
  
} from "../assets";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext.jsx";
import { useTranslation } from "react-i18next";
// prev version
const Footer2 = ({ className = "" }) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // if (!isDarkMode) {
    //   document.documentElement.classList.add("dark");
    // } else {
    //   document.documentElement.classList.remove("dark");
    // }
  };
  return (
    <section
      className={`self-stretch bg-white dark:bg-black  overflow-hidden flex flex-row items-start justify-start pt-9 px-[169px] pb-[72px] box-border gap-[203px] max-w-full text-left text-10xl text-darkslategray-200 dark:text-white font-poppins mq450:gap-[25px] mq750:gap-[51px] mq750:pt-[23px] mq750:pb-[47px] mq750:box-border mq1050:flex-wrap mq1050:gap-[101px] mq1050:justify-center mq1050:pl-[39px] mq1050:pr-[39px] mq1050:box-border ${className}`}
    >
      <div className="w-[839px] flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
        <div className="w-[771px] flex flex-col items-start justify-start gap-[25px] max-w-full">
          <div className="flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap mq450:flex-col mq450:items-center mq450:justify-center mq450:gap-2  mq750:hidden ">
            <a
              href="https://apps.apple.com/app/connect-plus/id6504287764"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="self-stretch w-52 relative  object-contain min-h-[80px] mq450:w-[90%] mq450:object-contain mq450:h-[30px] "
                loading="lazy"
                alt=""
                src={theme === "light" ? AppStore : DarkAppStore}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.connect.driverapp"
              className="mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                className="self-stretch w-[235px] relative  object-contain min-h-[80px] mq450:w-[80%] mq450:object-contain mq450:h-[40px] mq450:pl-[20px]"
                loading="lazy"
                alt=""
                src={theme === "light" ? PlayStore : DarkPlayStore}
              />
            </a>
          </div>
          <div className=" w-full flex items-center justify-start gap-[40px] mq450:flex-col-reverse mq450:items-end mq450:gap-8">
            <div className=" w-[60%] mq750:w-full self-stretch rounded-21xl bg-whitesmoke-100 dark:bg-darkslategray-400 box-border overflow-hidden flex flex-row items-center justify-between py-0  pl-6 max-w-[100%] gap-[20px] border-[1px] border-solid border-darkgray-200 mq450:max-w-full dark:text-white">
              <input
                type="text"
                placeholder={t("contact.emailPlaceholder")}
                className=" leading-[25px] text-xl dark:text-white dark:placeholder:text-white   box-border max-w-[100%] bg-transparent w-[100%] focus:outline-none shrink-1 mq450:max-w-full mq450:text-lg mq750:w-full"
              ></input>
              <img
                className="mq450:h-[40px] mq450:w-[60px]  w-[85px] relative overflow-hidden shrink-0"
                alt=""
                src={SB}
              />
            </div>
            <div className="relative flex items-center">
              <div
                className={`w-[95px] h-12 rounded-full p-1 bg-whitesmoke-100 border-2 border-[#BFBFBF] border-solid dark:bg-darkslategray-400 cursor-pointer transition-colors duration-300`}
                onClick={toggleTheme}
              >
                <div className="relative w-full h-full flex items-center">
                  <div
                    className={`absolute ${
                      theme === "light" ? "right-2" : "left-2"
                    } transition-all duration-300`}
                  >
                    {theme === "light" ? (
                      <img src={Sun} alt="Sun Icon" className="w-6 h-6" />
                    ) : (
                      <img src={Moon} alt="Moon Icon" className="w-5 h-5" />
                    )}
                  </div>
                  <div
                    className={`w-10 h-10 bg-[#00FF00] translate-y-[1px] rounded-full shadow-md transform transition-transform duration-300 ${
                      theme !== "light" ? "translate-x-14" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-darkslategray-300 dark:text-white font-gilroy-bold">
          <img
            className="   h-[441px] w-[1440.1px] absolute !m-[0] right-[-521.7px] bottom-[-72px]"
            alt=""
            src={theme === "light" ? Objects : DarkFooterImg}
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full z-[1]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full mq450:gap-[42px]">
                <div className="self-stretch h-6 mq450:h-8 relative leading-[65px] inline-block mq450:text-xl mq450:leading-normal mq750:text-9xl mq750:leading-[52px]">
                  <span>{t("footer.footerText1")} </span>
                  <span className="text-limegreen">
                    {t("footer.footerText2")}
                  </span>
                  <span>{`, `}</span>
                  <span className="text-limegreen">
                    {t("footer.footerText3")}
                  </span>
                  <span> {t("footer.footerText4")} </span>
                  <span className="text-limegreen">
                    {t("footer.footerText5")}
                  </span>
                  <span className="h-full"> {t("footer.footerText6")}</span>
                </div>
                <div className="w-[761px] flex flex-row items-center justify-start  gap-[20px] max-w-full text-4xl mq750:flex-wrap ">
                  {/* <div className="w-[77px] flex flex-col items-start justify-start gap-[22px] mq750:gap-[42px] ">
                    <a className="[text-decoration:none] h-[21px] relative leading-[65px] text-[inherit] inline-block min-w-[77px] mq450:text-lg mq450:leading-[60px] mq450:min-w-[40px] mq750:text-5xl mq750:leading-[52px] mq450:font-semibold font-semibold ">
                      Help
                    </a>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-xl font-poppins">
                      <a className="[text-decoration:none] self-stretch h-[15px] relative leading-[65px] text-[inherit] inline-block mq450:text-lg mq450:leading-[22px]">
                        FAQs
                      </a>
                      <a className="[text-decoration:none] h-[17px] relative leading-[65px] text-[inherit] inline-block min-w-[77px] mq450:text-lg mq450:leading-[22px]">
                        Quote
                      </a>
                    </div>
                  </div> */}
                  <div className="w-fit mq450:mt-5 flex flex-col items-start justify-start gap-[8px] mq750:gap-[12px]">
                    <div
                      className="self-stretch h-full relative 
                     
                    inline-block mq450:text-lg mq450:leading-[60px] mq750:text-5xl mq750:leading-[52px] mq450:font-semibold font-semibold"
                    >
                      {t("footer.footerLinkHeading")}
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-xl font-poppins">
                      <div className="self-stretch h-[17px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[22px]">
                        <Link
                          to="/privacy-policy"
                          className="text-inherit no-underline"
                        >
                          {t("footer.footerLink1")}
                        </Link>
                      </div>
                      <div className="h-[17px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[22px]">
                        <Link
                          to="/terms-and-conditions"
                          className="text-inherit no-underline"
                        >
                          {t("footer.footerLink2")}
                        </Link>
                      </div>
                      <div className="self-stretch h-[17px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[22px]">
                        {t("footer.footerLink3")}
                      </div>
                    </div>
                  </div>
                  {/* <div className="w-[180px] flex flex-col items-start justify-start gap-[22px] mq750:gap-[42px]">
                    <div className="self-stretch h-[21px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[60px] mq750:text-5xl mq750:leading-[52px] mq450:font-semibold font-semibold">
                      More from us
                    </div>
                    <div className="w-[139px] flex flex-col items-start justify-start gap-[25px] text-xl font-poppins">
                      <div className="self-stretch h-[17px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[22px]">
                        Our Story
                      </div>
                      <Link
                        to="/contact-us"
                        className="text-inherit no-underline h-[17px]"
                      >
                        <div className=" relative leading-[65px] inline-block mq450:text-lg mq450:leading-[22px]">
                          Contact Us
                        </div>
                      </Link>

                      <div className="self-stretch h-[17px] relative leading-[65px] inline-block whitespace-nowrap mq450:text-lg mq450:leading-[22px]">
                        Sign Up
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-[609px] flex flex-row items-center justify-start gap-[20px] max-w-full mq750:flex-wrap mq450:flex-nowrap pt-3">
                <img
                  className="h-[41px] w-[41px] relative rounded-[665.57px] overflow-hidden shrink-0 mq450:w-[30px] mq450:h-[30px]"
                  loading="lazy"
                  alt=""
                  src={Frame16}
                />
                <div className="h-[25px] flex-1 relative leading-[30px] inline-block min-w-[343px] max-w-full mq450:text-2xl mq450:leading-[27px] mq750:text-9xl mq750:leading-[36px] mq750:min-w-full text-6xl">
                  {t("footer.footerLocation")}
                </div>
              </div>
            </div>
            <div className="w-[484px] h-[21px] relative  leading-[35px] font-gilroy-light inline-block max-w-full mq450:text-xl mq450:leading-[27px] mq750:text-5xl mq750:leading-[36px] font-medium text-6xl">
              {t("footer.copyRight")}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[212px] w-[177px] flex flex-col items-start justify-start pt-[113px] px-0 pb-0 box-border mq1050:hidden z-5 overflow-visible">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain mix-blend-normal z-40"
          loading="lazy"
          alt=""
          src={Logo2}
        />
      </div>
    </section>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;
