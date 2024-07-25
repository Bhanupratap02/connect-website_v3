import PropTypes from "prop-types";
import { Shield, Hamer, Hand } from "../assets";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const Blogs = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full text-left text-6xl text-darkslategray-400 font-poppins px-[120px] mq450:items-center mq450:px-[20px] my-12 mq450:my-6 ${className}`}
    >
      <div className="my-4 mx-2 mq450:mx-0">
        <div className="h-[35px] relative leading-[55px] inline-block mq450:text-8xl mq450:leading-[33px] mq800:text-17xl mq800:leading-[44px] mb-6 mx-8">
          <span className="text-31xl">{`Our `}</span>
          <b className="text-31xl text-transparent !bg-clip-text [background:linear-gradient(131.74deg,_#00ff00,_#009900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Blogs
          </b>
        </div>
        <div className="w-[240px] h-0.5 relative box-border max-w-full z-[1] border-t-[2px] border-solid border-darkslategray-400 ml-9 mq450:ml-5 mq450:w-[280px]" />
      </div>

      <div className="self-stretch flex flex-wrap items-start justify-center gap-[30px] max-w-full text-left text-3xl text-darkslategray-400 font-poppins px-4">
        <BlogCard
          title={`Empowering Passengers and Drivers: `}
          description={`The Connect Bid System`}
          imgSrc={Shield}
        />
        <BlogCard
          title={`Connect+ Real Time Tracking: `}
          description={`Enhancing Safety and Experience`}
          imgSrc={Hand}
        />
        <BlogCard
          title={`Connect+ Bid System: `}
          description={`Empowering Passengers and Drivers Alike`}
          imgSrc={Hamer}
        />
      </div>
      <Link to={"/blogs"} className="text-inherit no-underline">
        <button className="cursor-pointer mt-6 mx-8 pt-[27px] pb-[26px] pr-5 pl-[21px] bg-gainsboro-200 w-[300px] rounded-xl box-border overflow-hidden flex flex-row items-center justify-center whitespace-nowrap max-w-full border-[1px] border-solid border-white hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100 mq450:mx-0]">
          <b className="relative text-13xl leading-[25px] font-poppins text-limegreen text-center mq450:text-4xl">
            Read More
          </b>
        </button>
      </Link>
    </div>
  );
};

Blogs.propTypes = {
  className: PropTypes.string,
};

export default Blogs;
