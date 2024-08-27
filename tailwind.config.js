
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'data-[state=active]:bg-accent',
    'data-[state=active]:text-primary',
    'data-[state=active]:font-bold',
    'data-[state=active]:shadow-sm',
    // Add any other classes you need
  ],
  theme: {
    container: {
      center: true,
      padding: '15px'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    backgroundImage: {
      main: `linear-gradient(to bottom, #2E125D, #1A1337)`,
      grid: `url('./assets/gridHero.png')`
    },
    extend: {
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00ff99',
          hover: '#00e187'
        },
        green: {
          50: '#30AF5B',
          90: '#292C27'
        },
      }
    }
  },
  plugins: [],
}