import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface-variant": "#424655",
        "surface-container-highest": "#DBEAFE", // Light Blue
        "on-tertiary-container": "#ffffff",
        "primary-fixed-dim": "#60A5FA", // Soft Blue (mapped to primary-fixed-dim)
        "on-error": "#ffffff",
        "on-secondary-fixed": "#131b2e",
        "on-secondary-container": "#5c647a",
        "text-secondary": "#64748B", // Gray Text
        "primary-fixed": "#DBEAFE", // Light Blue (mapped to primary-fixed)
        "border": "#E2E8F0", // Border Gray
        "outline-variant": "#c2c6d8",
        "inverse-on-surface": "#eff0fc",
        "on-primary-fixed-variant": "#003fa4",
        "on-secondary": "#ffffff",
        "surface-bright": "#EFF6FF", // Ultra Light
        "surface-container-high": "#DBEAFE", // Light Blue
        "background": "#EFF6FF", // Ultra Light
        "tertiary-fixed-dim": "#ffb599",
        "secondary-container": "#DBEAFE",
        "secondary": "#2563EB",
        "outline": "#64748B",
        "on-error-container": "#93000a",
        "tertiary": "#FBBF24", // Primary Yellow
        "surface-container": "#EFF6FF",
        "on-surface": "#1E293B", // Dark Navy
        "primary-container": "#2563EB",
        "inverse-primary": "#60A5FA", // Soft Blue
        "success": "#10B981",
        "surface-container-low": "#EFF6FF",
        "surface-variant": "#DBEAFE",
        "on-primary-fixed": "#001849",
        "tertiary-fixed": "#FDE68A", // Soft Yellow
        "primary": "#2563EB", // Bright Blue
        "surface-container-lowest": "#ffffff",
        "primary-hover": "#1D4ED8", // Deep Blue (Hover)
        "error-container": "#ffdad6",
        "surface-dim": "#d8d9e5",
        "on-tertiary": "#ffffff",
        "text-primary": "#1E293B", // Dark Navy
        "inverse-surface": "#2e3039",
        "on-secondary-fixed-variant": "#3f465c",
        "on-primary-container": "#ffffff",
        "on-tertiary-fixed": "#370e00",
        "error": "#EF4444",
        "surface-tint": "#2563EB",
        "tertiary-container": "#FDE68A",
        "secondary-fixed": "#DBEAFE",
        "on-background": "#1E293B",
        "warning": "#F59E0B",
        "surface": "#FFFFFF", // Background White
        "secondary-fixed-dim": "#bec6e0",
        "on-tertiary-fixed-variant": "#7f2b00",
        "on-primary": "#ffffff",
        // Brand Style Guide Specific Palette - Blue & Yellow
        "primary-blue": "#2563EB", // Bright Blue
        "secondary-blue": "#1D4ED8", // Deep Blue
        "soft-blue": "#60A5FA", // Soft Blue
        "light-blue": "#DBEAFE", // Light Blue
        "ultra-light-blue": "#EFF6FF", // Ultra Light
        "primary-yellow": "#FBBF24", // Primary Yellow
        "secondary-yellow": "#F59E0B", // Golden Yellow
        "soft-yellow": "#FDE68A", // Soft Yellow
        "pale-yellow": "#FEF3C7", // Pale Yellow
        "dark-yellow": "#D97706" // Dark Yellow text for readability
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "12px",
        "xl": "16px",
        "2xl": "24px",
        "3xl": "32px",
        "full": "9999px"
      },
      spacing: {
        "xs": "4px",
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px",
        "2xl": "48px",
        "3xl": "80px",
        "4xl": "96px",
        "5xl": "128px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "margin-desktop": "40px",
        "margin-lg-desktop": "64px"
      },
      boxShadow: {
        "cs-sm": "0 4px 12px rgba(37, 99, 235, 0.08)",
        "cs-md": "0 8px 24px rgba(37, 99, 235, 0.12)",
        "cs-hero": "0 20px 60px rgba(37, 99, 235, 0.15)"
      },
      fontFamily: {
        "body-lg": ["Inter", "sans-serif"],
        "headline-xl-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "headline-xl": ["Plus Jakarta Sans", "sans-serif"],
        "numeric-tabular": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"]
      },
      fontSize: {
        "body-lg": ["1.125rem", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-xl-mobile": ["2.25rem", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "headline-md": ["1.5rem", {"lineHeight": "1.3", "fontWeight": "700"}],
        "headline-lg": ["2rem", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700"}],
        "label-sm": ["0.75rem", {"lineHeight": "1", "fontWeight": "500"}],
        "headline-xl": ["3rem", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "numeric-tabular": ["1rem", {"fontWeight": "500"}],
        "label-md": ["0.875rem", {"lineHeight": "1", "fontWeight": "600"}],
        "body-sm": ["0.875rem", {"lineHeight": "1.5", "fontWeight": "400"}],
        "body-md": ["1rem", {"lineHeight": "1.6", "fontWeight": "400"}]
      }
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
}

