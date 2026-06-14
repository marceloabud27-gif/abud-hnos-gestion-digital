/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        ink: '#101828',
        muted: '#667085',
        line: '#d9e2ec',
        brand: '#0f766e',
        ocean: '#2563eb',
        sun: '#f59e0b',
        mint: '#ecfdf5',
        paper: '#f8fafc',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.10)',
      },
    },
  },
  plugins: [],
}
