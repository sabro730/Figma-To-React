const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        back: '#1E1E1E',
      },
      bgGradientDeg: {
        91.47: '91.47deg',
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        drone: ['"drone-ranger-pro"', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              10: '10deg', // bg-gradient-10
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              91.47: '91.47deg',
              98.24: '98.24deg',
              145.42: '145.42deg',
              120: '120deg',
              135: '135deg',
            }
          ),
        }
      );
    }),
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    themes: [
      {
        mytheme: {
          primary: '#1E1E1E',
        },
      },
    ],
  },
};
