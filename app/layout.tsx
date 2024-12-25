import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { NavigationMenuDemo } from "./components/partials/Navbar";
import { Navbar } from "./components/navbar";

// const yekanSans = localFont({
//   src: "./fonts/BYekan.ttf",
//   variable: "--font-yekan-sans",
//   weight: "100 900",
// });
const myFont = localFont({ src: './Estedad-Medium.ttf' })
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "وب آموز | دنیای برنامه نویسی و وب",
  description: "",
  
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${myFont.className} antialiased `}
      >

        <Navbar/>
       <main className="overflow-hidden">
       {children}
       </main>
      </body>
    </html>
  );
}
