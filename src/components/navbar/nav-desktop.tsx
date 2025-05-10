"use client";
import { navbar_menu } from "@/constant";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { DropdownProps } from "@/types";
import Users from "../users";

function Dropdown({ item, isActive, id }: DropdownProps) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          role="menu"
          aria-labelledby={id}
          className="absolute top-full left-0 z-50 mt-1 flex h-auto w-36 flex-col gap-3 rounded-sm border bg-white p-2 py-2 shadow-xl"
        >
          {item.options.map((option: any) => (
            <Link
              role="menuitem"
              href={option.href}
              key={option.name}
              className="border-b"
            >
              {option.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NavBarDesktop() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const closeTab = () => setHoveredItem(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeTab();
      }
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        closeTab();
      }, 1000);
    };

    const handleMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    const nav = navRef.current;
    document.addEventListener("mousedown", handleOutsideClick);
    if (nav) {
      nav.addEventListener("mouseleave", handleMouseLeave);
      nav.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      if (nav) {
        nav.removeEventListener("mouseleave", handleMouseLeave);
        nav.removeEventListener("mouseenter", handleMouseEnter);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      ref={navRef}
      className="flex w-full justify-between"
    >
      <ul className="flex items-end gap-8 font-semibold">
        <Link href={"/"}>
          <Image src={"/img/Logo-colored.png"} alt="" width={80} height={100} />
        </Link>
        {navbar_menu.map((item) => {
          const isOpen = hoveredItem === item.name;
          const buttonId = `nav-item-${item.name}`;
          const menuId = `dropdown-${item.name}`;
          return (
            <li
              key={item.name}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.name)}
            >
              <button
                id={buttonId}
                className="flex items-center gap-1"
                aria-haspopup={!!item.options}
                aria-expanded={isOpen}
                aria-controls={menuId}
              >
                {item.name}
                {item.options && <ChevronDown className="h-4 w-4" />}
              </button>

              {item.options && (
                <Dropdown
                  item={item}
                  isActive={hoveredItem === item.name}
                  id={buttonId}
                />
              )}
            </li>
          );
        })}
      </ul>

      <div>
        <Users />
      </div>
    </nav>
  );
}
