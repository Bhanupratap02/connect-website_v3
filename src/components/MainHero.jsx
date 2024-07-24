import PropTypes from "prop-types";
import HeroSection2 from "./HeroSection2";
import Navbar from "./Navbar";
import HeroSection3 from "./HeroSection3";
// prev ver
const MainHero = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[200px] box-border relative gap-[140px] max-w-full h-full text-left text-19xl text-limegreen font-poppins overflow-hidden ${className} 
      mq450:gap-[35px] mq450:pb-[50px] mq750:gap-[70px] mq1050:pb-[201px]`}
    >
      <Navbar />
      <div
        className="w-[683px] flex flex-row items-start justify-start py-0
        px-[65px] box-border max-w-full mq750:w-full mq750:px-[30px]
        mq450:w-full mq450:px-[20px] ml-8 mq1050:ml-0"
      >
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[45px]
          max-w-full mq750:gap-[22px] mq450:gap-[15px]"
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-[28px]  max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
              <div className=" relative inline-block z-[3] mq450:text-4xl mq1050:text-11xl">
                <span>
                  <span>Your Ride,</span>
                </span>
                <span className="text-23xl  text-darkslategray-400 font-gilroy-bold">
                  <span>
                    <span className="text-lime-100">{` `}</span>
                  </span>
                  <span className="uppercase">Just a Tap Away!</span>
                </span>
              </div>
              <div className="w-[497px] h-0.5 relative box-border max-w-full z-[3] border-t-[2px] border-solid border-darkslategray-400" />
            </div>
            <div
              className="relative inline-block max-w-full z-[3] text-16xl text-darkslategray-400 
            mq450:text-lg mq450:w-full mq1050:text-5xl"
            >
              <p className="m-0">
                <span className="leading-[50px] font-poppins text-darkslategray-400 text-11xl mq750:text-inherit">
                  Simplify Your Commute with<br/>
                  <i className="font-semibold text-transparent !bg-clip-text [background:linear-gradient(117.21deg,_#00ff00,_#009900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Instant Ride Bookings
                  </i>
                </span>
              </p>
              <p className="m-0 text-11xl mq750:text-inherit">
                <span className="leading-[42px]">
                  <span>from Your Phone.</span>
                </span>
              </p>
            </div>
          </div>

          <button className="cursor-pointer py-5 pr-[39px] pl-10 bg-gainsboro-200 rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[3] border-[1px] border-solid border-white hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
            <b className="relative text-16xl leading-[25px] font-poppins text-limegreen text-center">
              Book A Ride
            </b>
          </button>
      
        </div>
      </div>
      <HeroSection2 className="mq1050:hidden" />
      <HeroSection3 className="hidden mq1050:block" />
    </div>
  );
};

MainHero.propTypes = {
  className: PropTypes.string,
};

export default MainHero;
