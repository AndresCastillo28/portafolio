const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      backgroundImage: {
        // site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/yo.png')",
        services: "url('./assets/what_i_do.svg')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
