import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar/Navbar";
import { Footer } from "@/components/ui";

const inter = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <body className={inter.variable}>
        <div>
          <div>
            <Navbar />
          </div>
          <div>{children}</div>
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
