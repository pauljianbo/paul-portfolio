/**
 * Type definition for available section themes
 * Each theme corresponds to a different section of the portfolio
 */
export type SectionTheme = 'home' | 'skills' | 'projects' | 'experience' | 'contact';

/**
 * Color Themes Configuration
 *
 * PURPOSE:
 * Centralized color theme system shared between animated and static background components.
 * This ensures visual consistency while allowing different rendering approaches based on device type.
 *
 * STRUCTURE:
 * - Each section has its own theme (home, skills, projects, experience, contact)
 * - Each theme supports both light and dark modes
 * - Each mode defines: primary gradients, accent gradients, and particle colors
 *
 * USAGE:
 * - GlobalAnimatedBackground: Uses all properties including particles
 * - StaticBackground: Uses primary and accent gradients (no particles)
 *
 * GRADIENT CLASSES:
 * - primary: Main background gradient (from-color via-color to-color)
 * - accent1/accent2: Decorative floating element gradients
 * - particles: Color array for animated particles (desktop only)
 *
 * DESIGN PHILOSOPHY:
 * - Light themes: Soft, airy colors with subtle contrasts
 * - Dark themes: Rich, deep colors with vibrant accents
 * - Each section has its own personality while maintaining cohesion
 */
export const colorThemes = {
  // HOME SECTION: Welcoming blues and pinks for introduction
  home: {
    light: {
      primary: 'from-blue-100 via-blue-50 to-pink-50',
      accent1: 'from-blue-300/20 to-purple-300/20',
      accent2: 'from-pink-300/20 to-blue-300/20',
      particles: ['#1d4ed8', '#7c3aed', '#db2777', '#0891b2', '#059669'],
    },
    dark: {
      primary: 'from-blue-950 via-slate-800 to-black',
      accent1: 'from-blue-500/10 to-purple-500/10',
      accent2: 'from-pink-500/10 to-blue-500/10',
      particles: ['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#059669'],
    },
  },
  // SKILLS SECTION: Technical blues and cyans representing expertise
  skills: {
    light: {
      primary: 'from-blue-50 via-sky-50 to-cyan-50',
      accent1: 'from-blue-300/20 to-sky-300/20',
      accent2: 'from-cyan-300/20 to-blue-300/20',
      particles: ['#3b82f6', '#0ea5e9', '#06b6d4', '#0891b2', '#059669'],
    },
    dark: {
      primary: 'from-slate-900 via-blue-900 to-slate-900',
      accent1: 'from-blue-500/10 to-sky-500/10',
      accent2: 'from-cyan-500/10 to-blue-500/10',
      particles: ['#60a5fa', '#38bdf8', '#22d3ee', '#06b6d4', '#10b981'],
    },
  },
  // PROJECTS SECTION: Creative purples and blues for showcasing work
  projects: {
    light: {
      primary: 'from-slate-50 via-blue-50 to-purple-50',
      accent1: 'from-blue-300/20 to-purple-300/20',
      accent2: 'from-purple-300/20 to-blue-300/20',
      particles: ['#3b82f6', '#8b5cf6', '#a855f7', '#0891b2', '#6366f1'],
    },
    dark: {
      primary: 'from-slate-900 via-blue-900 to-purple-900/40',
      accent1: 'from-blue-500/10 to-purple-500/10',
      accent2: 'from-purple-500/10 to-blue-500/10',
      particles: ['#60a5fa', '#a78bfa', '#c084fc', '#06b6d4', '#818cf8'],
    },
  },
  // EXPERIENCE SECTION: Professional grays and blues for career history
  experience: {
    light: {
      primary: 'from-slate-50 via-blue-50/50 to-gray-50',
      accent1: 'from-slate-300/20 to-blue-300/20',
      accent2: 'from-blue-300/20 to-slate-300/20',
      particles: ['#475569', '#3b82f6', '#64748b', '#0891b2', '#374151'],
    },
    dark: {
      primary: 'from-slate-900 via-slate-800 to-blue-900',
      accent1: 'from-slate-500/10 to-blue-500/10',
      accent2: 'from-blue-500/10 to-slate-500/10',
      particles: ['#94a3b8', '#60a5fa', '#e2e8f0', '#06b6d4', '#f1f5f9'],
    },
  },
  // CONTACT SECTION: Inviting greens and blues encouraging communication
  contact: {
    light: {
      primary: 'from-green-50 via-blue-50 to-cyan-50',
      accent1: 'from-green-300/20 to-blue-300/20',
      accent2: 'from-blue-300/20 to-cyan-300/20',
      particles: ['#10b981', '#3b82f6', '#06b6d4', '#059669', '#0ea5e9'],
    },
    dark: {
      primary: 'from-blue-600 via-slate-900 to-blue-900',
      accent1: 'from-green-500/10 to-blue-500/10',
      accent2: 'from-blue-500/10 to-cyan-500/10',
      particles: ['#34d399', '#60a5fa', '#22d3ee', '#10b981', '#38bdf8'],
    },
  },
} as const;
