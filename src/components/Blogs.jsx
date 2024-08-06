/** @format */

import PropTypes from "prop-types";
import { Shield, Hamer, Hand } from "../assets";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { fetchPosts } from "../utils/api";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);
const Blogs = ({ className = "" }) => {
  const { t } = useTranslation();
  const cardRefs = useRef([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const posts = await fetchPosts(); // Fetch posts from the WordPress API
      setBlogs(posts.slice(0, 3)); // Only take the first three posts for display
    };

    getBlogs();
  }, []);

  useEffect(() => {
    const cards = cardRefs.current;
    if (cards) {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards[0]?.parentNode, // Trigger based on the parent element of all cards
            start: "top 80%", // Adjust start point as needed
            end: "bottom 20%", // Adjust end point as needed
            scrub: 1,
            toggleActions: "play none none reverse",
          },
          stagger: 0.2, // Stagger animation for each card
        }
      );
    }
  }, [blogs]);
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full text-left text-6xl text-darkslategray-400 dark:text-white font-poppins px-[120px] mq450:items-center mq450:px-[20px] my-12 mq450:my-6 ${className}`}
    >
      <div className="my-1 mx-2 mq450:mx-0">
        <div className="h-[35px] relative leading-[55px] inline-block mq450:text-8xl mq450:leading-[33px] mq800:text-17xl mq800:leading-[44px] mb-6 mx-8 pb-2 ">
          <span className="text-31xl pr-2">{t("blogs-section.blogsTitle1")}</span>
          <b className="text-31xl pl-1 text-transparent !bg-clip-text [background:linear-gradient(131.74deg,_#00ff00,_#009900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            {t("blogs-section.blogsTitle2")}
          </b>
        </div>
        <div className="w-[80%]  h-0.5 relative box-border max-w-full z-[1] border-t-[2px] border-solid border-darkslategray-400 dark:border-white ml-9 mq450:ml-5 mq450:w-[280px]" />
      </div>

      <div className="self-stretch grid gap-[30px]  mq750:grid-cols-1 mq1050:grid-cols-2 grid-cols-3 max-w-full text-left text-3xl text-darkslategray-400 font-poppins px-4">
        {blogs?.map((blog, index) => (
          <BlogCard
            key={blog?.id}
            ref={(el) => (cardRefs.current[index] = el)}
            id={blog?.id}
            title={blog?.title?.rendered?.split(":")[0]}
            description={
              blog?.title.rendered?.split(":")[1] &&
              `:${blog?.title?.rendered?.split(":")[1]}`
            }
            // description={blog.excerpt.rendered.replace(/<[^>]+>/g, "")} // Remove HTML tags from excerpt
            imgSrc={
              blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
            }
          />
        ))}
      </div>
      <Link to={"/blogs"} className="text-inherit no-underline">
        <button className="cursor-pointer mt-2 mx-8 pt-[27px] pb-[26px] pr-5 pl-[21px] bg-gainsboro-200 w-[300px] rounded-xl box-border overflow-hidden flex flex-row items-center justify-center whitespace-nowrap max-w-full border-[1px] border-solid border-white hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100 mq450:mx-0] dark:bg-darkslategray-400 ">
          <b className="relative text-13xl leading-[25px] font-poppins text-limegreen dark:text-lime-100 text-center mq450:text-4xl">
            {t("blogs-section.blogButton")}
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
