"use client";

import React from "react";
import { ThemeToggle } from "../ThemeToggle";
import NavLink from "@nuraloom/navlink";
import { NAV_ITEMS } from "@/constant";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image
            src="/img/logo@1x.png"
            alt="DeltaCube Technology"
            width={36}
            height={36}
            className="rounded-md"
          />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            DeltaCube
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>
                <NavLink
                  href={item.path}
                  className="text-sm font-medium text-muted-foreground hover:text-sky-600 transition-colors duration-200"
                  activeClassName="text-sky-600 font-semibold border-b-2 border-sky-600"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
