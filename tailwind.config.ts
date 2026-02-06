import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#073B3E',
        'alt-bg': '#0A4F53',
        'card-bg': 'rgba(255,255,255,0.05)',
        accent: '#FF8D07',
        'primary-action': '#9440C8',
        'footer-bg': '#052A2C',
      },
      fontFamily: {
        outfit: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
