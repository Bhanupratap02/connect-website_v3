
import PropTypes from "prop-types";
import { ContactImg } from "../assets";
import { useRef, useState } from "react";
const Contact = ({ className = "" }) => {
    const contactRef = useRef(null);
    // State for form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      const mailtoLink = `mailto:Contact@connectplus.org.uk?subject=Message from ${name}&body=${message} (from ${email})`;
      setName("");
      setEmail("");
      setMessage("");
      window.location.href = mailtoLink;
    };
  return (
    <section
      ref={contactRef}
      className={`self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full text-left text-36xl font-gilroy-bold  ${className}`}
    >
      <div className="w-[564px] flex flex-col items-center justify-center py-0 pb-2 box-border max-w-full">
        <h1 className="m-0 h-[38px] w-[284px] relative text-inherit font-normal font-inherit text-limegreen inline-block shrink-0 mq450:text-14xl mq750:text-25xl ">
          Contact Us
        </h1>
      </div>
      <div className="h-1.5 w-[80%] relative box-border  border-t-[2px] border-solid border-darkslategray-400 mx-[130px] mq450:mx-[30px] mq750:mx-[80px] mq1050:mx-[100px]" />
      <div className="self-stretch shadow-[0px_15px_50px_rgba(102,_106,_245,_0.13)] rounded-[21.56px] bg-white flex flex-row items-start justify-start pt-[43px] px-[110px] pb-[90.1px] box-border shrink-0 max-w-full mq450:pt-[52px] mq450:pb-[1px] mq450:box-border mq750:pl-[30px] mq750:pr-[30px] mq750:box-border mq1050:pt-20 mq1050:pb-[79px] mq1050:box-border  ">
        <div className="flex-1 flex flex-row items-end justify-center gap-[64.8px] max-w-full z-[1] mq450:gap-[16px] mq750:gap-[32px] mq1050:flex-wrap">
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col items-start justify-start gap-[50px] min-w-[430px] max-w-full mq750:gap-[25px] mq750:min-w-full"
          >
            <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full mq750:gap-[22px]">
              <div className="self-stretch rounded-21xl [background:linear-gradient(rgba(60,_251,_60,_0.2),_rgba(60,_251,_60,_0.2)),_linear-gradient(123.01deg,_#e2e2e2,_#fff)] box-border flex flex-row items-start justify-start pt-[23px] px-[30px] pb-[21px] max-w-full border-[1px] border-solid border-darkgray-200 mq450:px-[20px]">
                <div className="h-[77px] w-[662.2px] relative rounded-21xl [background:linear-gradient(rgba(60,_251,_60,_0.2),_rgba(60,_251,_60,_0.2)),_linear-gradient(123.01deg,_#e2e2e2,_#fff)] box-border hidden max-w-full border-[1px] border-solid border-darkgray-200" />
                <input
                  className="w-full [border:none] [outline:none] font-poppins text-xl bg-[transparent] h-[30px] relative tracking-[0.08em] text-darkgray-100 text-left inline-block p-0 z-[1] mq450:text-[16px]"
                  placeholder="Enter your name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>
              <div className="self-stretch rounded-xl [background:linear-gradient(123.01deg,_#e2e2e2,_#fff)] box-border flex flex-row items-start justify-start pt-[23px] px-[30px] pb-[21px] max-w-full border-[1px] border-solid border-darkgray-200 mq450:px-[10px]">
                <div className="h-[77px] w-[662.2px] relative rounded-xl [background:linear-gradient(123.01deg,_#e2e2e2,_#fff)] box-border hidden max-w-full border-[1px] border-solid border-darkgray-200" />
                <input
                  className="w-full [border:none] [outline:none] font-poppins text-xl bg-[transparent] h-[30px] relative tracking-[0.08em] text-darkgray-100 text-left inline-block p-0 z-[1] mq450:text-[16px]"
                  placeholder="Enter your email address"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <textarea
                className="bg-[transparent] h-[231px] w-auto [outline:none] self-stretch rounded-xl [background:linear-gradient(123.01deg,_#e2e2e2,_#fff)] box-border flex flex-row items-start justify-start pt-[32.4px] px-[30px] pb-8 font-poppins text-xl text-darkgray-100 border-[1px] border-solid border-darkgray-200 mq450:text-[16px]"
                placeholder="Go ahead, We are listening..."
                rows={12}
                cols={33}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer py-[13px] px-5 bg-gainsboro-200 self-stretch rounded-xl flex flex-row items-start justify-center border-[1px] border-solid border-white hover:bg-silver hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100"
            >
              <b className="relative text-13xl tracking-[0.08em] font-poppins text-limegreen text-left mq450:text-lgi mq800:text-7xl">
                Submit
              </b>
            </button>
          </form>
          <div className="h-[515.8px] w-[592px] flex flex-col items-start justify-start min-w-[592px] max-w-full mq750:min-w-full mq1050:flex-1">
            <img
              className="self-stretch h-[429.7px] relative max-w-full overflow-hidden shrink-0 mq1050:self-stretch mq1050:w-auto"
              loading="lazy"
              alt=""
              src={ContactImg}
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
