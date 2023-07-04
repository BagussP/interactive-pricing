/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        circle: "url('../../public/pattern-circles.svg')"
      },
      colors: {
        pricingComponentBackground: "hsl(0, 0%, 100%)",
        mainBackground: "hsl(230, 100%, 99%)",
        textCtaBackground: "hsl(227, 35%, 25%)",
        discountBackground: "hsl(14, 92%, 95%)",
        discountText: "hsl(15, 100%, 70%)",
      },
    },
  },
  plugins: [],
};
