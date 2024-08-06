import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = React.forwardRef(({ title, description, imgSrc, className = "",id },ref) => {
  return (
    <div
      ref={ref}
      className={`flex-1 rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] dark:[background:linear-gradient(124.1deg,_#161616,_#000)] box-border overflow-hidden flex flex-col items-start justify-start px-7  min-w-[300px] max-w-full border-[1px] border-solid border-darkgray ${className}`}
    >
      <div className="relative leading-[35px] inline-block text-darkslategray-400 dark:text-white font-poppins mq450:text-xl mq450:leading-[28px] text-left pt-8 text-2xl">
        {title}
        <span className="text-limegreen dark:text-lime-100">{description}</span>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[40px] mq450:flex-wrap mq450:gap-[20px] mq450:pb-5 ">
        <Link to={`/blog/${id}`} className="text-inherit no-underline">
          <div className="flex flex-col items-start justify-start pt-[69px] px-0 pb-0 box-border min-w-[150px] mq450:flex-1  mq450:flex-row-reverse">
            <div className="relative [text-decoration:underline] leading-[40px] text-darkslategray-400 font-poppins mq450:text-xl mq450:leading-[32px] cursor-pointer text-2xl text-right dark:text-white">
              Read More...
            </div>
          </div>
        </Link>
        {imgSrc && (
          <img
            className="h-[178px] w-[140px] relative object-contain mq450:flex-1 block bg-transparent"
            loading="lazy"
            alt=""
            src={imgSrc}
          />
        )}
      </div>
    </div>
  );
})

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BlogCard;
