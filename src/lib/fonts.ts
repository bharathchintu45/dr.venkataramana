import { Fraunces, Inter } from "next/font/google";

// Display / heading face — Fraunces carries the herbarium-label mood
// (a botanical serif, not a generic didone) without loading a second
// unrelated typeface. Variable font, so headings can lean into its
// "soft"/optical-size axes later without another network request.
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: "variable",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"]
});

// Body / UI face — Inter carries data, labels and long-form copy.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});
