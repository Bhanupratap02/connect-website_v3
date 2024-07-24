import { Bike, CarRental, Ride, Taxi3 } from "../assets";
import PropTypes from "prop-types";

const ServicesMain = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-16xl text-green font-poppins ${className}`}
    >
      <div className="w-[1060px] flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px] mq450:gap-[30px] ">
        <div>
          <div className="w-[322px] flex flex-col items-start justify-start pt-0 px-0  box-border gap-[25px] max-w-full text-[60px] font-gilroy-bold ">
            <h1 className="m-0 self-stretch h-[38px] relative text-inherit font-normal font-inherit text-limegreen inline-block mq450:text-[45px] mq750:text-25xl mq450:text-center">
              Our Services
            </h1>
          </div>
        </div>

        <div className="w-[100%] h-0.5 relative box-border border-t-[2px] border-solid border-darkslategray-400 mq450:w-[80%] mq450:mx-8" />

        {/* Car Rentals */}
        <div className="self-stretch rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border overflow-hidden flex flex-row items-start justify-start py-[38px] px-[39px] max-w-full border-[1px] border-solid border-darkgray-200 mq750:flex-col mq450:mx-[10px]">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap mq750:flex-col ">
            <div className="w-[841px] flex flex-col items-start justify-start gap-[10px] max-w-full ">
              <h3 className="m-0 relative text-inherit leading-[35px] font-semibold font-inherit mq450:text-2xl mq450:leading-[21px] mq750:text-9xl mq750:leading-[28px]">
                Car Rentals
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[35px] text-5xl text-darkslategray-400 mq450:items-center">
                <div className="self-stretch h-[120px] relative leading-[30px] inline-block mq450:text-lg mq450:leading-[28px] text-2xl mq450:h-full">
                  Easily book your car online with our user-friendly system.
                  Explore our diverse range of rental cars to find the perfect
                  match for your journey. Whether you're planning a weekend
                  getaway, a business trip, or a family vacation, we have the
                  right vehicle to suit your needs.
                </div>
                <button className="cursor-pointer py-[15px] pr-[33px] pl-[34px] bg-gainsboro-200 rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-white hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                  <b className="relative text-3xl leading-[16px] inline-block font-poppins text-limegreen text-center min-w-[111px]">
                    Book Now
                  </b>
                </button>
              </div>
            </div>
            <img
              className="h-[247px] w-[250px] relative rounded-21xl overflow-hidden shrink-0 mq750:self-center mq450:w-[270px]"
              loading="lazy"
              alt=""
              src={CarRental}
            />
          </div>
        </div>

        {/* Rides */}
        <div className="self-stretch rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border overflow-hidden flex flex-row items-start justify-start py-8 px-[39px] max-w-full border-[1px] border-solid border-darkgray-200 mq750:flex-col mq450:mx-[10px]">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap mq750:flex-col">
            <img
              className="h-[247px] w-[250px] relative rounded-21xl overflow-hidden shrink-0 mq750:self-center"
              loading="lazy"
              alt=""
              src={Ride}
            />
            <div className="w-[841px] flex flex-col items-start justify-start gap-[10px] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[35px] font-semibold font-inherit mq450:text-2xl mq450:leading-[21px] mq750:text-9xl mq750:leading-[28px]">
                Rides
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[35px] text-5xl text-darkslategray-400">
                <div className="self-stretch h-[120px] relative leading-[30px] inline-block mq450:text-lg mq450:leading-[28px] text-2xl mq450:h-full">
                  Discover a new level of comfort and convenience with our ride
                  services. Whether you're commuting to work, heading to the
                  airport, or enjoying a night out, our reliable rides ensure
                  you reach your destination safely and on time.
                </div>
                <button className="cursor-pointer py-[15px] pr-[33px] pl-[34px] bg-gainsboro-200 rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-white hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                  <b className="relative text-3xl leading-[16px] inline-block font-poppins text-limegreen text-center min-w-[111px]">
                    Book Now
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Taxies */}
        <div className="self-stretch rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border overflow-hidden flex flex-row items-start justify-start py-[38px] px-[39px] max-w-full border-[1px] border-solid border-darkgray-200 mq750:flex-col mq450:mx-[10px]">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap mq750:flex-col">
            <div className="w-[841px] flex flex-col items-start justify-start gap-[10px] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[35px] font-semibold font-inherit mq450:text-2xl mq450:leading-[21px] mq750:text-9xl mq750:leading-[28px]">
                Taxies
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[35px] text-5xl text-darkslategray-400 mq450:items-center">
                <div className="self-stretch h-[120px] relative leading-[30px] inline-block mq450:text-lg mq450:leading-[28px] text-2xl mq450:h-full">
                  Our taxi services offer reliable and affordable rides to get
                  you where you need to go. With a fleet of well-maintained
                  vehicles and professional drivers, we ensure a comfortable and
                  safe ride every time.
                </div>
                <button className="cursor-pointer py-[15px] pr-[33px] pl-[34px] bg-gainsboro-200 rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-white hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                  <b className="relative text-3xl leading-[16px] inline-block font-poppins text-limegreen text-center min-w-[111px]">
                    Book Now
                  </b>
                </button>
              </div>
            </div>
            <img
              className="h-[257px] w-[257px] relative rounded-21xl overflow-hidden shrink-0 mq750:self-center"
              loading="lazy"
              alt=""
              src={Taxi3}
            />
          </div>
        </div>

        {/* Bikes */}
        <div className="self-stretch rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border overflow-hidden flex flex-row items-start justify-start py-8 px-[39px] max-w-full border-[1px] border-solid border-darkgray-200 mq750:flex-col mq450:mx-[10px]">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap mq750:flex-col">
            <img
              className="h-[247px] w-[250px] relative rounded-21xl overflow-hidden shrink-0 mq750:self-center"
              loading="lazy"
              alt=""
              src={Bike}
            />
            <div className="w-[841px] flex flex-col items-start justify-start gap-[10px] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[35px] font-semibold font-inherit mq450:text-2xl mq450:leading-[21px] mq750:text-9xl mq750:leading-[28px]">
                Bikes
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[35px] text-5xl text-darkslategray-400">
                <div className="self-stretch h-[120px] relative leading-[30px] inline-block mq450:text-lg mq450:leading-[28px] text-2xl mq450:h-full">
                  Experience the freedom and excitement of exploring the city on
                  two wheels with our bike rental services. Whether you're
                  commuting, running errands, or enjoying a leisurely ride, our
                  bikes offer a convenient and eco-friendly way to get around.
                </div>
                <button className="cursor-pointer py-[15px] pr-[33px] pl-[34px] bg-gainsboro-200 rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-white hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                  <b className="relative text-3xl leading-[16px] inline-block font-poppins text-limegreen text-center min-w-[111px]">
                    Book Now
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ServicesMain.propTypes = {
  className: PropTypes.string,
};

export default ServicesMain;
