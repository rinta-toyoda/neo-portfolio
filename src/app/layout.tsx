import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { personalInfo } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.bio,
  keywords: [
    "full-stack engineer",
    "software developer",
    "react",
    "next.js",
    "typescript",
    "php",
    "python",
    "aws",
    "japan",
    "portfolio",
    "web development"
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  metadataBase: new URL('https://rinta.id.au'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rinta.id.au",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: "/rinta-photo.jpg",
        width: 800,
        height: 600,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio,
    images: ["/rinta-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="canonical" href="https://rinta.id.au" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.name,
              jobTitle: personalInfo.title,
              description: personalInfo.bio,
              url: "https://rinta.id.au",
              image: "https://rinta.id.au/rinta-photo.jpg",
              sameAs: [
                personalInfo.github,
                personalInfo.linkedin,
              ],
              worksFor: {
                "@type": "Organization",
                name: "Taskhub",
                url: "https://taskhub.jp"
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "University of Sydney"
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Waseda University"
                }
              ],
              knowsLanguage: personalInfo.languages
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950 transition-colors duration-300`}
      >
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
