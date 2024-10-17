/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        cream: {
          light: '#f9f4ef',
          medium: '#f2e9e4',
          dark: '#e0d8d2',
        },
        text: {
          dark: '#463f3a',
          light: '#8a817c',
        },
        accent: '#bcb8b1',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
