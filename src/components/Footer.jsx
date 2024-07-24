import PropTypes from "prop-types";
import { Logo2,Objects,Frame16,SB } from "../assets";
const Footer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[697px] relative bg-white overflow-hidden shrink-0 max-w-full text-left text-16xl text-darkslategray-300 font-gilroy-bold mq750:h-auto mq750:min-h-[697] ${className}`}
    >
      <img
        className="absolute h-[63.27%] w-[100.01%] top-[36.73%] right-[0.02%] bottom-[0%] left-[-0.03%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={Objects}
      />
      <div className="absolute top-[218px] left-[79px] w-[839px] flex flex-col items-start justify-start gap-[40px] max-w-full z-[1]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full">
            <div className="self-stretch h-6 relative leading-[65px] inline-block mq450:text-2xl mq450:leading-[39px] mq1050:text-9xl mq1050:leading-[52px]">
              <span>Where </span>
              <span className="text-limegreen">convenience</span>
              <span>{`, `}</span>
              <span className="text-limegreen">safety</span>
              <span> and </span>
              <span className="text-limegreen">transparency</span>
              <span> meet.</span>
            </div>
            <div className="w-[781px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full text-11xl mq750:flex-wrap">
              <div className="w-[77px] flex flex-col items-start justify-start gap-[42px]">
                <a className="[text-decoration:none] h-[21px] relative leading-[65px] text-[inherit] inline-block min-w-[77px] mq450:text-lg mq450:leading-[39px] mq1050:text-5xl mq1050:leading-[52px]">
                  HELP
                </a>
                <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-6xl font-poppins">
                  <a className="[text-decoration:none] self-stretch h-[17px] relative leading-[65px] text-[inherit] inline-block mq450:text-xl mq450:leading-[52px]">
                    FAQs
                  </a>
                  <a className="[text-decoration:none] h-[17px] relative leading-[65px] text-[inherit] inline-block min-w-[77px] mq450:text-xl mq450:leading-[52px]">
                    Quote
                  </a>
                </div>
              </div>
              <div className="w-[244px] flex flex-col items-start justify-start gap-[41px]">
                <div className="self-stretch h-[21px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[39px] mq1050:text-5xl mq1050:leading-[52px]">
                  Legal Info
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-6xl font-poppins">
                  <div className="self-stretch h-[17px] relative leading-[65px] inline-block mq450:text-xl mq450:leading-[52px]">
                    Privacy Policy
                  </div>
                  <div className="h-[17px] relative leading-[65px] inline-block mq450:text-xl mq450:leading-[52px]">{`Terms & Conditions`}</div>
                  <div className="self-stretch h-[17px] relative leading-[65px] inline-block mq450:text-xl mq450:leading-[52px]">
                    Cookie Policy
                  </div>
                </div>
              </div>
              <div className="w-[180px] flex flex-col items-start justify-start gap-[40px]">
                <div className="self-stretch h-[21px] relative leading-[65px] inline-block mq450:text-lg mq450:leading-[39px] mq1050:text-5xl mq1050:leading-[52px]">
                  More from us
                </div>
                <div className="w-[139px] flex flex-col items-start justify-start gap-[25px] text-6xl font-poppins">
                  <div className="self-stretch h-[17px] relative leading-[65px] inline-block mq450:text-xl mq450:leading-[52px]">
                    Our Story
                  </div>
                  <div className="h-[17px] relative leading-[65px] inline-block mq450:text-xl mq450:leading-[52px]">
                    Contact Us
                  </div>
                  <div className="self-stretch h-[17px] relative leading-[65px] inline-block whitespace-nowrap mq450:text-xl mq450:leading-[52px]">
                    Sign Up
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[629px] flex flex-row flex-wrap items-center justify-start py-0 pr-5 pl-0 box-border gap-[20px] max-w-full">
            <img
              className="h-[61px] w-[61px] relative rounded-[665.57px] overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={Frame16}
            />
            <div className="h-[25px] flex-1 relative leading-[45px] inline-block min-w-[343px] max-w-full mq450:text-2xl mq450:leading-[27px] mq450:min-w-full mq1050:text-9xl mq1050:leading-[36px]">
              270-272, Bath Road, London, UK.
            </div>
          </div>
        </div>
        <div className="w-[484px] h-[21px] relative text-11xl leading-[45px] font-gilroy-light inline-block max-w-full mq450:text-lg mq450:leading-[27px] mq1050:text-5xl mq1050:leading-[36px]">
          Copyrights 2024 All Rights reserved
        </div>
      </div>
      <img
        className="absolute top-[149px] left-[1121px] w-[177px] h-[99px] object-cover mix-blend-normal"
        alt=""
        src={Logo2}
      />
      <div className="absolute top-[102px] left-[79px] rounded-21xl bg-whitesmoke-100 box-border w-[671px] overflow-hidden flex flex-row items-start justify-between py-0 pr-0.5 pl-6 max-w-full gap-[20px] text-darkslategray-200 font-poppins border-[1px] border-solid border-darkgray mq750:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border max-w-full">
          <div className="relative leading-[35px] mq450:text-2xl mq450:leading-[21px] mq1050:text-9xl mq1050:leading-[28px]">
            Enter your email address
          </div>
        </div>
        <img
          className="h-[75px] w-[114px] relative overflow-hidden shrink-0"
          alt=""
          src={SB}
        />
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
