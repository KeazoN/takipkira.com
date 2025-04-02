"use client";

import React, { useState, useEffect, useRef } from "react";
import * as Flags from "country-flag-icons/react/3x2";
import { TbChevronDown } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import i18n from "i18next";
import { create } from "@/app/actions";
import { countries, ICountry } from "@/i18next";

interface ICountrySelectProps {
  lang: ICountry;
  text?: boolean;
  bottom?: boolean;
}

export const CountrySelect: React.FC<ICountrySelectProps> = ({
  lang,
  text,
  bottom = false,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(lang);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleCountrySelect = async (country: ICountry) => {
    setSelectedCountry(country);
    await create(country);
    i18n.changeLanguage(country.lang);
    setIsOpen(false);
  };

  const SelectedFlag = (Flags as any)[selectedCountry.code.toUpperCase()];

  return (
    <div className="relative w-full col-span-1" ref={dropdownRef}>
      <div
        className="bg-white border border-gray-200 w-full shadow-sm rounded-2xl p-4 flex items-center gap-4 justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          {SelectedFlag && (
            <SelectedFlag className="w-9 h-6 rounded-md shadow-md" />
          )}
          {text && <p className="font-medium">{selectedCountry.name}</p>}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <TbChevronDown />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, translateY: bottom ? -20 : 20 }}
            animate={{ opacity: 1, translateY: bottom ? 10 : -10 }}
            exit={{ opacity: 0, translateY: bottom ? -20 : 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`absolute ${
              bottom ? "top-14" : "bottom-14"
            } bg-white border border-gray-200 shadow-md rounded-lg w-full overflow-auto z-50`}
          >
            {countries.map((country) => {
              const Flag = (Flags as any)[country.code.toUpperCase()];
              return (
                <li
                  key={country.code}
                  className="flex items-center gap-4 p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    handleCountrySelect(country);
                    setIsOpen(false);
                  }}
                >
                  {Flag && <Flag className="w-8 h-5 rounded-md shadow-sm" />}
                  <p className="font-medium">{country.name}</p>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
