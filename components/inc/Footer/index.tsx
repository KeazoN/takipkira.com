"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandX,
  TbBrandYoutube,
  TbChevronDown,
  TbChevronUp,
} from "react-icons/tb";
import { z } from "zod";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const newsletterSchema = z.object({
  email: z.string().email("Geçerli bir email adresi giriniz"),
});

const Footer = () => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleMenu = (menuName: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const handleNewsletter = async () => {
    try {
      setLoading(true);
      const validatedData = newsletterSchema.parse({ email });

      const templateParams = {
        phoneNumber: validatedData.email,
      };

      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.EMAILJS_PUBLIC_KEY!
      );

      toast.success("Bültene başarıyla abone oldunuz!");
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Bir hata oluştu. Lütfen tekrar deneyiniz.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (pathname.includes("/uye-ol")) {
    return <></>;
  }

  return (
    <footer
      id="footer"
      className="container max-w-[1450px] mx-auto h-fit mb-12 px-4 sm:px-10 rounded-3xl bg-gradient-to-b from-sky-50 to-sky-100 py-8 sm:py-16"
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
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href="https://www.facebook.com/people/Takip-Kira/100089096078457/"
                target="_blank"
                className="p-2 rounded-full bg-white text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <TbBrandFacebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/takipkira/"
                target="_blank"
                className="p-2 rounded-full bg-white text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <TbBrandInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/takip-kira/posts/?feedView=all"
                className="p-2 rounded-full bg-white text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <TbBrandLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=alX2U9PMDt4&ab_channel=takipkira"
                className="p-2 rounded-full bg-white text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <TbBrandYoutube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-1">
            <button
              onClick={() => toggleMenu("quickLinks")}
              className="flex items-center justify-between w-full md:hidden mb-2"
            >
              <h4 className="text-xl font-semibold">Hızlı Linkler</h4>
              {openMenus.quickLinks ? (
                <TbChevronUp className="w-5 h-5" />
              ) : (
                <TbChevronDown className="w-5 h-5" />
              )}
            </button>
            <h4 className="text-xl font-semibold mb-6 hidden md:block">
              Hızlı Linkler
            </h4>
            <ul
              className={`space-y-3 ${
                !openMenus.quickLinks ? "hidden md:block" : "block"
              }`}
            >
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-primary transition-colors block py-2"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-gray-600 hover:text-primary transition-colors block py-2"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetlerimiz"
                  className="text-gray-600 hover:text-primary transition-colors block py-2"
                >
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-primary transition-colors block py-2"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-gray-600 hover:text-primary transition-colors block py-2"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <button
              onClick={() => toggleMenu("contact")}
              className="flex items-center justify-between w-full md:hidden mb-2"
            >
              <h4 className="text-xl font-semibold">İletişim</h4>
              {openMenus.contact ? (
                <TbChevronUp className="w-5 h-5" />
              ) : (
                <TbChevronDown className="w-5 h-5" />
              )}
            </button>
            <h4 className="text-xl font-semibold mb-6 hidden md:block">
              İletişim
            </h4>
            <ul
              className={`space-y-3 ${
                !openMenus.contact ? "hidden md:block" : "block"
              }`}
            >
              <li className="text-gray-600 py-2">
                <span className="font-medium block">Adres:</span>
                <p>Erciyes Teknopark, Kayseri</p>
              </li>
              <li className="text-gray-600 py-2">
                <span className="font-medium block">E-Posta Adresi:</span>
                <p>bilgi@takipkira.com</p>
              </li>
              <li className="text-gray-600 py-2">
                <span className="font-medium block">Telefon Numarası:</span>
                <p>+90 552 411 47 48</p>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <button
              onClick={() => toggleMenu("newsletter")}
              className="flex items-center justify-between w-full md:hidden mb-2"
            >
              <h4 className="text-xl font-semibold">Bülten</h4>
              {openMenus.newsletter ? (
                <TbChevronUp className="w-5 h-5" />
              ) : (
                <TbChevronDown className="w-5 h-5" />
              )}
            </button>
            <h4 className="text-xl font-semibold mb-6 hidden md:block">
              Bülten
            </h4>
            <div
              className={`${
                !openMenus.newsletter ? "hidden md:block" : "block"
              }`}
            >
              <p className="text-gray-600 mb-4">
                Güncel gelişmelerden haberdar olmak için bültenimize abone olun.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Email adresiniz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button onClick={handleNewsletter} disabled={loading}>
                  {loading ? "Gönderiliyor..." : "Abone Ol"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-center md:text-left">
              © 2025 Takip Kira. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
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
              <Link
                href="/sozlesmeler/cookie-politikasi"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
