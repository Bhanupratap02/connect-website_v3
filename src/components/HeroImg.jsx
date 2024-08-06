/** @format */

import PropTypes from "prop-types";
import {
  HeroBuildingBg,
  HeroCarImg,
  HeroCharacterImg,
  DarkHeroBuildingBg,
} from "../assets";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
const HeroImg = ({ className = "" }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-[1207.4px] h-[100%] absolute !m-[0] right-[0px]  ${className} `}
    >
      <div className="absolute top-[14%]  right-[-1%] w-[774px] h-[100%]">
        <img
          className="absolute top-[0px]  left-[0px] w-full h-full"
          alt=""
          src={theme === "light" ? HeroBuildingBg : DarkHeroBuildingBg}
        />
      </div>

      <div className="z-[5] absolute top-[54%] left-[400.4px] w-[635.5px] h-[426.2px]">
        <img
          className=" animate-subtleBounce absolute top-[3%] left-[10%] w-full h-full z-[5]"
          alt=""
          src={HeroCarImg}
        />
        <img
          className="absolute top-[25%] left-[1%] w-[30%] h-[60%] z-[5]"
          loading="lazy"
          alt=""
          src={HeroCharacterImg}
        />
      </div>
    </div>
  );
};

HeroImg.propTypes = {
  className: PropTypes.string,
};

export default HeroImg;
