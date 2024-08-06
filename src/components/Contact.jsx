/** @format */

import PropTypes from "prop-types";
import { ContactImg, DarkContact } from "../assets";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";


gsap.registerPlugin(ScrollTrigger);
const Contact = ({ className = "" }) => {
   const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
 const contactRef = useRef(null);
 const formRef = useRef(null);
 const imageRef = useRef(null);
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const mailtoLink = `mailto:Contact@connectplus.org.uk?subject=Message from ${name}&body=${message} (from ${email})`;
  //   setName("");
  //   setEmail("");
  //   setMessage("");
  //   window.location.href = mailtoLink;
  // };
  useEffect(() => {
     gsap.fromTo(
       formRef.current,
       { opacity: 0, y: 50 },
       {
         opacity: 1,
         y: 0,
         duration: 1,
         scrollTrigger: {
           trigger: contactRef.current,
           start: "top 80%",
           end: "bottom 20%",
           scrub: 1,
         },
       }
     );
         gsap.fromTo(
           imageRef.current,
           { opacity: 0, x: -50 },
           {
             opacity: 1,
             x: 0,
             duration: 1,
             scrollTrigger: {
               trigger: contactRef.current,
               start: "top 80%",
               end: "bottom 20%",
               scrub: 1,
             },
           }
         );
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Message from ${name}`;
    const body = `${message} (from ${email})`;
    const mailtoLink = `mailto:Contact@connectplus.org.uk?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    // Contact@connectplus.org.uk
    // Create a temporary link element
    const tempLink = document.createElement("a");
    tempLink.href = mailtoLink;

    // Append the link to the body and click it programmatically
    document.body.appendChild(tempLink);
    tempLink.click();

    // Remove the temporary link from the document
    document.body.removeChild(tempLink);

    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section
      ref={contactRef}
      className={`self-stretch flex flex-col items-start  justify-start gap-[25px] max-w-full text-left text-36xl font-gilroy-bold  ${className}`}
    >
      <div className="w-[100%] flex flex-col items-center justify-center py-0 pb-2 box-border max-w-full">
        <h1 className="m-0 h-full w-[82%] relative text-inherit font-normal font-inherit text-limegreen inline-block shrink-0 mq450:text-14xl mq750:text-25xl dark:text-lime-100 ">
          {t("contact.contactTitle")}
        </h1>
      </div>
      <div className="h-1.5 w-[85%] relative box-border  border-t-[2px] border-solid border-darkslategray-400 dark:border-white mx-[110px] mq450:mx-[20px] mq750:mx-[80px] mq1050:mx-[100px]" />
      <div className="self-stretch shadow-[0px_15px_50px_rgba(102,_106,_245,_0.13)] rounded-[21.56px] bg-white dark:bg-black flex flex-row items-start justify-start pt-[23px] px-[110px] pb-[90.1px] box-border shrink-0 max-w-full mq450:pt-[12px] mq450:pb-[1px] mq450:box-border mq750:pl-[30px] mq750:pr-[30px] mq750:box-border mq1050:pt-20 mq1050:pb-[79px] mq1050:box-border  ">
        <div className="flex-1 flex flex-row items-end justify-center gap-[64.8px] max-w-full z-[1] mq450:gap-[16px] mq750:gap-[32px] mq1050:flex-wrap">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col items-start justify-start gap-[50px] min-w-[430px] max-w-full mq750:gap-[25px] mq750:min-w-full"
          >
            <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full mq750:gap-[22px]">
              <div
                className={`self-stretch rounded-21xl  box-border  flex flex-row items-start justify-start pt-[23px] px-[30px] dark:text-white pb-[21px] max-w-full border-[1px] border-solid border-darkgray-200 dark:border-white mq450:px-[20px] ${
                  theme === "light" ? "bg-light-gradient" : "bg-dark-gradient"
                }`}
              >
                <div className="h-[77px] w-[662.2px] relative rounded-21xl bg-light-gradient box-border hidden max-w-full border-[1px] border-solid border-darkgray-200 dark:bg-dark-gradient" />
                <input
                  className="w-full [border:none] [outline:none] font-poppins text-xl bg-[transparent] h-[30px] relative tracking-[0.08em] text-darkgray-100 dark:text-white text-left inline-block p-0 z-[1] mq450:text-[16px]"
                  placeholder={t("contact.namePlaceholder")}
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>
              <div className="self-stretch rounded-xl [background:linear-gradient(123.01deg,_#e2e2e2,_#fff)] box-border dark:[background:linear-gradient(124.1deg,_#161616,_#000)] dark:text-white flex flex-row items-start justify-start pt-[23px] px-[30px] pb-[21px] max-w-full border-[1px] border-solid border-darkgray-200 mq450:px-[10px]">
                <div className="h-[77px] w-[662.2px] relative rounded-xl [background:linear-gradient(123.01deg,_#e2e2e2,_#fff)] box-border hidden max-w-full border-[1px] border-solid border-darkgray-200" />
                <input
                  className="w-full [border:none] [outline:none] font-poppins text-xl bg-[transparent] h-[30px] relative tracking-[0.08em] text-darkgray-100 text-left inline-block p-0 z-[1] mq450:text-[16px]"
                  placeholder={t("contact.emailPlaceholder")}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <textarea
                className="bg-[transparent] h-[231px] w-auto [outline:none] self-stretch rounded-xl [background:linear-gradient(123.01deg,_#e2e2e2,_#fff)] dark:[background:linear-gradient(124.1deg,_#161616,_#000)] dark:text-white box-border flex flex-row items-start justify-start pt-[32.4px] px-[30px] pb-8 font-poppins text-xl text-darkgray-100 border-[1px] border-solid border-darkgray-200 mq450:text-[16px]  "
                placeholder={t("contact.messagePlaceholder")}
                rows={12}
                cols={33}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer py-[13px] px-5 bg-gainsboro-200 self-stretch rounded-xl flex flex-row items-start justify-center border-[1px] border-solid border-white hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100 dark:bg-darkslategray-400 "
            >
              <b className="relative text-13xl tracking-[0.08em] font-poppins text-limegreen text-left mq450:text-lgi mq800:text-7xl">
                {t("contact.submitButton")}
              </b>
            </button>
          </form>
          <div className="h-[515.8px] w-[592px] flex flex-col items-start justify-start min-w-[592px] max-w-full mq750:min-w-full mq1050:flex-1">
            <img
              ref={imageRef}
              className="self-stretch h-[429.7px] relative max-w-full overflow-hidden shrink-0 mq1050:self-stretch mq1050:w-auto"
              loading="lazy"
              alt=""
              src={theme === "light" ? ContactImg : DarkContact}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
