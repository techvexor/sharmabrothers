/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          50: '#1E293B',
          100: '#1a2540',
          200: '#162038',
        },
        secondary: {
          DEFAULT: '#334155',
          50: '#475569',
          100: '#3d4f65',
        },
        accent: {
          DEFAULT: '#F97316',
          50: '#FB923C',
          100: '#EA580C',
          200: '#C2410C',
        },
        surface: {
          DEFAULT: '#F1F5F9',
          50: '#E2E8F0',
          100: '#CBD5E1',
        },
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
