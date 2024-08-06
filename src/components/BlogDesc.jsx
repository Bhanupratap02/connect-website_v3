/** @format */

import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Youtube, Twitter, Facebook, Instagram } from "../assets";
import blogData from "../data/blogData";
import { useEffect, useState } from "react";
import { fetchPostById } from "../utils/api";
import Spinner from "./Spinner";
import SkeletonLoader from "./SkeletonLoader";
const BlogDesc = ({ className = "" }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  //  useEffect(() => {
  //    const foundBlog = blogData.find((blog) => blog.id === parseInt(id));
  //    setBlog(foundBlog);
  //  }, [id]);
  useEffect(() => {
    const getBlog = async () => {
      const post = await fetchPostById(id);
      setBlog(post);
      // console.log(blog.content.rendered);
    };

    getBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {/* <SkeletonLoader /> Display SkeletonLoader while loading */}
      </div>
    );
  }
  const shareToSocialMedia = (platform) => {
    const url = window.location.href;
    const text = encodeURIComponent(blog?.title?.rendered);

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case "instagram":
        // Instagram does not have direct share URL like Facebook and Twitter
        shareUrl = `https://www.instagram.com/`;
        break;
      case "youtube":
        // YouTube does not have direct share URL like Facebook and Twitter
        shareUrl = `https://www.youtube.com/`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };

  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item?.type === "paragraph") {
        return (
          <div
            key={index}
            className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-col mq450:items-start mq450:justify-between"
          >
            <div className="w-[100%] flex flex-col items-start justify-start gap-[16px] max-w-full">
              {item?.title && (
                <div className="relative leading-[35px] font-semibold inline-block max-w-full mq450:text-lg mq450:leading-[21px] mq750:text-5xl mq750:leading-[28px]">
                  {item?.title}
                </div>
              )}
              <div className="self-stretch relative text-3xl leading-[40px] inline-block mq450:text-lgi mq450:leading-[32px]">
                {item?.text}
              </div>
            </div>
            {item?.image && index === 0 && (
              <div className="flex flex-col items-start justify-start pt-[25.5px] px-0 pb-0 ">
                <img
                  src={item?.image}
                  alt={""}
                  className="w-[257px] h-[257px] relative rounded-21xl overflow-hidden shrink-0 "
                />
              </div>
            )}
          </div>
        );
      } else if (item?.type === "list") {
        return (
          <div
            key={index}
            className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full"
          >
            <div className="relative leading-[35px] font-semibold inline-block max-w-full mq450:text-lg mq450:leading-[21px] mq750:text-5xl mq750:leading-[28px]">
              {item.title}
            </div>
            <ul className="self-stretch relative text-3xl leading-[40px] inline-block mq450:text-lgi mq450:leading-[32px] list-disc pl-5">
              {item.items.map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          </div>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <main className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
      <section className="w-[90%] flex flex-col items-start justify-center py-0 px-10 box-border max-w-full text-left text-[40px] text-darkslategray-400 font-poppins mx-10 mq450:w-full mq450:mx-0">
        <div className="h-[100%] w-[100%] relative leading-[60px] inline-block shrink-0 max-w-full px-10 mq450:text-5xl mq450:leading-[35px] mq750:text-[30px] mq750:leading-[50px] dark:text-white  mq450:px-0 mq450:w-full text-center font-bold ">
          <span> {blog.title.rendered.split(":")[0]}</span>
          <br />
          <span className="text-[40px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(131.74deg,_#00ff00,_#009900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq750:text-[30px] mq450:text-[24px]">
            <span>
              {" "}
              {blog.title.rendered.split(":")[1]
                ? `:${blog.title.rendered.split(":")[1]}`
                : ""}
            </span>
            {/* The Connect Bid System */}
          </span>
        </div>
      </section>
      <div
        className={`self-stretch flex flex-col items-center justify-center py-0 pr-0 pl-[180px] box-border max-w-screen text-left text-7xl text-darkslategray-400 dark:text-white font-poppins mq750:px-[22px] mq750:box-border mq1050:pl-[45px] mq1050:box-border ${className}`}
      >
        <div className="w-[100%] flex flex-col items-start justify-start gap-[96px] max-w-[108%] shrink-0 mq450:gap-[24px] mq750:gap-[48px]">
          <div className=" relative flex-1 rounded-21xl [background:linear-gradient(124.1deg,_#e2e2e2,_#fff)] box-border dark:[background:linear-gradient(124.1deg,_#161616,_#000)] overflow-hidden flex flex-col items-start justify-start py-[45px] px-[49px] gap-[20px] max-w-[calc(100%_-_189px)] border-[1px] border-solid border-darkgray mq750:gap-[30px] mq750:max-w-full mq1050:pt-5 mq1050:pb-5 mq1050:box-border mq1250:pt-[25px] mq1250:pb-[25px] mq1250:box-border">
            {/* {renderContent(blog.content)} */}
            {blog.featured_media !== 0 && (
              <div className="flex items-center justify-start w-full">
                <img
                  src={blog._embedded["wp:featuredmedia"][0].source_url}
                  alt={blog.title.rendered}
                  className="w-[100%] h-[467px] mq450:h-[257px] rounded-lg   object-fill"
                />
              </div>
            )}
            {/* {blog.featured_media !== 0 && (
              <div className="absolute top-0 right-0 pt-[25.5px] px-0 pb-0 ">
                <img
                  src={blog._embedded["wp:featuredmedia"][0].source_url}
                  alt={blog.title.rendered}
                  className="w-[257px] h-[257px] relative rounded-21xl overflow-hidden shrink-0"
                />
              </div>
            )} */}

            <div
              dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
              className="self-stretch text-3xl flex  flex-col items-start justify-start gap-[16px] max-w-full mq450:text-lgi"
            ></div>
            <div className="flex flex-row items-start justify-center gap-[20px] max-w-full text-center text-19xl text-darkslategray-100 font-font-awesome-5-brands mq750:flex-wrap">
              <div
                className="h-[82px] w-[82px] rounded-981xl bg-lime overflow-hidden shrink-0 flex flex-row items-center justify-center cursor-pointer"
                onClick={() => shareToSocialMedia("facebook")}
              >
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="w-[40px] h-[40px]"
                />
              </div>
              <div
                className="h-[82px] w-[82px] rounded-981xl bg-lime overflow-hidden shrink-0 flex flex-row items-center justify-center cursor-pointer"
                onClick={() => shareToSocialMedia("twitter")}
              >
                <img
                  src={Twitter}
                  alt="Twitter"
                  className="w-[40px] h-[40px]"
                />
              </div>
              <div
                className="h-[82px] w-[82px] rounded-981xl bg-lime overflow-hidden shrink-0 flex flex-row items-center justify-center cursor-pointer"
                onClick={() => shareToSocialMedia("instagram")}
              >
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="w-[40px] h-[40px]"
                />
              </div>
              <div
                className="h-[82px] w-[82px] rounded-981xl bg-lime overflow-hidden shrink-0 flex flex-row items-center justify-center cursor-pointer"
                onClick={() => shareToSocialMedia("youtube")}
              >
                <img
                  src={Youtube}
                  alt="YouTube"
                  className="w-[40px] h-[40px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

BlogDesc.propTypes = {
  className: PropTypes.string,
};

export default BlogDesc;
