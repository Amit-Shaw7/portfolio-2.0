import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary': '#0F172A',
        'overlay' : "#62EBCF",
        'highlight' : "#5ADFCB",
        'highlight-100' : "#64FFDA",
        'highlight-200' : "#5FF2D1",
        'bg' : "#0A192F",
        'card' : "#112240",
        "disabled" : "#6E7996",
        "unselected" : "#C5C5EF",
        "gray" : "#505D77"
      }
    },
  },
  plugins: [],
}
export default config
