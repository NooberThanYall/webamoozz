"use client";

import * as React from "react";
import Link from "next/link";
import { BookOpen, House, LogIn, Menu, Newspaper, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import BiLogin from "react-icons";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import Image from "next/image";
import { motion } from "framer-motion";

let navItems = [
  { title: "خانه", href: "/", icon: <House height={18} /> },
  { title: "دوره ها", href: "/about", icon: <BookOpen height={18} /> },
  { title: "مقالات", href: "/services", icon: <Newspaper height={18} /> },
  { title: "ثبت نام", href: "/account/register", icon: <User height={18} /> },
  { title: "ورود", href: "/account/login", icon: <LogIn height={18} /> },
  // { title: "Contact", href: "/contact" },
];

export function Navbar({user}) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (user) {
    const sliced = navItems.slice(-2)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navItems = sliced.push({
      title: user.name,
      href: '/dashboard',
      icon: <User height={18} />
    }) 
  }

  return (
    <motion.nav
      initial={{
        // y:-10,
        opacity: 0.5,
      }}
      animate={{
        // y:0,
        opacity: 1,
      }}
      transition={{ duration: 0.1, delay: 0, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-2 bg-white border-b shadow-md"
    >
      <div className="flex items-center justify-around  max-w-[2000px] mx-auto` bg-white">
        <ul className="hidden md:flex items-center space-x-4 gap-4">
          {navItems.map((item) => (
            <li key={item.title} className="flex items-center">
              <Link
                href={item.href}
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
              >
                {item.icon}
                <span className="text-md">{item.title}</span>
              </Link>
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
          <SheetContent side="right" className="bg-white">
            <nav className="flex flex-col space-y-4 mt-4 bg-white ">
              {navItems.map((item) => (
                <li className="flex items-center" key={item.title}>
                  {/* {item.icon} */}
                  {item.icon}
                  <Button
                    key={item.title}
                    className="text-xl"
                    variant="ghost"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </Button>
                </li>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
