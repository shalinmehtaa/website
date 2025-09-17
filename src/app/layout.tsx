import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/next";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s — Shalin Mehta",
    default: "Shalin's Space",
  },
  description: "Writing, projects and experiments.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased bg-[--color-background] text-[--color-foreground]`}>
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
