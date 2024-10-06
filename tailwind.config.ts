import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        rotate: {
          '0%, 100%': {
            transform: 'rotate(0deg) scale(1.2)',
          },
          '50%': {
            transform: 'scale(0.9) rotate(180deg)',
          },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        rotate: 'rotate 4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite',
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        robotoMono: ['var(--font-roboto-mono)', ...fontFamily.sans],
      },
      colors: {
        primary: colors.neutral,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
