// Define theme variables for consistent usage across the application
export const themeConfig = {
    // Brand colors
    primaryHue: 235, // Indigo color
    primarySaturation: 82,
    primaryLightness: 63,

    // Color scale generation helpers
    getHsl: (h: number, s: number, l: number) => `hsl(${h} ${s}% ${l}%)`,
    getHslVariable: (h: number, s: number, l: number) => `${h} ${s}% ${l}%`,

    // App specific
    borderRadius: "0.5rem",

    // Animation timings
    transitionShort: "150ms",
    transitionMedium: "250ms",
    transitionLong: "350ms",

    // Font sizes (using rem for better accessibility)
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
    },
  }

