"use client";

import * as React from "react";
import Link from "next/link";
import { BookOpen, House, LogIn, Menu, Newspaper, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import BiLogin from "react-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import Image from "next/image";

const navItems = [
  { title: "خانه", href: "/", icon: <House height={18} /> },
  { title: "دوره ها", href: "/about", icon: <BookOpen height={18} /> },
  { title: "مقالات", href: "/services", icon: <Newspaper height={18} /> },
  { title: "ثبت نام", href: "/services", icon: <User height={18} /> },
  { title: "ورود", href: "/services", icon: <LogIn height={18} /> },
  // { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-2 bg-white border-b shadow-xl">
      <div className="flex items-center justify-around  max-w-[2000px] mx-auto">
        <ul className="hidden md:flex items-center space-x-4 gap-4">
          {navItems.map((item) => (
            <li key={item.title} className="flex items-center">
              {item.icon}
              <Button
                className={"text-md flex m-0 p-0"}
                key={item.title}
                variant="ghost"
                asChild
              >
                <Link href={item.href} className="m-0">
                  {item.title}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex items-center p-0 m-0">
          <Link href="/" className="text-xl font-bold">
            <Image
              src={"/images/Logo.png"}
              alt="Webamoozz logo"
              width={200}
              height={100}
            />
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  variant="ghost"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
