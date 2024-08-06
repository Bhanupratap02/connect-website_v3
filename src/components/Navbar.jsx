/** @format */

import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navLinks } from "../constants";
import {
  close,
  menu,
  Logo1,
  CloseDark,
  MenuDark,
  LanguageIcon,
  DropDownIcon,
  DropDownIconDarkTheme,
} from "../assets";
import { ThemeContext } from "../ThemeContext";
import Select from "react-select";
import { components } from "react-select";

const Navbar = ({ className = "" }) => {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language || "en"
  );
  const location = useLocation();
  const CloseBox = theme === "light" ? close : CloseDark;
  const MenuBox = theme === "light" ? menu : MenuDark;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption.value);
    i18n.changeLanguage(selectedOption.value);
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  useEffect(() => {
    // Set the initial language state based on i18n.language
    const initialLanguage = i18n.language || "en";
    const initialOption = languageOptions.find(
      (option) => option.value === initialLanguage
    );
    setSelectedLanguage(initialOption);
  }, [i18n.language]);

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "de", label: "German" },
    { value: "fr", label: "French" },
    { value: "it", label: "Italian" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: theme === "light" ? "white" : "#323232",
      borderRadius: "9999px",
      borderColor: "gray",
      paddingLeft: "0.5rem",
      fontSize: "20px",
      fontWeight: "thin",
      width: "200px",
      textTransform: "uppercase",
      boxShadow: state.isFocused ? "none" : base.boxShadow,
      outline: state.isFocused ? "none" : base.outline,
      "&:hover": {
        borderColor: "gray",
        cursor: "pointer",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: theme === "light" ? "darkslategray" : "white",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "darkslategray",
      padding: "0 10px",
    }),
    option: (base, state) => ({
      ...base,
      textTransform: "uppercase",
      backgroundColor:
        theme === "light"
          ? state.isFocused
            ? "lightgray"
            : "white"
          : state.isFocused
          ? "black"
          : "#323232",
      color: theme === "light" ? "darkslategray" : "white",
      "&:hover": {
        cursor: "pointer",
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: theme === "light" ? "white" : "#323232",
    }),
    indicatorSeparator: () => null,
  };

  const CustomSelectInput = (props) => {
    return <components.Input {...props} readOnly />;
  };

  const CustomDropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img
          src={theme === "light" ? DropDownIcon : DropDownIconDarkTheme}
          alt="dropdown"
          className="h-4 w-4"
        />
      </components.DropdownIndicator>
    );
  };

  const CustomSingleValue = (props) => {
    return (
      <components.SingleValue {...props}>
        <div className="flex items-center">
          <img src={LanguageIcon} alt="language" className="h-6 w-6 mr-2" />
          {props.children}
        </div>
      </components.SingleValue>
    );
  };

  return (
    <header
      className={`self-stretch bg-whitesmoke-200 dark:bg-black flex flex-row items-center justify-between py-8 mb-10 px-8 sticky top-0 z-50 max-w-full text-center text-4xl md:text-[18px] text-darkslategray-400 dark:text-white border-b border-solid border-white font-poppins ${className}`}
    >
      <div className="flex items-center">
        <img
          className="h-10 object-cover"
          loading="lazy"
          alt="Logo"
          src={Logo1}
        />
      </div>

      <nav className="flex items-center space-x-8 mq1050:hidden ">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.id}
            className={`hover:text-darkslategray-600 [text-decoration:none] text-[inherit] inline-block min-w-[100px] z-[1] ${
              active === link.id ? "font-bold" : ""
            }`}
          >
            {t(`navbar.${link.title.toLowerCase()}`)}
          </Link>
        ))}
        <div className="relative">
          <div className="relative flex items-center">
            <Select
              value={selectedLanguage || { value: "en", label: "English" }}
              onChange={handleLanguageChange}
              options={languageOptions}
              styles={customStyles}
              components={{
                Input: CustomSelectInput,
                DropdownIndicator: CustomDropdownIndicator,
                SingleValue: CustomSingleValue,
              }}
              defaultValue={{ value: "en", label: "English" }}
              isSearchable={false}
            />
          </div>
        </div>
      </nav>

      <div className="mq1050:flex hidden items-center">
        <img
          src={isMenuOpen ? CloseBox : MenuBox}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {isMenuOpen && (
        <nav className="absolute top-20 my-2 pb-6 right-0 text-[18px] bg-whitesmoke-200 dark:bg-darkslategray-400 dark:pt-6 w-full flex flex-col items-center space-y-4 mq1050:flex md:hidden font-poppins font-medium">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.id}
              className={`hover:text-darkslategray-600 [text-decoration:none] text-[inherit] inline-block min-w-[100px] z-[1] cursor-pointer ${
                active === link.id ? "font-bold" : ""
              }`}
            >
              {t(`navbar.${link.title.toLowerCase()}`)}
            </Link>
          ))}
          <div className="w-[40%] px-4">
            <div className="relative flex items-center">
              <Select
                value={selectedLanguage || { value: "en", label: "English" }}
                onChange={handleLanguageChange}
                options={languageOptions}
                styles={customStyles}
                components={{
                  Input: CustomSelectInput,
                  DropdownIndicator: CustomDropdownIndicator,
                  SingleValue: CustomSingleValue,
                }}
                isSearchable={false}
                defaultValue={{ value: "en", label: "English" }}
              />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
