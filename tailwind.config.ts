import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },

      xl: { max: '1279px' },

      lg: { max: '1023px' },

      md: { max: '767px' },

      sm: { max: '639px' },
    },
    extend: {
      maxWidth: {
        container: 'calc(100vw - (100vw - 1160px)/2)',
        hero: '480px',
      },
      fontSize: {
        xxs: '0.625rem',
      },
      lineHeight: {
        xxs: '10px',
      },
      backgroundColor: {
        white: '#FFF',
        black: '#000',
        gray100: '#E1E1E6',
        gray200: '#A9A9B2',
        gray400: '#7C7C8A',
        gray500: '#505059',
        gray600: '#323238',
        gray700: '#29292E',
        gray800: '#202024',
        gray900: '#121214',
        ignite300: '#00B37E',
        ignite500: '#00875F',
        ignite700: '#015F43',
        ignite900: '#00291D',
      },
      textColor: {
        white: '#FFF',
        black: '#000',
        gray100: '#E1E1E6',
        gray200: '#A9A9B2',
        gray400: '#7C7C8A',
        gray500: '#505059',
        gray600: '#323238',
        gray700: '#29292E',
        gray800: '#202024',
        gray900: '#121214',
        ignite300: '#00B37E',
        ignite500: '#00875F',
        ignite700: '#015F43',
        ignite900: '#00291D',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
