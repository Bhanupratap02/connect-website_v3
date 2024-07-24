import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navLinks } from "../constants";
import { close, menu, Logo1 } from "../assets";

const Navbar = ({ className = "" }) => {
  const { i18n} = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <header
      className={`self-stretch bg-whitesmoke-200 flex flex-row items-center justify-between py-8 mb-10 px-8 sticky top-0 z-50 max-w-full text-center text-4xl md:text-[18px] text-darkslategray-400 font-poppins ${className}`}
    >
      <div className="flex items-center">
        <img
          className="h-10 object-cover"
          loading="lazy"
          alt="Logo"
          src={Logo1}
        />
      </div>

      <nav className="flex items-center space-x-8 mq1050:hidden">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.id}
            className={`hover:text-darkslategray-600 [text-decoration:none] text-[inherit] inline-block min-w-[100px] z-[1] ${
              active === link.id ? "font-bold" : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
        {/* <div className="relative">
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="bg-whitesmoke-200 border border-gray-300 rounded-md py-2 px-4 text-darkslategray-400 text-2xl"
          >
            <option value="en">European</option>
            <option value="de">German</option>
            <option value="fr">French</option>
            <option value="it">Italian</option>
          </select>
        </div> */}
      </nav>

      <div className="mq1050:flex hidden items-center">
        <img
          src={isMenuOpen ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {isMenuOpen && (
        <nav className="absolute top-20 my-2 pb-10 right-0 text-[18px] bg-whitesmoke-200 w-full flex flex-col items-center space-y-4 mq1050:flex md:hidden font-poppins font-medium">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.id}
              className={`hover:text-darkslategray-600 [text-decoration:none] text-[inherit] inline-block min-w-[100px] z-[1] cursor-pointer ${
                active === link.id ? "font-bold" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
          {/* <div className="w-full px-4">
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="bg-whitesmoke-200 border border-gray-300 rounded-md py-2 px-4 text-darkslategray-400 w-full"
            >
              <option value="en">European</option>
              <option value="de">German</option>
              <option value="fr">French</option>
              <option value="it">Italian</option>
            </select>
          </div> */}
        </nav>
      )}
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
