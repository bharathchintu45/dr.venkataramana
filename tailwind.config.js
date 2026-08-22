/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#040d07',
          900: '#07150C',
          850: '#0A1C12',
          800: '#0F2618',
          700: '#143523',
          600: '#1E4D34',
          500: '#2A6B48',
          400: '#3D8C60',
        },
        botanical: {
          lime: '#89C35C',
          glow: '#9FE870',
          accent: '#A3E635',
          gold: '#C5A868',
          lightGold: '#E2C98F',
          darkGold: '#8F7335',
        },
        parchment: {
          50: '#FAF7F2',
          100: '#F5EFEB',
          200: '#EFE8D8',
          300: '#E6DCB8',
          400: '#D9CCA3',
          500: '#C2B280',
          dark: '#3A2E1E',
        }
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'Georgia', 'serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'botanical-glow': '0 0 25px rgba(159, 232, 112, 0.25)',
        'gold-glow': '0 0 25px rgba(197, 168, 104, 0.3)',
        'parchment-deep': '0 20px 40px -15px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'forest-vignette': 'radial-gradient(circle at center, transparent 40%, rgba(4, 13, 7, 0.85) 100%)',
      }
    },
  },
  plugins: [],
}
