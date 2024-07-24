import PropTypes from "prop-types";

const BlogCard = ({ title, description, imgSrc, className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border overflow-hidden flex flex-col items-start justify-start px-7  min-w-[300px] max-w-full border-[1px] border-solid border-darkgray ${className}`}
    >
      <div className="relative leading-[35px] inline-block text-darkslategray-400 font-poppins mq450:text-xl mq450:leading-[28px] text-left pt-8">
        {title}
        <span className="text-limegreen">{description}</span>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[40px] mq450:flex-wrap mq450:gap-[20px]">
        <div className="flex flex-col items-start justify-start pt-[69px] px-0 pb-0 box-border min-w-[150px] mq450:flex-1">
          <div className="relative [text-decoration:underline] leading-[40px] text-darkslategray-400 font-poppins mq450:text-xl mq450:leading-[32px] cursor-pointer">
            Read More...
          </div>
        </div>
        <img
          className="h-[178px] w-[140px] relative object-contain mq450:flex-1"
          loading="lazy"
          alt=""
          src={imgSrc}
        />
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BlogCard;
