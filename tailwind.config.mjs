/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        // New 3-Color Palette
        'brand-bg': '#ebf6f5',       // Teeny Greeny - Main Background
        'brand-primary': {
          light: '#6bcac7', // Lighter shade of Blue Greeny
          DEFAULT: '#5cbdb9', // Blue Greeny - Main Accent/Action
          dark: '#4aa7a4',  // Darker shade of Blue Greeny
        },
        'brand-accent': {
          light: '#fce9ed', // Lighter Pinky
          DEFAULT: '#fbe3e8', // Pinky - Subtle Accents
          dark: '#f9d5dd',  // Darker Pinky
        },
        'brand-text': {
          primary: '#2c3e50',   // Dark Slate Blue/Gray - High Readability
          secondary: '#5a6a7a', // Medium Slate Gray
          on_primary: '#ffffff', // White text on primary color bg
          on_accent: '#8c6a71', // Darker muted pink for text on accent bg
        },
        'brand-surface': { // For cards, headers etc.
          DEFAULT: '#ffffff', // White surface
          subtle: '#f5faf9', // Very slightly off-white, derived from bg
        },
        'brand-border': {
          DEFAULT: '#d8e0df', // Subtle border derived from bg/primary
          accent: '#f9d5dd', // Pinky border
        },

        // Deprecating old names - keeping for reference during transition if needed
        // 'brand-background': '#88BDBC',
        // 'brand-secondary': '#4F4A41',
        // 'brand-neutral': { ... },
        // primary: { ... },
        // secondary: { ... },
        // neutral: { ... }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Keeping Inter
      },
      backdropBlur: { // Keeping blur options, but might use less
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: { // Add some subtle shadows for depth
        'subtle': '0 2px 4px 0 rgba(44, 62, 80, 0.08)',
        'card': '0 4px 12px 0 rgba(44, 62, 80, 0.1)',
      }
    },
	},
	plugins: [
    require('@tailwindcss/forms'),
  ],
}
