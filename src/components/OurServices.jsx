/** @format */

import PropTypes from "prop-types";
import {
  Isolation,
  Isolation1,
  Taxi5,
  Vector6,
  Object,
  Taxi8,
  CarRental2,
  Rides
} from "../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "./ServiceCard";
gsap.registerPlugin(ScrollTrigger);

const OurServices = ({ className = "" }) => {
  const {t} = useTranslation()
  const cardRefs = useRef([]);

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
            trigger: cards[0].parentNode, // Trigger based on the parent element of all cards
            start: "top 98%", // Adjust start point as needed
            end: "bottom 40%", // Adjust end point as needed
            scrub: 1,
            toggleActions: "play none none reverse",
          },
          stagger: 0.2, // Stagger animation for each card
        }
      );
    }
  }, []);
  const services = [
    { key: "service1", image: CarRental2 },
    { key: "service2", image: Rides },
    { key: "service3", image: Taxi8 },
    { key: "service4", image: Object }, // Assuming Object is the correct image
  ];
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-[170px] mq450:px-[50px] mq1050:px-[60px] pb-[91px] box-border max-w-full text-left text-29xl text-darkslategray-400 dark:text-white font-gilroy-bold mq750:pb-[59px] mq750:box-border ${className}`}
    >
      <div className="w-[1260px] flex flex-col items-start justify-start gap-[66px] max-w-full mq450:gap-[21px] mq750:gap-[43px]">
        <div className="w-full flex flex-col items-start justify-start gap-[25px] ">
          <h2 className="m-0  self-stretch h-[34px] relative text-inherit font-normal font-inherit text-limegreen dark:text-lime-100 inline-block mq450:text-10xl mq1050:text-19xl">
            {t("our-services.ourServicesTitle")}
          </h2>
          <div className="w-[253px] h-0.5 relative box-border border-t-[2px] border-solid border-darkslategray-400 dark:border-white" />
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[20px] grid-cols-[repeat(4,_minmax(216px,_1fr))] text-16xl font-poppins mq450:grid-cols-[minmax(216px,_1fr)] mq750:gap-[18px] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(216px,_374px))]">
          {services.map((service, index) => (
            <ServiceCard
              key={service.key}
              serviceKey={service.key}
              imageSrc={service.image}
              cardRef={(el) => (cardRefs.current[index] = el)}
              isBlur={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

OurServices.propTypes = {
  className: PropTypes.string,
};

export default OurServices;
