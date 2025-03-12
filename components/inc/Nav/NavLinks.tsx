"use client";

import Link from "next/link";
import { TbChevronDown } from "react-icons/tb";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const [showServices, setShowServices] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowServices(false);
        setShowHelp(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul className="flex items-center justify-center gap-6 col-span-3">
      <li>
        <Link href="/">
          <p className={pathname === "/" ? "text-primary" : ""}>Anasayfa</p>
        </Link>
      </li>
      <li className="relative" ref={dropdownRef}>
        <button
          className={`flex items-center gap-1 ${
            pathname.startsWith("/hizmetlerimiz") ? "text-primary" : ""
          }`}
          onClick={() => setShowServices(!showServices)}
        >
          Hizmetlerimiz{" "}
          <motion.div
            animate={{ rotate: showServices ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <TbChevronDown className="w-3 h-3" />
          </motion.div>
        </button>
        <AnimatePresence>
          {showServices && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 py-2 bg-white shadow-lg rounded-lg min-w-[200px]"
            >
              <li>
                <Link href="/hizmetlerimiz/guvenli-kiralama">
                  <p
                    className={`px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/hizmetlerimiz/guvenli-kiralama"
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    Güvenli Kiralama
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/kira-ve-tahsilat">
                  <p
                    className={`px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/hizmetlerimiz/kira-ve-tahsilat"
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    Kira & Tahsilat
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/mulek-fiziki-durumu">
                  <p
                    className={`px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/hizmetlerimiz/mulek-fiziki-durumu"
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    Mülkün Fiziki Durumu
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/sozlesme-durumu">
                  <p
                    className={`px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/hizmetlerimiz/sozlesme-durumu"
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    Sözleşme Durumu
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/risk-korumasi">
                  <p
                    className={`px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/hizmetlerimiz/risk-korumasi"
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    Risk Koruması
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/odeme-takip">
                  <p
                    className={`px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/hizmetlerimiz/odeme-takip"
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    Ödeme Takip
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz/online-sube">
                  <p
                    className={`px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/hizmetlerimiz/online-sube"
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    Online Şube
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz">
                  <p
                    className={`px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/hizmetlerimiz" ? "text-primary" : ""
                    }`}
                  >
                    Tüm Hizmetler
                  </p>
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
      <li>
        <Link href="/neden-biz">
          <p className={pathname === "/neden-biz" ? "text-primary" : ""}>
            Neden Biz?
          </p>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <p className={pathname === "/blog" ? "text-primary" : ""}>Blog</p>
        </Link>
      </li>
      <li>
        <Link href="/iletisim">
          <p className={pathname === "/iletisim" ? "text-primary" : ""}>
            İletişim
          </p>
        </Link>
      </li>
      {/* <li className="relative" ref={dropdownRef}>
        <button
          className={`flex items-center gap-1 ${
            pathname.startsWith("/yardim-merkezi") ? "text-primary" : ""
          }`}
          onClick={() => setShowHelp(!showHelp)}
        >
          Yardım{" "}
          <motion.div
            animate={{ rotate: showHelp ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <TbChevronDown className="w-3 h-3" />
          </motion.div>
        </button>
        <AnimatePresence>
          {showHelp && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 py-2 bg-white shadow-lg rounded-lg min-w-[200px]"
            >
              <li>
                <Link href="/yardim-merkezi/teknik-destek">
                  <p
                    className={`px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/yardim-merkezi/teknik-destek"
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    Teknik & Destek
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/yardim-merkezi/musteri-hizmetleri">
                  <p
                    className={`px-4 py-2 hover:bg-gray-100 ${
                      pathname === "/yardim-merkezi/musteri-hizmetleri"
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    Müşteri Hizmetleri
                  </p>
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li> */}
    </ul>
  );
};

export default NavLinks;
