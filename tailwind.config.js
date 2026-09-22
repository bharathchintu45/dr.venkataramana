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
        menuPanelIn: {
          "0%": { opacity: "0", transform: "translateY(-12px) scaleY(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scaleY(1)" },
        },
        menuPanelOut: {
          "0%": { opacity: "1", transform: "translateY(0) scaleY(1)" },
          "100%": { opacity: "0", transform: "translateY(-8px) scaleY(0.98)" },
        },
        menuItemIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        menuItemOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-10px)" },
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
        "menu-panel-in": "menuPanelIn 320ms cubic-bezier(0.16,1,0.3,1)",
        // 390ms delay = the item stagger's tail (7 * 30ms) + item-out's own
        // 180ms — the panel only starts collapsing once every item has
        // finished fading out, so nothing looks clipped mid-fade. `forwards`
        // keeps it hidden after the animation ends instead of snapping back
        // to visible for the moment before Navigation.tsx unmounts it.
        "menu-panel-out": "menuPanelOut 180ms cubic-bezier(0.4,0,1,1) 390ms forwards",
        // `backwards` holds the 0% frame through the stagger delay —
        // without it every item flashes at full opacity before animating.
        "menu-item-in": "menuItemIn 380ms cubic-bezier(0.16,1,0.3,1) backwards",
        // `forwards` for the same reason as menu-panel-out above: without
        // it, each item would revert to visible right after its own exit
        // finishes, flashing back before the panel itself has collapsed.
        "menu-item-out": "menuItemOut 180ms cubic-bezier(0.4,0,1,1) forwards",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marqueeVertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [],
}
