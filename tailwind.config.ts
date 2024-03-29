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
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      grey: '#909090',
      lightGrey: '#B0B0B0',

      deepPink: '#CC014B',
      lightRed: '#FED4D0',
      brightRed: '#FF2A12',
      brightRed2: '#FE2B11',
      lightPink: '#FF99DA',
      lightPink2: '#FF99D9',
      mediumPink: '#FF66C7',
      darkPurple: '#4208D5',
      lightPurple: '#A605BC',

      quoteLightBlue: '#98E7F9',
      quoteLightBlue2: '#04C3F3',

      quoteBlue: '#99BAFE',
      quoteBlue2: '#0053FF',

      lightAqua: '#99E7FA',
      aqua: '#98E7FA',
      skyBlue: '#04C3F3',
      blue: '#07C2F3',
      deepSkyBlue: '#1AC3EF',
      deepSkyBlue2: '#1BC3EF',
      ceruleanBlue: '#3BCFF2',
      lightSkyBlue: '#69DAF4',
      veryLightSkyBlue: '#9AE6F8',
      lightBlue: '#1A82E9',

      darkGreen: '#01A955',
      lightGreen: '#A3FFB2',
      lightGreen2: '#A3FFB3',
      lightGreen3: '#A5FEB3',
      brightGreen: '#18FF40',
      brightGreen2: '#17FF41',
      mediumGreen: '#48FF66',
      paleGreen: '#75FF8C',
      paleGreen2: '#14FF40',
      paleGreen3: '#18FF42',
      softBlue: '#9BBCFB',
      softBlue2: '#99BAFE',
      softBlue3: '#9CBCFB',
      cornflowerBlue: '#6A9BFB',
      royalBlue: '#3B7BFA',
      royalBlue2: '#3276FF',
      azureBlue: '#1C5CF9',
      lightCoral: '#FFD4D0',
      salmonLight: '#FFAAA0',
      salmon: '#FE7F72',
      salmon2: '#FF7F72',
      brightOrangeRed: '#FE2B12',
      vividBlue: '#0053FE',
      vividBlue2: '#0053FF',
      neonPink: '#FE00A2',
    },
    extend: {
      fontSize: {
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
        'quote-heading-mobile': [
          '2.438rem',
          {
            lineHeight: '2.5rem',
          },
        ],
        'quote-heading': [
          '4.688rem',
          {
            lineHeight: '4.375rem',
            letterSpacing: '-0.094rem',
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
