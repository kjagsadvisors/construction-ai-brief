import type { Metadata } from "next";
import { Fraunces, Newsreader, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { TitleBar } from "@/components/TitleBar";
import { TitleBlock } from "@/components/TitleBlock";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

const BRAND = process.env.NEXT_PUBLIC_BRAND_NAME ?? "Construction AI Brief";
const TAGLINE =
  process.env.NEXT_PUBLIC_BRAND_TAGLINE ??
  "The honest read on AI in commercial construction.";

export const metadata: Metadata = {
  title: { default: BRAND, template: `%s — ${BRAND}` },
  description: TAGLINE,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://constructionaibrief.com",
  ),
  openGraph: {
    title: BRAND,
    description: TAGLINE,
    type: "website",
  },
  verification: {
    // Pull verification tokens from env so we don't commit codes to git.
    // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION + NEXT_PUBLIC_BING_VERIFY in
    // Vercel project env after claiming the property in each console.
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFY ?? "",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="sheet-corners">
        <TitleBar />
        <main>{children}</main>
        <TitleBlock />
        <Analytics />
      </body>
    </html>
  );
}
