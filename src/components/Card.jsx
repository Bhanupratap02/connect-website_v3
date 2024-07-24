import PropTypes from "prop-types";

const Card = ({ className = "", easyPayments, frame148 }) => {
  return (
    <div
      className={`h-[350px] rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border overflow-hidden flex flex-col items-start justify-start pt-[75px] px-0 pb-px gap-[42px] z-[1] text-left text-8xl text-darkslategray-400 font-poppins border-[1px] border-solid border-darkgray mq450:gap-[21px] ${className}`}
    >
      <div className="w-72 flex flex-row items-start justify-start py-0 pr-[38px] pl-[35px] box-border">
        <div className="flex-1 relative leading-[35px] mq450:text-lgi mq450:leading-[21px] mq1050:text-7xl mq1050:leading-[28px]">
          {easyPayments}
        </div>
      </div>
      <img
        className="w-[259px] flex-1 relative max-h-full overflow-hidden"
        alt=""
        src={frame148}
      />
    
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  easyPayments: PropTypes.string,
  frame148: PropTypes.string,
};

export default Card;
