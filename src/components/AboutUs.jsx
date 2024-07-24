import PropTypes from "prop-types";
import {GpsIcon,Frame108,Character1} from "../assets"
const AboutUs = ({ className = "" }) => {
    // prev
  return (
    <div
      className={`flex flex-col items-center justify-start gap-[6px] w-full max-w-full text-left text-26xl text-darkslategray-400 font-gilroy-bold ${className}`}
    >
      <div className="w-full flex-1 relative bg-whitesmoke-200 overflow-hidden h-auto min-h-[591px] mq750:min-h-[480px] mq450:min-h-[510px]">
        <div className="absolute top-[550px] left-0 w-full overflow-x-hidden flex items-start justify-between py-4 px-6 box-border gap-[20px] bg-gainsboro-300 mq750:top-[420px] mq450:top-[474px]">
          {[...Array(10)].map((_, idx) => (
            <div
              key={idx}
              className="h-[9px] w-[93px] relative bg-whitesmoke-300 shrink-0 z-[1]"
            />
          ))}
        </div>
        <div className="absolute top-[50%] left-[120px] transform mq450:-translate-y-1/2 -translate-y-2/3 w-[60%] mq1050:w-[90%] flex flex-col items-start justify-start gap-[20px] max-w-full mq750:left-10 mq450:left-6">
          <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit bg-clip-text  inline-block text-17xl mq750:text-14xl mq450:text-8xl z-[5] text-limegreen">
            About Us
          </h3>
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-6xl font-poppins mq750:text-8xl mq450:text-xl ">
            <div className="self-stretch relative leading-[40px] pr-4 text-justify mq750:leading-[35px] mq450:leading-[30px] mq450:text-lg mq1050:text-5xl">
              Connect+ is an innovative ride-hailing platform that
              revolutionizes transportation by offering:
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-5xl">
              {[
                "transparent pricing and a unique bid system",
                "Designed for both passengers and drivers",
                "Connect+ ensures a seamless, safe, and convenient travel experience",
              ].map((text, idx) => (
                <div
                  key={idx}
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
          className="absolute top-[280px] right-[130px] w-[101px] h-[101px] block mq1050:hidden mq750:w-[100px] mq750:h-[110px] mq450:w-[80px] mq450:h-[100px]"
          loading="lazy"
          alt=""
          src={GpsIcon}
        />
        <img
          className="absolute top-[390px] right-[130px] w-[403px] h-[172px] z-[2] mq750:w-[300px] mq750:h-[150px] mq450:w-[200px] mq450:h-[100px] mq1050:hidden"
          loading="lazy"
          alt=""
          src={Character1}
        />
      </div>
      <div className="w-full flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border">
        <div className="self-stretch h-[9px] relative bg-whitesmoke-300" />
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
