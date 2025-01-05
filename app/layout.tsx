import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "./components/navbar";
import connectDB from "@/lib/db/mongodb";
import { decrypt, encrypt } from "@/lib/auth/jwt";
import { AuthContextProvider } from "./context/AuthContext";
import { cookies } from "next/headers";

const myFont = localFont({ src: "./Estedad-Medium.ttf" });
const myFontBold = localFont({ src: "./Estedad-Bold.ttf" });

export const metadata: Metadata = {
  title: "وب آموز | دنیای برنامه نویسی و وب",
  description: "",
};

export default async function RootLayout({
  req,
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${myFont.className} antialiased `}>
          <Navbar user={null} />
          <main className="overflow-hidden">{children}</main>
          <Analytics />
          <SpeedInsights />
      </body>
    </html>
  );
}
