import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        // === Light Mode Shadows - Sky Blue Theme ===
        // Color: Sky-500 (#0ea5e9)
        'glow-sm': '0 0 15px rgba(14,165,233,0.5)',
        // Small subtle glow effect for light mode
        // Usage: shadow-glow-sm

        glow: '0 0 20px rgba(14,165,233,0.5)',
        // Medium glow effect for light mode
        // Usage: shadow-glow

        'glow-lg': '0 0 20px rgba(14,165,233,0.5), 0 0 40px rgba(14,165,233,0.3)',
        // Large double-layered glow effect for light mode
        // Usage: shadow-glow-lg

        // === Dark Mode Shadows - Cosmic Purple Theme ===
        // Color: Violet-400 (#a78bfa)
        'dark-glow-sm': '0 0 15px rgba(167,139,250,0.5)',
        // Small subtle glow effect for dark mode
        // Usage: shadow-dark-glow-sm

        'dark-glow': '0 0 20px rgba(167,139,250,0.5)',
        // Medium glow effect for dark mode
        // Usage: shadow-dark-glow

        'dark-glow-lg': '0 0 20px rgba(167,139,250,0.5), 0 0 40px rgba(167,139,250,0.3)',
        // Large double-layered glow effect for dark mode
        // Usage: shadow-dark-glow-lg
      },
      colors: {
        light: {
          // === Light Mode Color Scheme - Sky Blue Theme ===
          background: {
            DEFAULT: '#f8fafc', // Slate-50 (fallback)
            gradient: {
              start: '#f0f9ff', // Sky-50
              via: '#e0f2fe', // Sky-100
              end: '#bae6fd', // Sky-200
            },
          },
          // Usage: bg-gradient-to-br from-light-background-gradient-start
          // via-light-background-gradient-via to-light-background-gradient-end

          paper: '#bae6fd', // light sky blue
          // Light mode elevated surface - clean white
          // Usage: bg-light-paper

          primary: '#0ea5e9', // Sky-500
          // Light mode primary actions - vibrant sky blue
          // Usage: bg-light-primary, text-light-primary

          secondary: '#7dd3fc', // sky-300
          // Light mode secondary actions - lighter sky blue
          // Usage: bg-light-secondary, text-light-secondary

          text: {
            primary: '#0f172a', // Slate-900
            // Light mode main text - deep slate for contrast
            // Usage: text-light-text-primary

            secondary: '#475569', // Slate-600
            // Light mode secondary text - balanced slate
            // Usage: text-light-text-secondary

            disabled: '#94a3b8', // Slate-400
            // Light mode disabled text - subtle slate
            // Usage: text-light-text-disabled
          },

          border: '#e2e8f0', // Slate-200
          // Light mode borders - subtle boundaries
          // Usage: border-light-border
        },
        dark: {
          // === Dark Mode Color Scheme - Blue/Cyan/Green Theme ===
          background: {
            DEFAULT: '#0f172a', // Slate-900
            gradient: {
              start: '#0f172a', // Slate-900
              via: '#0369a1', // Sky-800
              end: '#0e7490', // Cyan-900
            },
          },
          // Usage: dark:bg-gradient-to-br from-dark-background-gradient-start
          // via-dark-background-gradient-via to-dark-background-gradient-end

          paper: '#1e293b', // Slate-800
          // Dark mode elevated surface - deep slate
          // Usage: dark:bg-dark-paper

          primary: '#22d3ee', // Cyan-400 for a bright accent
          // Dark mode primary actions - bright cyan
          // Usage: dark:bg-dark-primary, dark:text-dark-primary

          secondary: '#38bdf8', // Sky-400 for blue accent
          // Dark mode secondary actions - blue accent
          // Usage: dark:bg-dark-secondary, dark:text-dark-secondary

          text: {
            primary: '#f1f5f9', // Slate-50
            // Dark mode main text - bright slate
            // Usage: dark:text-dark-text-primary

            secondary: '#bae6fd', // Cyan-200
            // Dark mode secondary text - soft cyan
            // Usage: dark:text-dark-text-secondary

            disabled: '#64748b', // Slate-500
            // Dark mode disabled text - muted slate
            // Usage: dark:text-dark-text-disabled
          },

          border: '#334155', // Slate-700 for boundaries
          // Dark mode borders - slate boundaries
          // Usage: dark:border-dark-border
        },
      },
    },
  },
  plugins: [],
};
export default config;
