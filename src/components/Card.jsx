/** @format */

import React from "react";
import PropTypes from "prop-types";

const Card = React.forwardRef(
  ({ className = "", easyPayments, frame148,isBlur = true }, ref) => {
    return (
      <div
        ref={ref}
        className={`h-[350px] rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] dark:[background:linear-gradient(124.1deg,_#161616,_#000)] box-border overflow-hidden flex flex-col items-start justify-start pt-[75px] px-0 pb-px gap-[42px] z-[1] text-left text-8xl text-darkslategray-400 dark:text-white font-poppins border-[1px] border-solid border-darkgray mq450:gap-[21px] dark:border-gray-300 ${className}`}
      >
        <div className="w-72 flex flex-row items-start justify-start py-0 pr-[38px] pl-[10px] box-border">
          <div className="flex-1 relative text-7xl leading-[35px] mq450:text-lgi mq450:leading-[21px] mq1050:text-7xl mq1050:leading-[28px]">
            {easyPayments}
          </div>
        </div>
        {isBlur && (
          <div className="absolute top-[-22px] left-[-27px] w-[351px] h-[342px]">
            <div className="absolute top-[0px] left-[0px] [filter:blur(300px)] rounded-[50%] bg-lime-100 w-[213px] h-[220px]" />
          </div>
        )}

        <img
          className="w-[299px]  flex-1 relative max-h-full overflow-hidden"
          alt=""
          src={frame148}
        />
      </div>
    );
  }
);

Card.propTypes = {
  className: PropTypes.string,
  easyPayments: PropTypes.string,
  frame148: PropTypes.string,
  isBlur: PropTypes.bool,
};

export default Card;
