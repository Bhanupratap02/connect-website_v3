/** @format */

import PropTypes from "prop-types";
import { Limousine, Character, BuildingGrp, DarkBuildingGrp } from "../assets";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
const HeroSection3 = ({ className = "" }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`relative w-full h-auto   ${className}`}>
      {/* <div className=" absolute top-[737.99px] left-[0px] bg-lime-100 w-full h-[584.8px] [transform:_rotate(-28.9deg)] [transform-origin:0_0] z-[2]" /> */}
      <div className="relative w-full h-[490px] bg-lime-100 transform z-[3] mq450:h-[280px] clip-triangle"></div>

      {/* <div className="relative w-full h-[460px]  bg-lime-100 transform  z-2 mq450:h-[280px]"></div> */}
      <div className="relative w-full h-[200px] -mt-[340px] mq450:-mt-[200px] flex flex-col items-center justify-center">
        <img
          className=" animate-subtleBounce w-[70%]   h-auto object-contain z-[3] rotate-[2.9deg]"
          alt=""
          src={Limousine}
        />
        <img
          className="absolute top-[15%] left-[46%] w-[20%] h-[74%]  z-[3] hidden mq450:block"
          alt=""
          src={Character}
        />
      </div>

      <img
        className=" absolute w-[100%] top-[-17%] h-auto object-contain z-1"
        alt=""
        src={theme === "light" ? BuildingGrp : DarkBuildingGrp}
      />
    </div>
  );
};

HeroSection3.propTypes = {
  className: PropTypes.string,
};

export default HeroSection3;
