/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['"Open Sans"', 'sans-serif'], // Ensure Open Sans is imported in your CSS
      },
      fontSize: {
        'base-semibold': [
          '16px', // font-size
          {
            lineHeight: '24px', // line-height
            fontWeight: '600', // font-weight
          },
        ],
        'sm-normal': [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: '400',
          },
        ],
        'lg-semibold': [
          '18px',
          {
            lineHeight: '28px',
            fontWeight: '600',
          },
        ],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
      },
      lineHeight: {
        tight: '20px',
        relaxed: '24px',
        loose: '28px',
      },
      colors: {
        'neutral-0': '#FFFFFF',
        'neutral-6': '#F3F3F3',
        'neutral-12': '#ECEAEA',
        'neutral-25': '#DCDBDB',
        'neutral-85': '#565353',
        'neutral-100': '#393737',
        'red-110': '#D52533',
        'red-120': '#BE212E',
        'red-130': '#A61D28',
        'red-40': '#F8A9B0',
        'red-25': '#FAC9CD',
        'red-10': '#FDEAEB',
        'focused-neutral': 'rgba(242, 244, 247, 0.5)',
        'focused-red': 'rgba(250, 201, 205, 0.5)',
      },
    },
  },
  plugins: [],
};
