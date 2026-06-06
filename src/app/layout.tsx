import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MSS Steel Tubes USA LLC | Premium Steel Tubes Manufacturing — Memphis, TN",
  description:
    "MSS Steel Tubes USA LLC — a Metalogalva Group company. $6M state-of-the-art steel tubes production facility in Memphis, Tennessee, serving the U.S. solar panel manufacturing industry with 129 new jobs.",
  keywords: [
    "MSS Steel Tubes", "steel tubes", "Memphis manufacturing", "solar panel tubes",
    "Metalogalva Group", "Soufer Group", "steel production", "Tennessee manufacturing",
  ],
  openGraph: {
    title: "MSS Steel Tubes USA LLC | Premium Steel Tubes — Memphis, TN",
    description:
      "$6M steel tubes production plant in Memphis, TN. Serving U.S. solar manufacturers. 129 new jobs.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
