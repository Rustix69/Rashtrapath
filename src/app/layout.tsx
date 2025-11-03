import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rashtrapath - Voice of the People | Civic Journalism Platform",
  description: "Rashtrapath is a digital civic journalism platform empowering citizens, uncovering truths, and challenging corruption. A voice for the people—standing against injustice, promoting transparency, and upholding democracy.",
  keywords: ["civic journalism", "democracy", "transparency", "accountability", "social justice", "governance", "reform"],
  authors: [{ name: "Rashtrapath" }],
  openGraph: {
    title: "Rashtrapath - Voice of the People",
    description: "A digital civic journalism platform empowering citizens and promoting accountability.",
    type: "website",
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
      </body>
    </html>
  );
}
