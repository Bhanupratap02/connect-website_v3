/** @format */

import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ serviceKey, imageSrc, cardRef,isBlur=true }) => {
  const { t } = useTranslation();

  return (
    <div
      ref={cardRef}
      className="rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] dark:[background:linear-gradient(124.1deg,_#161616,_#000)] overflow-hidden flex flex-col items-start justify-start pt-[58px] pb-0 pr-[15px] pl-[10px] gap-[90px] border-[1px] border-solid border-darkgray dark:border-gray-300 mq450:gap-[45px] mq450:pl-5 mq450:pt-[38px] mq450:box-border"
      style={{
        backgroundColor: "rgba(0, 255, 0, 0.1)",
        maxHeight: "300px",
      }} // Temporary background color for debugging
    >
      <div className="relative text-7xl leading-[35px] inline-block min-w-[94px] mq450:text-2xl mq450:leading-[21px] mq1050:text-7xl mq1050:leading-[28px]">
        {t(`our-services.${serviceKey}`)}
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[20px] ">
        {isBlur && (
          <div className="absolute top-[-22px] left-[-27px] w-[351px] h-[342px]">
            <div
              className="absolute top-[0px] left-[0px] [filter:blur(300px)] rounded-[50%] bg-lime-100 
          w-[213px] h-[220px]"
            />
          </div>
        )}

        <img
          className="h-[165px] w-[260px] relative overflow-hidden shrink-0"
          alt=""
          src={imageSrc}
        />
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  serviceKey: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  cardRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),

  ]).isRequired,
  isBlur:PropTypes.string.isRequired
};

export default ServiceCard;
