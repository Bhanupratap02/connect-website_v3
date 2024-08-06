
import { useEffect, useRef } from "react";
import { Install } from "../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);
const InstallApp = () => {
  const { t } = useTranslation();
    const sectionRef = useRef(null);
    const stepsRef = useRef([]);
    const imageRef = useRef(null);
    const steps = [
      { step: 1, text: t("use-app.install-app.step1") },
      { step: 2, text: t("use-app.install-app.step2") },
      { step: 3, text: t("use-app.install-app.step3") },
    ];
        useEffect(() => {
          gsap.fromTo(
            stepsRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.3,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reset",
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
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reset",
              },
            }
          );
        }, []);
  return (
    <div ref={sectionRef} className="font-poppins">
      <div className="absolute top-[77px] left-[calc(70%_-_783px)] [filter:blur(300px)] rounded-[50%] bg-lime-200 w-[185px] h-[183px]" />
      <div className="absolute top-[220px] left-[900px] w-[447px] h-[577px] mq750:w-[350px] mq750:h-[450px] mq450:w-[250px] mq450:left-0 mq450:top-[520px] mq450:h-[350px]">
        <div className="absolute top-[0px] left-[0px] [filter:blur(300px)] rounded-[50%] bg-lime-300 w-[447px] h-[461px] mq750:w-[350px] mq750:h-[350px] mq450:w-[250px] mq450:h-[250px]" />
        <img
          ref={imageRef}
          className="absolute top-[53px] left-[30px] w-[343px] h-[524px] z-[1] mq750:w-[280px] mq750:h-[400px] mq450:w-[300px] mq450:h-[440px] mq450:top-[130px] mq450:object-cover mq450:object-top"
          loading="lazy"
          alt=""
          src={Install}
        />
      </div>
      <div className="absolute top-[279px] left-[180px] leading-[55px] mq450:text-8xl mq450:leading-[30px] mq450:top-[220px] mq450:left-[20px] mq1050:text-17xl mq1050:leading-[44px] text-26xl">
        <span>{t("use-app.install-app.installAppTitle1")}</span>
        <b className="text-31xl mq450:text-19xl text-transparent !bg-clip-text [background:linear-gradient(131.74deg,_#00ff00,_#009900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          {t("use-app.install-app.installAppTitle2")}
        </b>
      </div>

      <div className="absolute top-[329px] mq450:left-[20px] mq450:top-[295px] mq450:w-[340px] left-[180px] box-border w-[325px] h-0.5 border-t-[2px] border-solid border-darkslategray-400 dark:border-white" />
      <div className="absolute top-[389px] left-[200px] w-[511px] h-[229px] flex flex-col items-start justify-start gap-[35px] max-w-full text-white mq750:h-auto mq750:min-h-[229px] mq450:left-[25px] mq450:top-[350px]">
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-4 mb-6 relative"
          >
            <div className="h-[53px] w-[53px] relative">
              <div className="absolute top-0 left-0 rounded-full bg-lime-100 w-full h-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-[55px] font-medium z-[1] text-5xl">
                {item.step}
              </div>
            </div>
            <div
              ref={(el) => (stepsRef.current[index] = el)}
              className="flex-1 text-darkslategray-400 dark:text-white mq1050:text-5xl mq750:text-2xl mq450:text-lg text-5xl leading-[35px]"
            >
              {item.text}
            </div>
          </div>
        ))}
        {/* Lines connecting the steps */}
        <div className="absolute top-[53px] left-[25px] h-[90px] w-[2px] bg-lime-100"></div>
        <div className="absolute top-[140px] left-[25px] h-[90px] w-[2px] bg-lime-100 mq450:top-[140px]"></div>
      </div>
    </div>
  );
};

export default InstallApp;

    // <div className="font-poppins">
    //   <div className="absolute top-[77px] left-[calc(50%_-_783px)] [filter:blur(300px)] rounded-[50%] bg-lime-200 w-[185px] h-[183px]" />
    //   <div className="absolute top-[220px] left-[818px] w-[447px] h-[577px] mq750:w-[350px] mq750:h-[450px] mq450:w-[250px] mq450:left-0 mq450:top-[520px] mq450:h-[350px]">
    //     <div className="absolute top-[0px] left-[0px] [filter:blur(300px)] rounded-[50%] bg-lime-300 w-[447px] h-[461px] mq750:w-[350px] mq750:h-[350px] mq450:w-[250px] mq450:h-[250px] " />
    //     <img
    //       className="absolute top-[53px] left-[30px] w-[343px] h-[524px] z-[1] mq750:w-[280px] mq750:h-[400px] mq450:w-[200px] mq450:h-[300px]"
    //       loading="lazy"
    //       alt=""
    //       src={Install}
    //     />
    //   </div>
    //   <div className="absolute top-[279px] left-[180px] leading-[55px] mq450:text-8xl mq450:leading-[30px] mq450:top-[220px] mq450:left-[20px] mq1050:text-17xl mq1050:leading-[44px]">
    //     <span>{`How to  `}</span>
    //     <b className="text-31xl mq450:text-19xl text-transparent !bg-clip-text [background:linear-gradient(131.74deg,_#00ff00,_#009900)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
    //       Install App:
    //     </b>
    //   </div>
    //   <div className="absolute top-[329px] mq450:left-[20px] mq450:top-[295px] mq450:w-[340px] left-[180px] box-border w-[325px] h-0.5 border-t-[2px] border-solid border-darkslategray-400" />
    //   <div className="absolute top-[389px] left-[200px] w-[511px] h-[229px] flex flex-col items-start justify-start gap-[35px] max-w-full text-white mq750:h-auto mq750:min-h-[229px] mq450:left-[25px] mq450:top-[350px]">
    //     <div className="!m-[0] flex flex-row items-start justify-start gap-[12px] mq750:gap-[8px] mq750:flex-wrap">
    //       <div className="h-[53px] w-[53px] relative mq750:h-[40px] mq750:w-[40px]">
    //         <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lime-100 w-full h-full" />
    //         <div className="absolute top-[10px] left-[21px] leading-[40px] font-medium z-[1] mq450:text-8xl mq450:leading-[33px] mq1050:text-17xl mq1050:leading-[44px] mq750:text-5xl mq750:leading-[30px] text-5xl">
    //           1
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 text-5xl text-darkslategray-400 mq750:pt-2">
    //         <div className="h-[21px] relative leading-[30px] inline-block mq450:text-lg mq450:leading-[30px] mq1050:text-5xl mq1050:leading-[40px] mq750:text-2xl mq750:leading-[24px]">
    //           Open the Google Play Store.
    //         </div>
    //       </div>
    //     </div>
    //     <div className="!m-[0] flex flex-row items-start justify-start gap-[12px] max-w-full w-full mq750:gap-[8px] mq750:flex-wrap">
    //       <div className="h-[53px] w-[53px] relative mq750:h-[40px] mq750:w-[40px]">
    //         <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lime-100 w-full h-full" />
    //         <div className="absolute top-[6px] left-[18px] leading-[55px] font-medium inline-block min-w-[26px] z-[1] mq450:text-8xl mq450:leading-[33px] mq1050:text-17xl mq1050:leading-[44px] mq750:text-5xl mq750:leading-[30px] text-5xl">
    //           2
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full text-5xl text-darkslategray-400 mq750:pt-2">
    //         <div className="h-[21px] relative leading-[30px] inline-block mq450:text-lg mq450:leading-[30px] mq1050:text-5xl mq1050:leading-[40px] mq750:text-2xl mq750:leading-[24px]">
    //           Search for the App.
    //         </div>
    //       </div>
    //     </div>
    //     <div className="!m-[0] flex flex-row items-start justify-start gap-[12px] mq750:gap-[8px] mq750:flex-wrap">
    //       <div className="h-[53px] w-[53px] relative mq750:h-[40px] mq750:w-[40px]">
    //         <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lime-100 w-full h-full" />
    //         <div className="absolute top-[6px] left-[18px] leading-[45px] font-medium inline-block min-w-[27px] z-[1] mq450:text-8xl mq450:leading-[33px] mq1050:text-17xl mq1050:leading-[44px] mq750:text-5xl mq750:leading-[30px] text-5xl">
    //           3
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 text-5xl text-darkslategray-400 mq750:pt-2">
    //         <div className="h-[21px] relative leading-[30px] inline-block mq450:text-lg mq450:leading-[30px] mq1050:text-5xl mq1050:leading-[40px] mq750:text-2xl mq750:leading-[24px]">
    //           Install the App.
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-px h-11 absolute !m-[0] top-[49px] left-[26.5px] box-border z-[1] border-r-[1px] border-solid border-lime-100" />
    //     <div className="w-px h-11 absolute !m-[0] top-[138px] left-[27px] box-border z-[1] border-r-[1px] border-solid border-lime-100" />
    //   </div>
    // </div>
