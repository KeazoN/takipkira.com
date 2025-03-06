import Link from "next/link";
import Image from "next/image";
import { TbChevronDown, TbLogin, TbUserPlus } from "react-icons/tb";

const Nav = () => {
  return (
    <nav className="absolute top-0 left-0 py-8 w-full z-50">
      <div className="container max-w-[1450px] flex items-center justify-between px-8 gap-10">
        <Link href="/">
          <Image
            src="/assets/img/logo/logoPrimary.png"
            alt="Takip Kira"
            width={100}
            height={100}
            className="w-28 h-fit"
          />
        </Link>
        <ul className="flex items-center justify-center gap-6 col-span-3 [&>li>a]:font-medium">
          <li>
            <Link href="/">
              <p className="!text-primary">Anasayfa</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="flex items-center gap-1">
                Hakkımızda <TbChevronDown className="w-3 h-3" />
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="flex items-center gap-1">
                Hizmetlerimiz <TbChevronDown className="w-3 h-3" />
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>Neden Biz?</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p>İletişim</p>
            </Link>
          </li>
          <div className="flex items-center justify-end col-span-2">
            <div className="flex items-center justify-center gap-4">
              <button className="bg-primary text-white px-8 shadow-lg py-2 rounded-3xl flex items-center gap-2 transition hover:brightness-75">
                <TbLogin className="w-5 h-5" /> Giriş Yap
              </button>
              <button className="bg-secondary text-white px-8 shadow-lg py-2 rounded-3xl flex items-center gap-2 transition hover:brightness-75">
                <TbUserPlus className="w-5 h-5" /> Üye Ol
              </button>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
