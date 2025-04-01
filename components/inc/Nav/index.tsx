"use client";

import NavButtons from "./NavButtons";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { TbMenu2, TbX } from "react-icons/tb";

const Nav = () => {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname.includes("/sozlesmeler") || pathname.includes("/blog")) {
        setHasScrolled(true);
        return;
      }
      setHasScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  if (pathname.includes("/uye-ol")) {
    return <></>;
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 z-40"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <nav
        className={`fixed top-0 left-0 py-8 w-full ${
          isMobileMenuOpen ? "z-50" : "z-40"
        } transition-all duration-300 ${
          hasScrolled
            ? "bg-white/80 backdrop-blur-lg border-b border-gray-200 !py-3"
            : ""
        }`}
      >
        <div className="container max-w-[1450px] flex items-center justify-between px-8 gap-10">
          <NavLogo />

          <div className="hidden lg:flex items-center gap-8">
            <NavLinks />
            <NavButtons />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition"
          >
            {isMobileMenuOpen ? (
              <TbX className="w-6 h-6" />
            ) : (
              <TbMenu2 className="w-6 h-6" />
            )}
          </button>

          <div
            className={`
            fixed top-0 right-0 w-[300px] min-h-screen bg-white shadow-xl 
            transform overflow-y-auto transition-transform duration-300 ease-in-out
            lg:hidden
            z-50
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          >
            <div className="flex flex-col min-h-screen py-10 px-6 gap-10">
              <div className="flex items-center justify-between w-full">
                <NavLogo />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <TbX className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                <NavLinks />
                <div className="border-t pt-6">
                  <NavButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
