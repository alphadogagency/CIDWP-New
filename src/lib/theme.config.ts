/** William’s November 3 charcoal selection; mirrored in global.css. */
export const theme = {
  colors: {
    primary: "#2B2E33",
    secondary: "#137A93",
    accent: "#C6A767",
    background: "#FFFFFF",
    foreground: "#2B2E33",
    muted: "#515459",
    brand: "#137A93",
    blue: "#C6A767",
    pale: "#F7F5F1",
    mist: "#F7F5F1",
    ink: "#2B2E33",
  },
  fonts: { heading: "'Cormorant Garamond', Georgia, serif", body: "'Manrope', sans-serif" },
  radius: { sm: "16px", md: "24px", lg: "999px" },
} as const;
export type Theme = typeof theme;
