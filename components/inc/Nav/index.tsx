"use client";

import NavButtons from "./NavButtons";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(pathname.includes("/blog"));

  if (pathname.includes("/uye-ol")) {
    return <></>;
  }
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0 || pathname.includes("/blog"));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 py-8 w-full z-50 transition-all duration-300 ${
        hasScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-200 !py-3"
          : ""
      }`}
    >
      <div className="container max-w-[1450px] flex items-center justify-between px-8 gap-10">
        <NavLogo />
        <div className="flex items-center gap-8">
          <NavLinks />
          <NavButtons />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
