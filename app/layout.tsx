import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "UzTerms.uz - Yuridik Hujjat Kuzatuvchisi",
  description: "O‘zbekistondagi barcha saytlarning Terms of Service, Privacy Policy va boshqa hujjatlarini kuzating",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
