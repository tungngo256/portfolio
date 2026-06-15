import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://portfolio-corbin-dev.vercel.app";
const TITLE = "Ngo Huu Thanh Tung — Front-End Developer";
const DESCRIPTION =
  "Front-End Developer building fast, accessible, and beautiful web experiences. Specialized in React, Next.js, SEO & Core Web Vitals optimization.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Ngo Huu Thanh Tung",
  },
  description: DESCRIPTION,
  keywords: [
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Performance",
    "SEO",
    "Core Web Vitals",
    "Ho Chi Minh City",
    "Ngo Huu Thanh Tung",
  ],
  authors: [{ name: "Ngo Huu Thanh Tung", url: SITE_URL }],
  creator: "Ngo Huu Thanh Tung",
  publisher: "Ngo Huu Thanh Tung",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Ngo Huu Thanh Tung",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ngo Huu Thanh Tung",
    url: SITE_URL,
    jobTitle: "Front-End Developer",
    description: DESCRIPTION,
    email: "tungngo256@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Web Performance",
      "Core Web Vitals",
      "SEO",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
