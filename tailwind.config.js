/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-slate-100', 'bg-slate-200', 'text-slate-700',
    'bg-gray-300', 'bg-gray-400', 'bg-gray-800', 'text-gray-700', 'text-white',
    'bg-yellow-300', 'bg-yellow-400', 'text-yellow-800',
    'bg-purple-400', 'bg-purple-500', 'text-purple-100',
    'from-blue-500', 'to-purple-600',
    'shadow-xl', 'shadow-2xl'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}