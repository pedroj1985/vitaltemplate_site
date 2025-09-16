/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--vital-color)',
        secondary: 'var(--soluciones-color)',
        background: 'var(--background-color)',
        foreground: 'var(--foreground-color)',
        border: 'var(--border-color)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
