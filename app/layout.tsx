import type { Metadata, Viewport } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pramudito Metra | Fullstack & Mobile Developer",
  description:
    "Portfolio of Pramudito Metra, Fullstack & Mobile Developer based in Padang, Indonesia. Engineering scalable backends and high-craft digital interfaces.",
  keywords: [
    "Pramudito Metra",
    "Fullstack Developer",
    "Mobile Developer",
    "React Native",
    "Next.js",
    "Laravel",
    "Software Engineer",
  ],
  authors: [{ name: "Pramudito Metra", url: "https://portfolio-pramudito.vercel.app/" }],
  creator: "Pramudito Metra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-pramudito.vercel.app/",
    siteName: "Pramudito Metra Portfolio",
    title: "Pramudito Metra | Fullstack & Mobile Developer",
    description:
      "Engineering scalable backends and high-craft digital interfaces for enterprise and cross-border solutions.",
  },
  icons: {
    icon: "/assets/vectors/pm-logo.svg",
    apple: "/assets/vectors/pm-logo.svg",
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
      className={`${anton.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#EDEDED] text-[#0A0A0A] font-sans selection:bg-black selection:text-white antialiased overflow-x-hidden">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
