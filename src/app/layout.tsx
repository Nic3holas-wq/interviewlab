import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { inter } from '@/app/ui/fonts';
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SessionProviderWrapper from "./providers/SessionProviderWrapper";

export const metadata: Metadata = {
  title: "InterviewLab",
  description: "AI-Powered Interview Coaching - Land Your Dream Job",
  icons: {
    icon: '/logo.png', // <-- your new favicon path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar/>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
        <SpeedInsights/>
        <Footer/>
      </body>
    </html>
  );
}
