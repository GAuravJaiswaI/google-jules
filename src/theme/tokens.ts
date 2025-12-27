/**
 * Design System Tokens
 * Shared theme for React (Web) and React Native
 */

export const designTokens = {
  colors: {
    primary: {
      DEFAULT: '#0B0B0C',
      dark: '#000000',
    },
    background: {
      DEFAULT: '#FFFFFF',
      muted: '#FAFAFA',
    },
    accent: {
      DEFAULT: '#2563EB',
      hover: '#1D4ED8',
    },
    text: {
      primary: '#0B0B0C',
      secondary: '#6B7280',
      muted: '#9CA3AF',
    },
    border: {
      DEFAULT: '#E5E7EB',
      dark: '#D1D5DB',
    },
    surface: {
      DEFAULT: '#F9FAFB',
      hover: '#F3F4F6',
    },
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  shadows: {
    soft: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  motion: {
    duration: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.6s',
    },
    easing: {
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
} as const;

// React Native compatible theme object
export const reactNativeTheme = {
  colors: designTokens.colors,
  spacing: designTokens.spacing,
  borderRadius: designTokens.borderRadius,
  shadows: designTokens.shadows,
  typography: designTokens.typography,
};

