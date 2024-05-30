import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The thread that binds every dream to its ethereal",
  description: "The thread that binds every dream to its ethereal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div>
            <Navbar />
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
