import PropTypes from "prop-types";
import { Logo2, Objects, Frame16, SB ,PlayStore,AppStore} from "../assets";
import { Link } from "react-router-dom";
// prev version
const Footer2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pt-9 px-[179px] pb-[72px] box-border gap-[203px] max-w-full text-left text-10xl text-darkslategray-200 font-poppins mq450:gap-[25px] mq750:gap-[51px] mq750:pt-[23px] mq750:pb-[47px] mq750:box-border mq1050:flex-wrap mq1050:gap-[101px] mq1050:justify-center mq1050:pl-[39px] mq1050:pr-[39px] mq1050:box-border ${className}`}
    >
      <div className="w-[839px] flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
        <div className="w-[671px] flex flex-col items-start justify-start gap-[25px] max-w-full">
          <div className="flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap mq450:flex-col mq450:items-center mq450:justify-center mq450:gap-2 ">
            <a
              href="https://apps.apple.com/app/connect-plus/id6504287764"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="self-stretch w-52 relative  object-contain min-h-[80px] mq450:w-[90%] mq450:object-contain mq450:h-[30px] "
                loading="lazy"
                alt=""
                src={AppStore}
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
                src={PlayStore}
              />
            </a>
          </div>
          <div className="self-stretch rounded-21xl bg-whitesmoke-100 box-border overflow-hidden flex flex-row items-center justify-between py-0  pl-6 max-w-[80%] gap-[20px] border-[1px] border-solid border-darkgray-200 mq450:max-w-full">
            <input
              type="text"
              placeholder="Enter your email address"
              className=" leading-[35px] text-9xl  box-border max-w-[80%] bg-transparent w-full focus:outline-none shrink-1 mq450:max-w-full mq450:text-lg "
            >
              {/* <div className="relative leading-[35px] mq450:text-2xl mq450:leading-[21px] mq750:text-9xl mq750:leading-[28px]">
                Enter your email address
              </div> */}
            </input>
            <img
              className="mq450:h-[40px] mq450:w-[60px]  w-[95px] relative overflow-hidden shrink-0"
              alt=""
              src={SB}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-darkslategray-300 font-gilroy-bold">
          <img
            className="h-[441px] w-[1440.1px] absolute !m-[0] right-[-521.7px] bottom-[-72px]"
            alt=""
            src={Objects}
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full z-[1]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full mq450:gap-[42px]">
                <div className="self-stretch h-6 relative leading-[65px] inline-block mq450:text-2xl mq450:leading-[39px] mq750:text-9xl mq750:leading-[52px]">
                  <span>Where </span>
                  <span className="text-limegreen">convenience</span>
                  <span>{`, `}</span>
                  <span className="text-limegreen">safety</span>
                  <span> and </span>
                  <span className="text-limegreen">transparency</span>
                  <span> meet.</span>
                </div>
                <div className="w-[761px] flex flex-row items-start justify-between gap-[20px] max-w-full text-4xl mq750:flex-wrap ">
                  <div className="w-[77px] flex flex-col items-start justify-start gap-[22px] mq750:gap-[42px] ">
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
                  </div>
                  <div className="w-[244px] flex flex-col items-start justify-start gap-[22px] mq750:gap-[42px]">
                    <div className="self-stretch h-[21px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[60px] mq750:text-5xl mq750:leading-[52px] mq450:font-semibold font-semibold">
                      Legal Info
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-xl font-poppins">
                      <div className="self-stretch h-[17px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[22px]">
                        <Link
                          to="/privacy-policy"
                          className="text-inherit no-underline"
                        >
                          Privacy Policy
                        </Link>
                      </div>
                      <div className="h-[17px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[22px]">
                        <Link
                          to="/terms-and-conditions"
                          className="text-inherit no-underline"
                        >{`Terms & Conditions`}</Link>
                      </div>
                      <div className="self-stretch h-[17px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[22px]">
                        Cookie Policy
                      </div>
                    </div>
                  </div>
                  <div className="w-[180px] flex flex-col items-start justify-start gap-[22px] mq750:gap-[42px]">
                    <div className="self-stretch h-[21px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[60px] mq750:text-5xl mq750:leading-[52px] mq450:font-semibold font-semibold">
                      More from us
                    </div>
                    <div className="w-[139px] flex flex-col items-start justify-start gap-[25px] text-xl font-poppins">
                      <div className="self-stretch h-[17px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[22px]">
                        Our Story
                      </div>
                      <div className="h-[17px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[22px]">
                        Contact Us
                      </div>
                      <div className="self-stretch h-[17px] relative leading-[65px] inline-block whitespace-nowrap mq450:text-lg mq450:leading-[22px]">
                        Sign Up
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[609px] flex flex-row items-center justify-start gap-[20px] max-w-full mq750:flex-wrap mq450:flex-nowrap">
                <img
                  className="h-[41px] w-[41px] relative rounded-[665.57px] overflow-hidden shrink-0 mq450:w-[30px] mq450:h-[30px]"
                  loading="lazy"
                  alt=""
                  src={Frame16}
                />
                <div className="h-[25px] flex-1 relative leading-[30px] inline-block min-w-[343px] max-w-full mq450:text-2xl mq450:leading-[27px] mq750:text-9xl mq750:leading-[36px] mq750:min-w-full text-6xl">
                  270-272, Bath Road, London, UK.
                </div>
              </div>
            </div>
            <div className="w-[484px] h-[21px] relative  leading-[35px] font-gilroy-light inline-block max-w-full mq450:text-xl mq450:leading-[27px] mq750:text-5xl mq750:leading-[36px] font-medium text-6xl">
              Copyrights 2024 All Rights reserved
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
