import PropTypes from "prop-types";
import { BuildingGrp,Limousine,Character,Shadow2x } from "../assets";
const HeroSection2 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1207.4px] h-[1250.1px] absolute !m-[0] right-[0px] bottom-[-512.1px] ${className} `}
    >
      <div className="absolute top-[0px]  left-[446.4px] w-[744px] h-[490px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full"
          alt=""
          src={BuildingGrp}
        />
      </div>
      <div className="absolute top-[737.99px] left-[0px] bg-lime-100 w-[1380.6px] h-[584.8px] [transform:_rotate(-28.9deg)] [transform-origin:0_0] z-[2]" />
      <img
        className="absolute top-[420px] left-[681.4px] w-[524px] h-[337.1px] object-contain z-[3]"
        alt=""
        src={Shadow2x}
      />
      <div className="absolute top-[268px] left-[529.4px] w-[635.5px] h-[426.2px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[5]"
          alt=""
          src={Limousine}
        />
        <img
          className="absolute top-[111.7px] left-[374.7px] w-[79px] h-[289.4px] z-[5]"
          loading="lazy"
          alt=""
          src={Character}
        />
      </div>
    </div>
  );
};

HeroSection2.propTypes = {
  className: PropTypes.string,
};

export default HeroSection2;
