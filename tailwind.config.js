/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
 module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        btn: {
          primary: '#e3e3e3',
          secondary: '#29292c',
        },
        text: {
          primary: '#040404', 
          secondary: 'rgba(255,255,255,0.6)', 
          icon: "#4F4F4F", 
          file: "#BDBDBD" 
        },
        link: {
          primary: "#EEEEEE", 
          secondary: "#27292D",
        },
        label: {
          primary: "#424242", 
          secondary: "#FFFFFF", 
        },
        placeholder: {
          primary: "rgba(51,51,51,0.54)", 
          secondary: "rgba(255,255,255,0.54)", 
        },
        disabled: {
          primary: "#E0E0E0", 
          secondary: "#424242", 
        },
        focus: {
          primary: "#374151", 
          secondary: "#1E1E1E", 
        },
        border: {
          primary: '#EEEEEEC', 
          secondary: '#3A3A3A', 
        },
        bg: {
          primary: '#FFFFFF', 
          secondary: '#121316', 
        },
        hover: {
          primary: "#00000042", 
          secondary: "#00000042", 
        },
        checkbox: {
          primary: '#bbbbbbb3', 
          secondary: '#64748b', 
        },
        accent: {
          primary: '#27293D', 
          secondary: '#64748b', 
        },
        sidebar: {
          primary: "#fafafa",
          secondary: "#1A1B1E",
        },
        input: {
          primary: "#eeeeee",
          secondary: "#29292c"
        },
        scroll: {
          track: "#f9fafb",
          trackSec: "#27293D",
          thumb: "#d8d8d8",
          thumbSec: "#fefefe"
        },
        filter: {
          primary: "#d8d8d8ab",
          secondary: "#29292ce9"
        },
        selected: {
          primary: "#d8d8d8d4",
          secondary: "#19191b",
          hover: "#d8d8d8ab",
          hoverSec: "#29292ce9"
        }
      },      
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif']
      },
      fontSize: {
        nl: ['56px', '64px']
      },
      screens: {
        '2xs': '200px',
        '1xs': '350px',
        '1xl': '1400px',
        '3xl': '2000px'
      }
    }
  },
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    `node_modules/tailvue/dist/tailvue.es.js`,
  ],
  // variants: {
  //   backgroundColor: [
  //     'dark',
  //     'dark-hover',
  //     'dark-group-hover',
  //     'dark-even',
  //     'dark-odd'
  //   ],
  //   borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
  //   textColor: ['dark', 'dark-hover', 'dark-active']
  // }
};