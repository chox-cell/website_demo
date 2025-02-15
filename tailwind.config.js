/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#4A3B8F', // Rich purple
          light: '#6B5BB5',   // Light purple
          dark: '#2D2266',    // Dark purple
        },
        'accent': {
          DEFAULT: '#3B82F6', // Bright blue
          light: '#60A5FA',   // Light blue
          dark: '#2563EB',    // Dark blue
        },
        'text': {
          DEFAULT: '#1F2937', // Dark gray for main text
          secondary: '#4B5563', // Medium gray for secondary text
          light: '#6B7280',   // Light gray for muted text
        },
        'border': {
          DEFAULT: '#E5E7EB',
          accent: '#4A3B8F20',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #4A3B8F 0%, #3B82F6 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(74, 59, 143, 0.05)',
        'glow': '0 0 20px rgba(74, 59, 143, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}