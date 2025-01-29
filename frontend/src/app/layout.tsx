import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

// Fonts
const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});
const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Metadata
export const metadata: Metadata = {
  title: "SmartShop",
  description: "Buy and sell products online. Built with Nextjs",
};

// RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} ${barlowFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="smartshop-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
