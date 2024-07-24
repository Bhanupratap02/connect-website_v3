import PropTypes from "prop-types";

const HowToInstall = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-[797px] bg-white overflow-hidden leading-[normal] tracking-[normal] text-left text-26xl text-darkslategray-400 font-poppins mq450:h-auto mq450:min-h-[797] ${className}`}
    >
      <div className="absolute top-[77px] left-[calc(50%_-_783px)] [filter:blur(300px)] rounded-[50%] bg-lime-200 w-[185px] h-[183px]" />
      <div className="absolute top-[220px] left-[818px] w-[447px] h-[577px]">
        <div className="absolute top-[0px] left-[0px] [filter:blur(300px)] rounded-[50%] bg-lime-300 w-[447px] h-[461px]" />
        <img
          className="absolute top-[53px] left-[85px] w-[343px] h-[524px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-11712754622.svg"
        />
      </div>
      <div className="absolute top-[279px] left-[90px] leading-[55px] mq450:text-8xl mq450:leading-[33px] mq750:text-17xl mq750:leading-[44px]">
        <span>{`How to use `}</span>
        <b className="text-31xl text-transparent !bg-clip-text [background:linear-gradient(131.74deg,_#00ff00,_#009900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          install app:
        </b>
      </div>
      <div className="absolute top-[329px] left-[90px] box-border w-[385px] h-0.5 border-t-[2px] border-solid border-darkslategray-400" />
      <div className="absolute top-[389px] left-[90px] w-[511px] h-[229px] flex flex-col items-start justify-start gap-[35px] max-w-full text-white mq450:h-auto mq450:min-h-[229]">
        <div className="!m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[12px] max-w-full mq450:flex-wrap">
          <div className="h-[53px] w-[53px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lime-100 w-full h-full" />
            <div className="absolute top-[11px] left-[19px] leading-[55px] font-medium z-[1] mq450:text-8xl mq450:leading-[33px] mq750:text-17xl mq750:leading-[44px]">
              1
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full text-11xl text-darkslategray-400">
            <div className="h-[21px] relative leading-[50px] inline-block mq450:text-lg mq450:leading-[30px] mq750:text-5xl mq750:leading-[40px]">
              Open the Google Play Store.
            </div>
          </div>
        </div>
        <div className="w-full !m-[0] absolute top-[88px] left-[0px] flex flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
          <div className="h-[53px] w-[53px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lime-100 w-full h-full" />
            <div className="absolute top-[11px] left-[14px] leading-[55px] font-medium inline-block min-w-[26px] z-[1] mq450:text-8xl mq450:leading-[33px] mq750:text-17xl mq750:leading-[44px]">
              2
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 text-11xl text-darkslategray-400">
            <div className="h-[21px] relative leading-[50px] inline-block mq450:text-lg mq450:leading-[30px] mq750:text-5xl mq750:leading-[40px]">
              Search for the App.
            </div>
          </div>
        </div>
        <div className="!m-[0] absolute top-[176px] left-[0px] flex flex-row items-start justify-start gap-[11px]">
          <div className="h-[53px] w-[53px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lime-100 w-full h-full" />
            <div className="absolute top-[11px] left-[13px] leading-[55px] font-medium inline-block min-w-[27px] z-[1] mq450:text-8xl mq450:leading-[33px] mq750:text-17xl mq750:leading-[44px]">
              3
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 text-11xl text-darkslategray-400">
            <div className="h-[21px] relative leading-[50px] inline-block mq450:text-lg mq450:leading-[30px] mq750:text-5xl mq750:leading-[40px]">
              Install the App.
            </div>
          </div>
        </div>
        <div className="w-px h-11 absolute !m-[0] top-[49px] left-[26.5px] box-border z-[1] border-r-[1px] border-solid border-lime-100" />
        <div className="w-px h-11 absolute !m-[0] top-[138px] left-[27px] box-border z-[1] border-r-[1px] border-solid border-lime-100" />
      </div>
      <div className="absolute top-[90px] left-[calc(50%_-_354px)] rounded-381xl bg-whitesmoke-400 overflow-hidden flex flex-row items-start justify-start py-0 pr-[39px] pl-0 box-border gap-[28px] max-w-full text-11xl mq750:flex-wrap mq750:p-5 mq750:box-border">
        <div className="rounded-21xl bg-lime-100 overflow-hidden flex flex-row items-start justify-start pt-8 pb-0.5 pr-[50px] pl-14 whitespace-nowrap">
          <a className="[text-decoration:none] relative leading-[50px] font-semibold text-[inherit]">
            How to install
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border max-w-full">
          <div className="relative leading-[50px] font-semibold mq450:text-lg mq450:leading-[30px] mq750:text-5xl mq750:leading-[40px]">
            How to use driver app
          </div>
        </div>
      </div>
    </div>
  );
};

HowToInstall.propTypes = {
  className: PropTypes.string,
};

export default HowToInstall;
