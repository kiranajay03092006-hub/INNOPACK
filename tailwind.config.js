/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          soft: '#F4B7A5',
          DEFAULT: '#F4B7A5',
          champagne: '#E9A58F',
          blush: '#D98F7B',
          glow: 'rgba(244, 183, 165, 0.45)',
          glass: 'rgba(244, 183, 165, 0.13)',
          subtle: 'rgba(244, 183, 165, 0.08)',
        },
        silver: {
          pale: '#D8DADD',
          metallic: '#AEB3B9',
          steel: '#777E86',
          border: 'rgba(216, 218, 221, 0.28)',
          glass: 'rgba(216, 218, 221, 0.08)',
        },
        dark: {
          graphite: '#292B2F',
          obsidian: '#17181B',
          surface: '#1E2024',
          subtle: '#22252A',
        },
        softWhite: '#F5F4F2',
      },
      fontFamily: {
        sans: ['"Inter"', '"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'monospace']
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(216, 218, 221, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(216, 218, 221, 0.04) 1px, transparent 1px)",
        'volumetric-peach': "radial-gradient(circle at 60% 40%, rgba(244, 183, 165, 0.15) 0%, transparent 65%)",
        'volumetric-silver': "radial-gradient(circle at 30% 70%, rgba(216, 218, 221, 0.10) 0%, transparent 65%)",
        'specular-silver': "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(216, 218, 221, 0.05) 100%)",
        'peach-gradient': "linear-gradient(135deg, #F4B7A5 0%, #E9A58F 50%, #D98F7B 100%)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'laser-sweep': 'laserSweep 4s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        laserSweep: {
          '0%, 100%': { transform: 'translateY(-10%)', opacity: '0.2' },
          '50%': { transform: 'translateY(110%)', opacity: '0.9' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
