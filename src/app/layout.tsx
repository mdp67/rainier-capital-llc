import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rainier Capital LLC | Capital Introductions in Aviation, Real Estate & AI",
  description:
    "Boutique capital feeder and deal-origination firm connecting high-impact opportunities in Aviation, Real Estate, and AI. Capital introductions and strategic advisory from an active pilot, engineer, MBA, and real estate professional.",
  keywords: [
    "capital introductions",
    "deal origination",
    "aviation investment",
    "real estate investment",
    "AI strategy",
    "private capital",
    "feeder fund",
  ],
  authors: [{ name: "Rainier Capital LLC" }],
  openGraph: {
    title: "Rainier Capital LLC | Capital Introductions in Aviation, Real Estate & AI",
    description:
      "Boutique capital feeder and deal-origination firm connecting high-impact opportunities in Aviation, Real Estate, and AI.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A2540" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
