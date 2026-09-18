/** @type {import('tailwindcss').Config} */

// Channel-triplet helper: CSS vars hold "R G B" so Tailwind's
// <alpha-value> placeholder keeps working with /NN opacity modifiers
// (e.g. `bg-surface/60`) across every color below.
const rgb = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: rgb("--paper"),
          raised: rgb("--paper-raised"),
        },
        ink: {
          DEFAULT: rgb("--ink"),
          secondary: rgb("--ink-secondary"),
          muted: rgb("--ink-muted"),
        },
        line: {
          DEFAULT: rgb("--line"),
          strong: rgb("--line-strong"),
        },
        herbarium: {
          DEFAULT: rgb("--herbarium"),
          deep: rgb("--herbarium-deep"),
          tint: rgb("--herbarium-tint"),
        },
        annotation: rgb("--annotation"),
        plate: {
          DEFAULT: rgb("--plate"),
          raised: rgb("--plate-raised"),
        },
        "plate-ink": {
          DEFAULT: rgb("--plate-ink"),
          muted: rgb("--plate-ink-muted"),
        },
        state: {
          success: rgb("--state-success"),
          danger: rgb("--state-danger"),
        },
        heart: rgb("--heart"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        raised: "var(--shadow-raised)",
        plate: "var(--shadow-plate)",
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionDuration: {
        instant: "120ms",
        fast: "180ms",
        base: "280ms",
        slow: "420ms",
      },
      transitionTimingFunction: {
        enter: "cubic-bezier(0.16, 1, 0.3, 1)",
        exit: "cubic-bezier(0.4, 0, 1, 1)",
        standard: "cubic-bezier(0.2, 0, 0, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        dialogIn: {
          "0%": { opacity: "0", transform: "translateY(10px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        dialogOut: {
          "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(6px) scale(0.98)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        marqueeVertical: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "fade-in": "fadeIn 180ms ease-out",
        "dialog-in": "dialogIn 280ms cubic-bezier(0.16,1,0.3,1)",
        "dialog-out": "dialogOut 180ms cubic-bezier(0.4,0,1,1)",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marqueeVertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [],
}
