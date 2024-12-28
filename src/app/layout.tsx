import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { ModalProvider } from "@/providers/modal-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "swiper/css";
import "./globals.css";

const primary = localFont({ src: "../../public/fonts/Assassin.ttf", variable: "--font-primary" });
const secondary = localFont({ src: "../../public/fonts/calibri.ttf", variable: "--font-secondary" });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | One Kingdom",
    default: "One Kingdom", // a default is required when creating a template
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${primary.variable} ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ModalProvider>{children}</ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
