import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import Footer from "./footer";
import "./globals.css";
import AuthProvider from "@/utils/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Giving Heart",
  description: "The Giving Heart Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <nav className="flex justify-center">
            <Navbar />
          </nav>
          {children}
          <Toaster />
        </AuthProvider>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
