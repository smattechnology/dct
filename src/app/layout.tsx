import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DeltaCube Technology | Empowering Innovation Through Technology",
    template: "%s | DeltaCube Technology",
  },
  description:
    "DeltaCube Technology is a next-generation software company delivering scalable web, mobile, AI, and cloud solutions. We help businesses innovate, automate, and grow.",
  applicationName: "DeltaCube Technology",
  keywords: [
    "DeltaCube Technology",
    "Software Development Company",
    "Web Development",
    "Mobile App Development",
    "AI Solutions",
    "Automation",
    "Cloud Services",
    "DevOps",
    "UI UX Design",
    "Bangladesh Software Company",
  ],
  authors: [{ name: "Abir Hasan", url: "https://www.deltacubetechnology.com" }],
  creator: "DeltaCube Technology",
  publisher: "DeltaCube Technology",

  metadataBase: new URL("https://www.deltacubetechnology.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "DeltaCube Technology | Empowering Innovation Through Technology",
    description:
      "We craft intelligent digital solutions — from custom software and AI automation to scalable cloud systems.",
    url: "https://www.deltacubetechnology.com",
    siteName: "DeltaCube Technology",
    images: [
      {
        url: "/og-image.png", // add this image in /public
        width: 1200,
        height: 630,
        alt: "DeltaCube Technology – Software & AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DeltaCube Technology | Software, AI & Cloud Solutions",
    description:
      "Custom software, AI-driven automation, and cloud-native solutions to help businesses scale.",
    images: ["/og-image.png"],
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

  category: "Technology",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
