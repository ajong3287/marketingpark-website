import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/header"; // Import Header component
import Footer from "./_components/layout/footer"; // Import Footer component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "마케팅파크", // Updated title
  description: "마케팅파크 - No. 1 Creative Online Marketing", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko"> {/* Changed language to Korean */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`} // Added flexbox for sticky footer
      >
        <Header /> {/* Render Header component */}
        <main className="flex-grow"> {/* Main content area */}
          {children}
        </main>
        <Footer /> {/* Render Footer component */}
      </body>
    </html>
  );
}