import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solomon Ampomah - Full Stack Software Engineer & Web Developer",
  description: "FullStack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plex_mono.variable}`}>
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
