import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
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
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
