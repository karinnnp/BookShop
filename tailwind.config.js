/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    screens: {
      xxs: "320px",
      xs: "380px",
      ss: "415px",
      s: "460px",
      ssm: "570px",
      sm: "640px",                  // => @media (min-width: 640px) { ... }
      md: "768px",                  // => @media (min-width: 768px) { ... }
      lg: "1024px",                 // => @media (min-width: 1024px) { ... }
      xl: "1280px",                 // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",              // => @media (min-width: 1536px) { ... }
      "max-xxs": { max: "320px" },
      "max-xs": { max: "380px" },
      "max-ss": { max: "415px" },
      "max-s": { max: "460px" },
      "max-ssm": { max: "570px" },
      "max-sm": { max: "640px" },
      "max-md": { max: "768px" },
      "max-lg": { max: "1024px" },
      "max-xl": { max: "1280px" },
      "max-2xl": { max: "1536px" },
    },
    extend: {
      boxShadow: {
        base: '0px 0px 6px rgba(0, 0, 0, 0.16)',
        base2: '0px -2px 2px rgba(0, 0, 0, 0.06)',
        base3: '0px -2px 2px rgba(0, 0, 0, 0.04)',
        base4: '0px 3px 14px rgba(0, 0, 0, 0.16)',
      },
    },
    colors: {
      red: {
        DEFAULT: '#E32321',
        dark: '#A5050D',
        soft: '#F29C9B',
        pink: '#FFDFE4',
      },
      orange: { DEFAULT: '#FF9D00', light: '#F7B61B', medium: '#FF6E39' },
      green: { DEFAULT: '#06C755', lime: '#92BD66', light: '#e6ffe6' },
      blue: { DEFAULT: '#0387E5', soft: '#CCE7FA', medium: '#0071C2' },
      dark: { DEFAULT: '#333333', grey: '#5A5A5A' },
      grey: {
        DEFAULT: '#B9B9B9',
        light: '#EDEDED',
        light2: '#DDDDDD',
        soft: '#E5E5E5',
        dark: '#5A5A5A',
        bg: '#F5F5F5',
      },
      white: { DEFAULT: '#FFFFFF', soft: '#FBFBFB' },
      black: { DEFAULT: '#222222', super: '#000000' },
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    fontSize: {
      xxs: ['11px', '20px'],
      xs: ['12px', '20px'],
      sm: ['14px', '22px'],
      md: ['15px', '24px'],
      base: ['16px', '28px'],
      lg: ['18px', '28px'],
      xl: ['20px', '30px'],
      '2xl': ['25px', '34px'],
      '4xl': ['30px', '46px'],
      '5xl': ['45px', '64px'],
      H2: ['36px', '56px'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tw-elements/dist/plugin')],
};
