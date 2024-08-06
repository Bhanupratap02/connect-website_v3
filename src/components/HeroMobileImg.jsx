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
      className={`w-full   h-[280px]  relative px-0 m-0 border-box  ${className} `}
    >
      <div className="absolute top-0 right-0 w-full  h-full">
        <img
          className="absolute mq450:top-0 top-[20%] mq450:overflow-hidden overflow-visible right-0 w-full h-full mq450:object-contain object-cover "
          alt=""
          src={theme === "light" ? HeroBuildingBg : DarkHeroBuildingBg}
        />
      </div>

      <div className="z-[5] absolute mq450:top-1/3 top-1/2  left-1/2 transform -translate-x-1/2  w-[80%] h-[242px]">
        <img
          className=" animate-subtleBounce absolute mq450:top-[-4%] top-0 left-[3%] w-full h-full z-[5] object-contain"
          alt=""
          src={HeroCarImg}
        />
        <img
          className="absolute mq450:top-[27%] left-[-12%] w-[30%] mq450:h-[50%]  h-[100%] z-[5]"
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
