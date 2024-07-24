import PropTypes from "prop-types";
import { useState } from "react";
import UseDriverApp from "./UseDriverApp";
import InstallApp from "./InstallApp";
const UseApp = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState("use");

  return (
    <section
      className={`self-stretch h-[797px] relative bg-white overflow-hidden shrink-2 max-w-full text-left text-26xl text-darkslategray-400 mx-[150px]font-poppins mq750:h-auto mq750:min-h-[797px] mq450:min-h-[990px]  ${className} `}
    >
      {/* <div className="absolute top-[77px] left-[calc(50%_-_783px)] [filter:blur(300px)] rounded-[50%] bg-lime-200 w-[185px] h-[183px]" />
      <div className="absolute top-[220px] left-[818px] w-[447px] h-[577px] mq750:w-[350px] mq750:h-[450px] mq450:w-[250px] mq450:left-0 mq450:top-[520px] mq450:h-[350px]">
        <div className="absolute top-[0px] left-[0px] [filter:blur(300px)] rounded-[50%] bg-lime-300 w-[447px] h-[461px] mq750:w-[350px] mq750:h-[350px] mq450:w-[250px] mq450:h-[250px] " />
        <img
          className="absolute top-[53px] left-[85px] w-[343px] h-[524px] z-[1] mq750:w-[280px] mq750:h-[400px] mq450:w-[200px] mq450:h-[300px]"
          loading="lazy"
          alt=""
          src="/group-1171275462.svg"
        />
      </div>
      <div className="absolute top-[279px] left-[90px] leading-[55px] mq450:text-8xl mq450:leading-[30px] mq450:top-[220px] mq450:left-[20px] mq1050:text-17xl mq1050:leading-[44px]">
        <span>{`How to use `}</span>
        <b className="text-31xl mq450:text-19xl text-transparent !bg-clip-text [background:linear-gradient(131.74deg,_#00ff00,_#009900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          driver App:
        </b>
      </div>
      <div className="absolute top-[329px] mq450:left-[20px] mq450:top-[295px] mq450:w-[340px] left-[90px] box-border w-[385px] h-0.5 border-t-[2px] border-solid border-darkslategray-400" />
      <div className="absolute top-[389px] left-[90px] w-[511px] h-[229px] flex flex-col items-start justify-start gap-[35px] max-w-full text-white mq750:h-auto mq750:min-h-[229px] mq450:left-[25px] mq450:top-[350px]">
        <div className="!m-[0] flex flex-row items-start justify-start gap-[12px] mq750:gap-[8px] mq750:flex-wrap">
          <div className="h-[53px] w-[53px] relative mq750:h-[40px] mq750:w-[40px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lime-100 w-full h-full" />
            <div className="absolute top-[11px] left-[19px] leading-[55px] font-medium z-[1] mq450:text-8xl mq450:leading-[33px] mq1050:text-17xl mq1050:leading-[44px] mq750:text-5xl mq750:leading-[30px]">
              1
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 text-11xl text-darkslategray-400 mq750:pt-2">
            <div className="h-[21px] relative leading-[50px] inline-block mq450:text-lg mq450:leading-[30px] mq1050:text-5xl mq1050:leading-[40px] mq750:text-2xl mq750:leading-[24px]">
              Sign Up/Log In.
            </div>
          </div>
        </div>
        <div className="!m-[0] flex flex-row items-start justify-start gap-[12px] max-w-full w-full mq750:gap-[8px] mq750:flex-wrap">
          <div className="h-[53px] w-[53px] relative mq750:h-[40px] mq750:w-[40px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lime-100 w-full h-full" />
            <div className="absolute top-[6px] left-[14px] leading-[55px] font-medium inline-block min-w-[26px] z-[1] mq450:text-8xl mq450:leading-[33px] mq1050:text-17xl mq1050:leading-[44px] mq750:text-5xl mq750:leading-[30px]">
              2
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full text-11xl text-darkslategray-400 mq750:pt-2">
            <div className="h-[21px] relative leading-[50px] inline-block mq450:text-lg mq450:leading-[30px] mq1050:text-5xl mq1050:leading-[40px] mq750:text-2xl mq750:leading-[24px]">
              Enter pick up or drop location.
            </div>
          </div>
        </div>
        <div className="!m-[0] flex flex-row items-start justify-start gap-[12px] mq750:gap-[8px] mq750:flex-wrap">
          <div className="h-[53px] w-[53px] relative mq750:h-[40px] mq750:w-[40px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lime-100 w-full h-full" />
            <div className="absolute top-[11px] left-[13px] leading-[55px] font-medium inline-block min-w-[27px] z-[1] mq450:text-8xl mq450:leading-[33px] mq1050:text-17xl mq1050:leading-[44px] mq750:text-5xl mq750:leading-[30px]">
              3
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 text-11xl text-darkslategray-400 mq750:pt-2">
            <div className="h-[21px] relative leading-[50px] inline-block mq450:text-lg mq450:leading-[30px] mq1050:text-5xl mq1050:leading-[40px] mq750:text-2xl mq750:leading-[24px]">
              Enjoy your ride.
            </div>
          </div>
        </div>
        <div className="w-px h-11 absolute !m-[0] top-[49px] left-[26.5px] box-border z-[1] border-r-[1px] border-solid border-lime-100" />
        <div className="w-px h-11 absolute !m-[0] top-[138px] left-[27px] box-border z-[1] border-r-[1px] border-solid border-lime-100" />
      </div> */}
      {activeTab === "use" ? <UseDriverApp /> : <InstallApp />}

      <div className="absolute top-[90px] left-[50%] transform -translate-x-1/2 rounded-381xl bg-whitesmoke-400 overflow-hidden flex flex-row items-start justify-center py-2 px-4 gap-[42px] max-w-full text-4xl mq750:flex-wrap mq750:gap-2 mq750:py-1 mq450:rounded-21xl mq750:w-[90%] mq1050:w-[70%] mq450:px-2 mq450:flex-nowrap">
        <div
          onClick={() => setActiveTab("install")}
          className={`flex flex-col items-start justify-start cursor-pointer pt-2 px-4 pb-0.5 rounded-21xl ${
            activeTab === "install"
              ? "bg-lime-100 text-darkslategray-300"
              : "bg-transparent"
          } mq450:text-base mq450:leading-[0px] mq1050:text-5xl mq1050:leading-[40px] mq750:text-xl mq750:leading-6`}
        >
          <div className="relative mq450:leading-[1] mq750:leading-[40px] mq450:py-1 leading-[50px] font-semibold">
            How to install
          </div>
        </div>
        <div
          onClick={() => setActiveTab("use")}
          className={`flex flex-col items-start justify-start cursor-pointer pt-2 px-4 pb-0.5 rounded-21xl ${
            activeTab === "use"
              ? "bg-lime-100 text-darkslategray-300"
              : "bg-transparent"
          } mq450:text-base mq450:leading-[0] mq1050:text-5xl mq1050:leading-[40px] mq750:text-xl mq750:leading-6`}
        >
          <div className="relative mq450:leading-[1] mq750:leading-[40px] mq450:py-1 leading-[50px] font-semibold z-[1]">
            How to use driver app
          </div>
        </div>
      </div>
    </section>
  );
};

UseApp.propTypes = {
  className: PropTypes.string,
};

export default UseApp;
