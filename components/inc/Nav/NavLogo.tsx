"use client";

import Link from "next/link";
import Image from "next/image";
import { CountrySelect } from "@/components/CountrySelect";
import { useEffect, useState } from "react";
import { read } from "@/app/actions";

const NavLogo = () => {
  const [lang, setLang] = useState({ code: "tr", lang: "tr", name: "Türkiye" });

  useEffect(() => {
    read().then(setLang);
  }, []);

  return (
    <div className="flex-shrink-0 flex items-center justify-center gap-2">
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/assets/img/logo/logoPrimary.png"
          alt="Takip Kira"
          width={50}
          height={100}
          className="w-28 h-fit flex-shrink-0 max-sm:w-24"
        />
      </Link>
      <div className="scale-90 max-sm:scale-75">
        <CountrySelect lang={lang} bottom={true} />
      </div>
    </div>
  );
};

export default NavLogo;
