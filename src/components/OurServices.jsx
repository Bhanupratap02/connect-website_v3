import PropTypes from "prop-types";
import { Isolation,Isolation1,TaxiShapes,Taxi,Vector6,Object } from "../assets";
const OurServices = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-[170px] mq450:px-[50px] mq1050:px-[60px] pb-[91px] box-border max-w-full text-left text-29xl text-darkslategray-400 font-gilroy-bold mq750:pb-[59px] mq750:box-border ${className}`}
    >
      <div className="w-[1260px] flex flex-col items-start justify-start gap-[86px] max-w-full mq450:gap-[21px] mq750:gap-[43px]">
        <div className="w-[281px] flex flex-col items-start justify-start gap-[25px]">
          <h2 className="m-0 self-stretch h-[34px] relative text-inherit font-normal font-inherit text-limegreen inline-block mq450:text-10xl mq1050:text-19xl">
            Our Services
          </h2>
          <div className="w-[253px] h-0.5 relative box-border border-t-[2px] border-solid border-darkslategray-400" />
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[36px] grid-cols-[repeat(4,_minmax(216px,_1fr))] text-16xl font-poppins mq450:grid-cols-[minmax(216px,_1fr)] mq750:gap-[18px] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(216px,_374px))]">
          <div className="h-[350px] relative rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border overflow-hidden border-[1px] border-solid border-darkgray">
            <div className="absolute top-[60px] left-[55px] leading-[35px] inline-block w-[134px] z-[1] mq450:text-2xl mq450:leading-[21px] mq1050:text-9xl mq1050:leading-[28px]">
              Car Rentals
            </div>
            <div className="absolute top-[-22px] left-[-27px] w-[351px] h-[342px]">
              <div className="absolute top-[0px] left-[0px] [filter:blur(300px)] rounded-[50%] bg-lime-400 w-[213px] h-[220px]" />
              <img
                className="absolute top-[207px] left-[60px] w-[211px] h-[135px] overflow-hidden object-contain z-[1]"
                loading="lazy"
                alt=""
                src={Isolation}
              />
            </div>
          </div>
          <div className="rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] overflow-hidden flex flex-col items-start justify-start pt-[58px] pb-0 pr-[15px] pl-[54px] gap-[90px] border-[1px] border-solid border-darkgray mq450:gap-[45px] mq450:pl-5 mq450:pt-[38px] mq450:box-border">
            <div className="relative leading-[35px] inline-block min-w-[94px] mq450:text-2xl mq450:leading-[21px] mq1050:text-9xl mq1050:leading-[28px]">
              Rides
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[20px]">
              <img
                className="h-[165px] w-[180px] relative overflow-hidden shrink-0"
                alt=""
                src={Isolation1}
              />
            </div>
          </div>
          <div className="rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] overflow-hidden flex flex-col items-start justify-start pt-[50px] px-[55px] pb-[22px] gap-[80px] border-[1px] border-solid border-darkgray mq450:pt-[38px] mq450:pb-[34px] mq450:box-border">
            <div className="relative leading-[35px] inline-block min-w-[108px] max-w-[61%] mq450:text-2xl mq450:leading-[21px] mq1050:text-9xl mq1050:leading-[28px]">
              Taxies
            </div>
            <div className="w-32 flex flex-row items-start justify-start py-0 px-5 box-border max-w-[72%]">
              <div className="w-[266px] flex flex-row items-start justify-start relative shrink-0">
                <img
                  className="h-[65px] w-[277.6px] absolute !m-[0] right-[-26.6px] bottom-[-16px] object-contain"
                  alt=""
                  src={TaxiShapes}
                />
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start  z-[1]">
                  <img
                    className="h-[164px] w-[90%] relative shrink-0"
                    alt=""
                    src={Taxi}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] overflow-hidden flex flex-col items-start justify-start pt-[58px] px-[55px] pb-[42px] gap-[47px] border-[1px] border-solid border-darkgray mq450:pt-[38px] mq450:pb-[27px] mq450:box-border">
            <div className="relative leading-[35px] inline-block min-w-[89px] max-w-[50%] mq450:text-2xl mq450:leading-[21px] mq1050:text-9xl mq1050:leading-[28px] ">
              Bikes
            </div>
            <div className="w-[106px] flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-[60%]">
              <div className="h-[169.2px] w-[237px] relative shrink-0">
                <img
                  className="absolute top-[140px] left-[1px] w-[219.1px] h-[25.2px] object-contain"
                  alt=""
                  src={Vector6}
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[190px] h-[174px] overflow-hidden z-[1]"
                  alt=""
                  src={Object}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

OurServices.propTypes = {
  className: PropTypes.string,
};

export default OurServices;
