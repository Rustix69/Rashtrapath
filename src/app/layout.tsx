import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://rashtravoice.in");

const defaultPreviewImage = "/logo.jpeg";

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: "RashtraVoice — Voice of the Nation",
  description:
    "RashtraVoice is a civic journalism platform focused on truth, accountability, and public awareness.",

  keywords: [
    "civic journalism",
    "india news",
    "governance",
    "transparency",
    "public voice"
  ],

  authors: [{ name: "RashtraVoice" }],

  openGraph: {
    title: "RashtraVoice — Voice of the Nation",
    description:
      "A platform amplifying citizen voices and promoting accountability.",
    type: "website",
    url: "/",
    siteName: "RashtraVoice",
    images: [
      {
        url: defaultPreviewImage,
        alt: "RashtraVoice",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RashtraVoice — Voice of the Nation",
    description:
      "A platform amplifying citizen voices and promoting accountability.",
    images: [defaultPreviewImage],
  },

  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
