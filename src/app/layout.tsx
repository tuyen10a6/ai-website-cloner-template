import type { Metadata } from "next";
import { Jost, Poppins } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DODOMIO Robotics",
  description: "DODOMIO website giới thiệu robot AI, giải pháp AI và đăng ký demo.",
  icons: {
    icon: "/images/dodo/dodomio.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${jost.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
