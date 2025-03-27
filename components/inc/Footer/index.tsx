"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandX,
  TbBrandYoutube,
} from "react-icons/tb";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.includes("/uye-ol")) {
    return <></>;
  }

  return (
    <footer
      id="footer"
      className="container max-w-[1450px] mx-auto h-fit mb-12 px-10 rounded-3xl bg-gradient-to-b from-sky-50 to-sky-100 py-16"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/img/logo/logoPrimary.png"
              alt="logo"
              width={400}
              height={400}
              className="w-40 h-fit"
            />
            <p className="text-gray-600 leading-relaxed">
              Mülk sahipleri ve kiracılar için güvenilir, şeffaf ve kolay
              kullanılabilir bir platform sunuyoruz.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="p-2 rounded-full bg-white text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <TbBrandFacebook className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full bg-white text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <TbBrandInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full bg-white text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <TbBrandX className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full bg-white text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <TbBrandLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full bg-white text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <TbBrandYoutube className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">İletişim</h4>
            <ul className="space-y-3">
              <li className="text-gray-600">
                <span className="font-medium">Adres:</span>
                <p>Erciyes Teknopark, Kayseri</p>
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Email:</span>
                <p>info@takipkira.com</p>
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Telefon:</span>
                <p>+90 555 123 4567</p>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-6">Bülten</h4>
            <p className="text-gray-600 mb-4">
              Güncel gelişmelerden haberdar olmak için bültenimize abone olun.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email adresiniz"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-center md:text-left">
              © 2025 Takip Kira. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6">
              <Link
                href="/sozlesmeler/gizlilik-politikasi"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/sozlesmeler/kullanim-sartlari"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Kullanım Şartları
              </Link>
              <Link
                href="/sozlesmeler/kvkk-sozlesmesi"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                KVKK Sözleşmesi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
