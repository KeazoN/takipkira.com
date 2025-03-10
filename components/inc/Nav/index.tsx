"use client";

import NavButtons from "./NavButtons";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import { useState, useEffect } from "react";

const Nav = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 py-8 w-full z-50 transition-all duration-300 ${
        hasScrolled
          ? "bg-white/60 backdrop-blur-lg border-b border-gray-200 !py-3"
          : ""
      }`}
    >
      <div className="container max-w-[1450px] flex items-center justify-between px-8 gap-10">
        <NavLogo />
        <NavLinks />
        <NavButtons />
      </div>
    </nav>
  );
};

export default Nav;
