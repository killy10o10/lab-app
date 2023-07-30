const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-blue': '#ADD8E6',
        'light-organge': '#FFD580',
        'deep-orange': '#F8A41B',
        'new-orange': '#ff9803',
        'trans-blue': 'rgba(111, 202, 238, 0.513)',
        'trans-orange': '#ff9603aa',
        'trans-white': '#ffffffe6',
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
});
