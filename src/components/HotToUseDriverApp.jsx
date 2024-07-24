import PropTypes from "prop-types";

const HotToUseDriverApp = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-white overflow-hidden grid flex-row items-start justify-start pt-[90px] px-[87px] pb-0 box-border gap-[70px] leading-[normal] tracking-[normal] grid-cols-[repeat(3,_minmax(257px,_1fr))] lg:pl-[43px] lg:pr-[43px] lg:box-border lg:justify-center lg:grid-cols-[repeat(2,_minmax(257px,_446px))] mq450:gap-[35px] mq450:pl-[21px] mq450:pr-[21px] mq450:box-border mq450:grid-cols-[minmax(257px,_1fr)] mq750:gap-[17px] ${className}`}
    >
      <img
        className="relative max-w-full overflow-hidden max-h-full mq450:w-full"
        loading="lazy"
        alt=""
        src="/group-11712754621.svg"
      />
      <img
        className="relative max-w-full overflow-hidden max-h-full mq450:w-full"
        loading="lazy"
        alt=""
        src="/group-1171275465.svg"
      />
      <img
        className="relative max-w-full overflow-hidden max-h-full mq450:w-full"
        loading="lazy"
        alt=""
        src="/group-1171275464.svg"
      />
    </div>
  );
};

HotToUseDriverApp.propTypes = {
  className: PropTypes.string,
};

export default HotToUseDriverApp;
