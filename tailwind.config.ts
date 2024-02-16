import type { Config } from 'tailwindcss'
import { createThemes } from 'tw-colors'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),
    createThemes({
      light: {
        "primary": colors.yellow[500],
        "main-bg": colors.white,
        "secondary-bg": colors.stone[50],
        "overflow-bg": colors.stone[100],
        "font": {
          "main": colors.stone[700],
          "secondary": colors.stone[900]
        },
        "art": {
          "primary": colors.stone[200],
          "secondary": colors.stone[200]
        }
      },
      dark: {
        "primary": colors.yellow[400],
        "main-bg": '#151515',
        "secondary-bg": '#242424',
        "overflow-bg": colors.stone[900],
        "font": {
          "main": '#D9D9D9',
          "secondary": colors.white
        },
        "art": {
          "primary": colors.white,
          "secondary": colors.stone[100]
        }
      },
      "theme-loading": {}
    })
  ],
}
export default config
