import PropTypes from "prop-types";
import { useState } from "react";
import UseDriverApp from "./UseDriverApp";
import InstallApp from "./InstallApp";
import { useTranslation } from "react-i18next";
import UseDriverApp2 from "./UseDriverApp2";
import InstallApp2 from "./InstallApp2";
const UseApp = ({ className = "" }) => {
  const {t} = useTranslation()
  const [activeTab, setActiveTab] = useState("use");

  return (
    <section
      className={`w-[1336px] mq450:w-full mq450:px-[22px] flex flex-col items-center justify-center gap-8 mq750:gap-10 pt-[0] px-[178px] pb-[54px] box-border max-w-full text-left text-26xl text-darkslategray-400 dark:text-white font-poppins mq750:pb-[35px] mq750:box-border ${className} mq1050:px-[60px] mq750:px-[40px]`}
    >
      <div
        className="   rounded-381xl  bg-whitesmoke-400 dark:[background:linear-gradient(124.1deg,_#161616,_#0C0C0C)]  border-[1px] border-solid border-white dark:border-black
 overflow-hidden flex flex-row items-start justify-center py-2 px-4 gap-[42px] max-w-full text-4xl mq750:flex-wrap mq750:gap-2 mq750:py-1 mq450:rounded-21xl mq450:w-full mq750:w-[90%] mq1050:w-[70%] mq450:px-2 mq450:flex-nowrap"
      >
        <div
          onClick={() => setActiveTab("install")}
          className={`flex flex-col items-start  justify-start cursor-pointer pt-4 px-4 pb-2 mq450:pt-2 mq450:pb-0.5 rounded-21xl ${
            activeTab === "install"
              ? "bg-lime-100 text-darkslategray-300"
              : "bg-transparent dark:text-white"
          } mq450:text-base mq450:leading-[0] mq1050:text-5xl mq1050:leading-[40px] mq750:text-xl mq750:leading-6`}
        >
          <div className="relative mq450:leading-normal mq750:leading-normal mq450:py-1 leading-normal font-semibold">
            {t("use-app.useAppHeading1")}
          </div>
        </div>
        <div
          onClick={() => setActiveTab("use")}
          className={`flex flex-col items-start justify-start cursor-pointer pt-4 px-4 pb-2 mq450:pt-2 mq450:pb-0.5 rounded-21xl ${
            activeTab === "use"
              ? "bg-lime-100 text-darkslategray-300"
              : "bg-transparent dark:text-white"
          } mq450:text-base mq450:leading-[0] mq1050:text-5xl mq1050:leading-[40px] mq750:text-xl mq750:leading-6`}
        >
          <div className="relative mq450:leading-normal mq750:leading-normal mq450:py-1 leading-normal font-semibold z-[1]">
            {t("use-app.useAppHeading2")}
          </div>
        </div>
      </div>

      {activeTab === "use" ? <UseDriverApp2 /> : <InstallApp2 />}
    </section>
  );
};

UseApp.propTypes = {
  className: PropTypes.string,
};

export default UseApp;
