/** @format */

import PropTypes from "prop-types";
import { Shield, Hamer, Hand, Bulb, Globe, Coin, Taxi7 } from "../assets";
import BlogCard from "./BlogCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { fetchPosts } from "../utils/api";
gsap.registerPlugin(ScrollTrigger);
// const blogs = [
//   {
//     id: 1,
//     title: "Empowering Passengers and Drivers:",
//     description: "The Connect Bid System",
//     imgSrc: Hamer,
//   },
//   {
//     id: 2,
//     title: "Connect+ Real Time Tracking:",
//     description: "Enhancing Safety and Experience",
//     imgSrc: Shield,
//   },
//   {
//     id: 3,
//     title: "Connect+ Bid System:",
//     description: "Empowering Passengers and Drivers Alike",
//     imgSrc: Hand,
//   },
//   {
//     id: 4,
//     title: "Connect: Revolutionizing the Ride-Hailing Landscape in the UK with",
//     description: "Innovation and User-Centric Solutions",
//     imgSrc: Bulb,
//   },
//   {
//     id: 5,
//     title: "Eco-Friendly Travel with Connect+:",
//     description: "Sustainable Choices for a Greener Future",
//     imgSrc: Globe,
//   },
//   {
//     id: 6,
//     title: "Transparent Pricing with Connect+:",
//     description: "No More Fare Surprises",
//     imgSrc: Coin,
//   },
//   {
//     id: 7,
//     title: "Introducing Connect+:",
//     description: "The Future of Ride-Hailing in the UK",
//     imgSrc: Taxi7,
//   },
// ];
const BlogsMain = ({ className = "" }) => {
  const [blogs, setBlogs] = useState([]);
  const blogRefs = useRef([]);

  useEffect(() => {
    const getBlogs = async () => {
      const posts = await fetchPosts();
      setBlogs(posts);
    };

    getBlogs();
  }, []);

  useEffect(() => {
    const blogs = blogRefs.current;

    blogs.forEach((blog, index) => {
      gsap.fromTo(
        blog,
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
            trigger: blog,
            start: "top 95%",
            end: "bottom 40%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2, // Stagger animation for each blog card
        }
      );
    });
  }, []);
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full text-left text-6xl text-darkslategray-400 font-poppins px-[120px] mq450:items-center mb-4 mq450:px-[20px] mq450:my-2 ${className}`}
    >
      <div className="w-full mx-2 mq450:mx-0">
        <div className="h-[35px] relative leading-[55px] inline-block mq450:text-11xl mq450:leading-[33px] mq750:text-17xl mq750:leading-[44px] mb-6 mq750:mb-1 mx-8 text-[60px] font-gilroy-bold pb-8">
          <b className="h-[38px] text-inherit font-normal font-inherit text-limegreen dark:text-lime-100 mq450:text-14xl mq750:text-26xl">
            Blogs
          </b>
        </div>
        <div className="w-[95%] h-0.5 relative box-border max-w-full z-[1] border-t-[2px] border-solid border-darkslategray-400 ml-5 mr-10 mq450:ml-5 mq450:w-[280px] dark:border-white" />
      </div>

      <div className="self-stretch grid gap-[30px]  mq750:grid-cols-1 mq1050:grid-cols-2 grid-cols-3 ">
        {blogs.map((blog, index) => (
          <BlogCard
            key={blog?.id}
            id={blog?.id}
            title={blog?.title?.rendered?.split(":")[0]}
            description={
              blog?.title.rendered?.split(":")[1] &&
              `:${blog?.title.rendered?.split(":")[1]}`
            }
            imgSrc={
              blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
            }
            // {...blog}
            ref={(el) => (blogRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};

BlogsMain.propTypes = {
  className: PropTypes.string,
};

export default BlogsMain;
