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
        "on-surface-variant": "#374151", // Dark Gray
        "surface-container-highest": "#E8F5E9", // Soft Green
        "on-tertiary-container": "#ffffff",
        "primary-fixed-dim": "#A5D6A7", // Soft Green Tint
        "on-error": "#ffffff",
        "on-secondary-fixed": "#374151", // Dark Gray
        "on-secondary-container": "#6B7280", // Medium Gray
        "text-secondary": "#6B7280", // Medium Gray
        "primary-fixed": "#C8E6C9", // Soft Green Light
        "border": "#D1D5DB", // Light Gray
        "outline-variant": "#D1D5DB", // Light Gray
        "inverse-on-surface": "#F9FAFB", // Extra Light Gray
        "on-primary-fixed-variant": "#1B5E20", // Dark Green
        "on-secondary": "#ffffff",
        "surface-bright": "#F9FAFB", // Extra Light Gray
        "surface-container-high": "#E8F5E9", // Soft Green
        "background": "#F9FAFB", // Extra Light Gray
        "tertiary-fixed-dim": "#F8BBD0", // Soft Magenta Tint
        "secondary-container": "#E8F5E9", // Soft Green
        "secondary": "#4CAF50", // Secondary Green
        "outline": "#6B7280", // Medium Gray
        "on-error-container": "#93000a",
        "tertiary": "#D81B60", // Primary Magenta
        "surface-container": "#F4FAF4", // Light Green
        "on-surface": "#374151", // Dark Gray
        "primary-container": "#2E7D32",
        "inverse-primary": "#A5D6A7", // Soft Green
        "success": "#2E7D32", // Primary Green
        "surface-container-low": "#F4FAF4", // Light Green
        "surface-variant": "#E8F5E9", // Soft Green
        "on-primary-fixed": "#1B5E20", // Dark Green
        "tertiary-fixed": "#F8BBD0", // Soft Magenta Tint
        "primary": "#2E7D32", // Primary Green
        "surface-container-lowest": "#ffffff",
        "primary-hover": "#4CAF50", // Secondary Green
        "error-container": "#ffdad6",
        "surface-dim": "#D1D5DB", // Light Gray
        "on-tertiary": "#ffffff",
        "text-primary": "#374151", // Dark Gray
        "inverse-surface": "#374151", // Dark Gray
        "on-secondary-fixed-variant": "#6B7280", // Medium Gray
        "on-primary-container": "#ffffff",
        "on-tertiary-fixed": "#AD1457", // Dark Magenta
        "error": "#EF4444",
        "surface-tint": "#2E7D32", // Primary Green
        "tertiary-container": "#E91E63", // Bright Magenta
        "secondary-fixed": "#C8E6C9", // Soft Green
        "on-background": "#374151", // Dark Gray
        "warning": "#F59E0B",
        "surface": "#F9FAFB", // Extra Light Gray
        "secondary-fixed-dim": "#A5D6A7", // Soft Green
        "on-tertiary-fixed-variant": "#AD1457", // Dark Magenta
        "on-primary": "#ffffff",
        // Brand Style Guide Specific Palette
        "primary-green": "#2E7D32",
        "secondary-green": "#4CAF50",
        "soft-green": "#E8F5E9",
        "light-green": "#F4FAF4",
        "primary-magenta": "#D81B60",
        "bright-magenta": "#E91E63",
        "soft-magenta": "#FCE4EC",
        "dark-magenta": "#AD1457"
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

