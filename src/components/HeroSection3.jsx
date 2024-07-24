import PropTypes from "prop-types";
import { Limousine,Character } from "../assets";
const HeroSection3 = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-auto  ${className}`}>
      <div className="relative w-full h-[280px] bg-lime-100 transform  z-2"></div>
      <div className="relative w-full h-[200px] -mt-[250px] flex flex-col items-center justify-center">
        <img
          className="w-[85%] h-auto object-contain z-3 rotate-[2.9deg]"
          alt=""
          src={Limousine}
        />
        <img
          className="absolute top-[20%] w-[20%] h-[80%]  z-4"
          alt=""
          src={Character}
        />
      </div>
    </div>
  );
};

HeroSection3.propTypes = {
  className: PropTypes.string,
};

export default HeroSection3;
