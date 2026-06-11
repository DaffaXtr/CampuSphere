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
        "surface-container-highest": "#e1e2ee",
        "on-tertiary-container": "#fffdff",
        "primary-fixed-dim": "#b3c5ff",
        "on-error": "#ffffff",
        "on-secondary-fixed": "#131b2e",
        "on-secondary-container": "#5c647a",
        "text-secondary": "#475569",
        "primary-fixed": "#dae1ff",
        "border": "#E2E8F0",
        "outline-variant": "#c2c6d8",
        "inverse-on-surface": "#eff0fc",
        "on-primary-fixed-variant": "#003fa4",
        "on-secondary": "#ffffff",
        "surface-bright": "#faf8ff",
        "surface-container-high": "#e7e7f4",
        "background": "#faf8ff",
        "tertiary-fixed-dim": "#ffb599",
        "secondary-container": "#dae2fd",
        "secondary": "#565e74",
        "outline": "#727687",
        "on-error-container": "#93000a",
        "tertiary": "#a43a00",
        "surface-container": "#ecedf9",
        "on-surface": "#191b24",
        "primary-container": "#1a6bff",
        "inverse-primary": "#b3c5ff",
        "success": "#10B981",
        "surface-container-low": "#f2f3ff",
        "surface-variant": "#e1e2ee",
        "on-primary-fixed": "#001849",
        "tertiary-fixed": "#ffdbce",
        "primary": "#1A6BFF",
        "surface-container-lowest": "#ffffff",
        "primary-hover": "#0052E0",
        "error-container": "#ffdad6",
        "surface-dim": "#d8d9e5",
        "on-tertiary": "#ffffff",
        "text-primary": "#0F172A",
        "inverse-surface": "#2e3039",
        "on-secondary-fixed-variant": "#3f465c",
        "on-primary-container": "#fffeff",
        "on-tertiary-fixed": "#370e00",
        "error": "#EF4444",
        "surface-tint": "#0055d5",
        "tertiary-container": "#cd4a00",
        "secondary-fixed": "#dae2fd",
        "on-background": "#191b24",
        "warning": "#F59E0B",
        "surface": "#F8FAFC",
        "secondary-fixed-dim": "#bec6e0",
        "on-tertiary-fixed-variant": "#7f2b00",
        "on-primary": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "8px",
        "xl": "12px",
        "2xl": "16px",
        "full": "9999px"
      },
      spacing: {
        "3xl": "80px",
        "2xl": "48px",
        "lg": "24px",
        "xs": "4px",
        "sm": "8px",
        "gutter": "24px",
        "md": "16px",
        "margin-mobile": "16px",
        "xl": "32px",
        "margin-desktop": "80px"
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

