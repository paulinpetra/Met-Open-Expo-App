/** @type {import('tailwindcss').Config} */

const { tokens } = require('./theme/tokens');

module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],

  darkMode: 'class',

  theme: {
    extend: {
      borderRadius: {
        lg: `${tokens.radius.lg}px`,
      },

      fontFamily: {
        heading: ['Playfair_400'],
        body: ['Inter_400'],
        mono: ['Mono_400'],
      },

      colors: {
        background: tokens.colors.dark.background,
        foreground: tokens.colors.dark.foreground,

        card: tokens.colors.dark.card,
        'card-foreground': tokens.colors.dark.cardForeground,

        primary: {
          DEFAULT: tokens.colors.dark.primary,
          foreground: tokens.colors.dark.primaryForeground,
        },

        secondary: {
          DEFAULT: tokens.colors.dark.secondary,
          foreground: tokens.colors.dark.secondaryForeground,
        },

        muted: {
          DEFAULT: tokens.colors.dark.muted,
          foreground: tokens.colors.dark.mutedForeground,
        },

        accent: {
          DEFAULT: tokens.colors.dark.accent,
          foreground: tokens.colors.dark.accentForeground,
        },

        destructive: tokens.colors.dark.destructive,

        border: tokens.colors.dark.border,
        input: tokens.colors.dark.input,
        ring: tokens.colors.dark.ring,
      },
    },
  },

  plugins: [],
};
