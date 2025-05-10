"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Spin as Hamburger } from "hamburger-react";
import { navbar_menu } from "@/constant";
import Link from "next/link";
import Users from "../users";

export default function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav className="mx-auto flex h-10 w-full max-w-screen-xl items-center justify-between bg-white p-2 px-3">
      <Link href={"/"}>
        <Image src={"/img/Logo-colored.png"} alt="" width={80} height={100} />
      </Link>

      <div className="flex items-center gap-1">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Hamburger toggled={isOpen} size={25} />
          </SheetTrigger>
          <SheetContent className="flex h-full w-full gap-16">
            <SheetHeader>
              <SheetTitle>MENU</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col items-start gap-8 font-medium">
              {navbar_menu.map((item) => (
                <div key={item.name} className="flex w-full">
                  <ul className="w-full border-b border-black text-lg">
                    <Link href={item.href} onClick={closeMobileMenu}>
                      {item.name}
                    </Link>

                    {item.options?.map((item) => (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        key={item.name}
                        className="border-b p-4 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div onClick={closeMobileMenu}>
              <Users />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
