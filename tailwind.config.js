/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          100: "#f3f3f3",
          200: "#f1f1f1",
          300: "#ececec",
          400: "#eaeaea",
        },
        darkgray: "#979797",
        darkslategray: {
          100: "#3e3e3e",
          200: "#393939",
          300: "#363636",
          400: "#303030",
        },
        limegreen: "#00af00",
        lime: {
          100: "#00ff00",
          200: "rgba(0, 255, 0, 0.5)",
          300: "rgba(0, 255, 0, 0.3)",
          400: "rgba(0, 255, 0, 0.4)",
        },
        gainsboro: {
          100: "#e6e6e6",
          200: "#e3e3e3",
          300: "#dedede",
          400: "#d9d9d9",
        },
        silver: "#c9c9c9",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "gilroy-light": "Gilroy-Light",
        "gilroy-bold": "Gilroy-Bold",
      },
      borderRadius: {
        "21xl": "40px",
        "646xl-6": "665.6px",
        xl: "20px",
        "381xl": "400px",
        "981xl": "1000px",
      },
    },
    fontSize: {
      "16xl": "35px",
      "2xl": "21px",
      "9xl": "28px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "6xl": "25px",
      xl: "20px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "8xl": "27px",
      "17xl": "36px",
      "26xl": "45px",
      "31xl": "50px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "4xl": "23px",
      "23xl": "42px",
      "25xl": "44px",
      "3xl": "22px",
      "36xl": "55px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
