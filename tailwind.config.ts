import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      heading: ['var(--font-soehne-breit)', 'sans-serif'],
      body: ['var(--font-soehne)', 'sans-serif'],
      kraftig: ['var(--font-soehne-kraftig)', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      grey: '#909090',
      lightGrey: '#B0B0B0',

      'cyan-500': '#1A82E9',
      'cyan-400': '#04C3F3',
      'cyan-300': '#35CEF5',
      'cyan-200': '#65DBF8',
      'cyan-100': '#98E7F9',

      'pink-500': '#A606BC',
      'pink-400': '#FE00A4',
      'pink-300': '#FF31B5',
      'pink-200': '#FF66C7',
      'pink-100': '#FF99DA',

      'red-500': '#CC014B',
      'red-400': '#FE2B12',
      'red-300': '#FF5543',
      'red-200': '#FF8070',
      'red-100': '#FFB6AE',
      'red-50': '#FED4D0',

      'blue-500': '#4208D5',
      'blue-400': '#0253FF',
      'blue-300': '#3377FF',
      'blue-200': '#6698FF',
      'blue-100': '#9ABAFE',

      'green-500': '#04AA55',
      'green-400': '#00F12A',
      'green-300': '#22FF48',
      'green-200': '#6FFF89',
      'green-100': '#9CFFAD',
    },
    extend: {
      fontSize: {
        'heading-big': [
          '75px',
          {
            lineHeight: '65px',
            letterSpacing: '0.375px',
          },
        ],
        'heading-small': ['39px', { lineHeight: '34px' }],

        'heading2-large': [
          '4.688rem',
          {
            lineHeight: '4.375rem',
            letterSpacing: '-0.094rem',
          },
        ],
        'heading2-medium': [
          '3.125rem',
          {
            lineHeight: '3.125rem',
            letterSpacing: '-0.063rem',
          },
        ],
        'heading2-small': [
          '39px',
          {
            lineHeight: '40px',
          },
        ],

        heading3: [
          '30px',
          {
            lineHeight: '40px',
            letterSpacing: '0.3px',
          },
        ],
        'heading3-mobile': [
          '22px',
          {
            letterSpacing: '-0.44px',
          },
        ],

        'body-mobile': [
          '1.063rem', // 17px
          {
            lineHeight: '1.313rem', // 21px
          },
        ],
        body: [
          '1.375rem', // 22px
          {
            lineHeight: '1.75rem', // 28px
          },
        ],

        byline: ['22px', { lineHeight: '30px', letterSpacing: '0.66px' }],
        'byline-mobile': [
          '14px',
          { lineHeight: '34px', letterSpacing: '0.56px' },
        ],

        'visit-heading-mobile': [
          '2.438rem',
          {
            lineHeight: '2.375rem',
            letterSpacing: '0.026rem',
          },
        ],
        'visit-heading': [
          '5.313rem',
          {
            lineHeight: '4.688rem',
            letterSpacing: '0.047rem',
          },
        ],
        'small-heading-mobile': [
          '1.125rem', // 18px
          {
            lineHeight: '1.25rem',
            letterSpacing: '0.02rem',
          },
        ],
        'small-heading': [
          '1.375rem',
          {
            lineHeight: '1.875rem',
            letterSpacing: '0.02rem',
          },
        ],
        'big-heading-mobile': [
          '2.438rem',
          {
            lineHeight: '2.125rem',
          },
        ],
        'big-heading': [
          '4.063rem',
          {
            lineHeight: '3.625rem',
            letterSpacing: '0.02rem',
          },
        ],
        'big-heading-large': [
          '5.313rem',
          {
            lineHeight: '4.688rem',
            letterSpacing: '0.047rem',
          },
        ],
        'big-heading-huge': [
          '6.25rem',
          {
            lineHeight: '5.625rem',
            letterSpacing: '0.047rem',
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
