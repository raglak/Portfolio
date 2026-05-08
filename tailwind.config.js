/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          secondary: '#111111',
          tertiary: '#1A1A1A',
          rule: '#222222',
        },
        ink: {
          primary: '#F0EDE6',
          secondary: '#8A8780',
          muted: '#4A4845',
        },
        accent: {
          DEFAULT: '#E8C97A',
          dim: '#3D3220',
        },
        success: '#5CB88A',
        link: '#A8C4E0',
        danger: '#E07060',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        'display-xl': [
          'clamp(56px, 10vw, 100px)',
          { lineHeight: '0.92', letterSpacing: '-0.02em' },
        ],
        'display-lg': [
          'clamp(36px, 5vw, 60px)',
          { lineHeight: '1.05', letterSpacing: '-0.01em' },
        ],
      },
      borderRadius: {
        editorial: '3px',
        card: '6px',
      },
    },
  },
  plugins: [],
}
