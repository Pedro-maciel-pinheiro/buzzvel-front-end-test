
import React from "react";
import NavBarMobile from "@/components/navbar/nav-mobile";
import NavBarDesktop from "@/components/navbar/nav-desktop";


export default function NavBar() {
  return (
    <nav className="mx-auto flex h-10 w-full max-w-screen-xl justify-between bg-white p-2 px-3">
      <div className="hidden w-full lg:block">
        <NavBarDesktop />
      </div>

      <div className="block w-full lg:hidden">
        <NavBarMobile />
      </div>
    </nav>
  );
}
