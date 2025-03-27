"use client";

import Link from "next/link";
import { TbChevronDown } from "react-icons/tb";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    title: "Anasayfa",
    href: "/",
  },
  {
    title: "Hizmetlerimiz",
    href: "/hizmetlerimiz",
    dropdown: [
      {
        title: "Güvenli Kiralama",
        href: "/hizmetlerimiz/guvenli-kiralama",
      },
      {
        title: "Kira & Tahsilat",
        href: "/hizmetlerimiz/kira-ve-tahsilat",
      },
      {
        title: "Mülkün Fiziki Durumu",
        href: "/hizmetlerimiz/mulek-fiziki-durumu",
      },
      {
        title: "Sözleşme Durumu",
        href: "/hizmetlerimiz/sozlesme-durumu",
      },
      {
        title: "Risk Koruması",
        href: "/hizmetlerimiz/risk-korumasi",
      },
      {
        title: "Ödeme Takip",
        href: "/hizmetlerimiz/odeme-takip",
      },
      {
        title: "Online Şube",
        href: "/hizmetlerimiz/online-sube",
      },
      {
        title: "Tüm Hizmetler",
        href: "/hizmetlerimiz",
      },
    ],
  },
  {
    title: "İşlemler",
    href: "/islemler",
    dropdown: [
      {
        title: "Kira Artışı Hesapla",
        href: "/islemler/kira-artis-orani",
      },
      {
        title: "Konut Kredisi Hesapla",
        href: "/islemler/konut-kredisi-hesapla",
      },
      {
        title: "İşyeri Kredisi Hesapla",
        href: "/islemler/isyeri-kredisi-hesapla",
      },
      {
        title: "Fırsat Yatırımlar",
        href: "/islemler/firsat-yatirimlari",
      },
      {
        title: "Online Kira Ödeme",
        href: "/islemler/online-kira-odeme",
      },
    ],
  },
  {
    title: "Neden Biz?",
    href: "/neden-biz",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "İletişim",
    href: "/iletisim",
  },
];

const NavLinks = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown) {
        const currentRef = dropdownRefs.current[openDropdown];
        if (currentRef && !currentRef.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <ul className="flex items-center justify-center gap-6 col-span-3">
      {navLinks.map((link, index) => (
        <li
          key={index}
          className={link.dropdown ? "relative" : ""}
          ref={(el) => {
            if (link.dropdown) {
              dropdownRefs.current[link.title] = el;
            }
          }}
        >
          {link.dropdown ? (
            <>
              <button
                className={`flex items-center gap-1 ${
                  pathname.startsWith(link.href) ? "text-primary" : ""
                }`}
                onClick={() => {
                  setOpenDropdown(
                    openDropdown === link.title ? null : link.title
                  );
                }}
              >
                {link.title}{" "}
                <motion.div
                  animate={{ rotate: openDropdown === link.title ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <TbChevronDown className="w-3 h-3" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openDropdown === link.title && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 py-2 bg-white shadow-lg rounded-lg min-w-[200px]"
                  >
                    {link.dropdown.map((dropdownItem, dropdownIndex) => (
                      <li key={dropdownIndex}>
                        <Link href={dropdownItem.href}>
                          <p
                            className={`px-4 py-2 hover:bg-gray-100 ${
                              pathname === dropdownItem.href
                                ? "text-primary"
                                : ""
                            }`}
                          >
                            {dropdownItem.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Link href={link.href}>
              <p className={pathname === link.href ? "text-primary" : ""}>
                {link.title}
              </p>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
