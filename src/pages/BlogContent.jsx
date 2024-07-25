/** @format */

import Navbar from "../components/Navbar";

import Footer2 from "../components/Footer2";

const BlogContent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[20px] leading-[normal] tracking-[normal] mq450:gap-[22px] mq800:gap-[45px]">
      <Navbar />



      <Footer2 />
    </div>
  );
};

export default BlogContent;