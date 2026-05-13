import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        // blueprint paper — warm off-white, never pure white
        paper: "#F4F1EA",
        // a second paper, slightly lighter for cards/insets
        paperLite: "#F9F6EF",
        // deep ink — slate-blue-black, what real drawings are inked in
        ink: "#1B1F2A",
        // mid graphite for secondary text + dimension lines
        graphite: "#5F6573",
        // rule color — the grid + faint dividers
        rule: "#D8D2C2",
        // strong rule — title block borders + section dividers
        ruleStrong: "#1B1F2A",
        // safety orange — the one accent. Used sparingly.
        accent: "#E54B00",
        // stamp red — for special callouts ("APPROVED", "REVISED")
        stamp: "#B83228",
        // approval green — used for "READY", "PUBLISHED" pill states
        approval: "#3C6E47",
      },
      letterSpacing: {
        tightest: "-0.04em",
        wide2: "0.18em",
      },
      maxWidth: {
        sheet: "84rem",
        prose: "68ch",
      },
      borderWidth: {
        hair: "0.5px",
      },
      backgroundImage: {
        // 8mm graph paper — used as a subtle texture on the body
        grid: `
          linear-gradient(to right, rgba(27,31,42,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(27,31,42,0.04) 1px, transparent 1px)
        `,
        // 4mm finer grid — used on hero
        gridFine: `
          linear-gradient(to right, rgba(27,31,42,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(27,31,42,0.05) 1px, transparent 1px)
        `,
        // 45° hatching, like a section cut
        hatch: `repeating-linear-gradient(45deg, rgba(27,31,42,0.08) 0, rgba(27,31,42,0.08) 1px, transparent 1px, transparent 6px)`,
      },
      backgroundSize: {
        grid: "32px 32px",
        gridFine: "16px 16px",
      },
      keyframes: {
        draw: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        stamp: {
          "0%": { opacity: "0", transform: "rotate(-8deg) scale(0.85)" },
          "60%": { opacity: "1", transform: "rotate(-8deg) scale(1.04)" },
          "100%": { opacity: "1", transform: "rotate(-8deg) scale(1)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        draw: "draw 1.2s ease-out forwards",
        stamp: "stamp 0.45s cubic-bezier(0.16,1,0.3,1) forwards",
        reveal: "reveal 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
