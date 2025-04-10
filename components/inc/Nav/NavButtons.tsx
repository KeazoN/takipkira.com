import Link from "next/link";
import { TbLogin, TbUserPlus } from "react-icons/tb";

const NavButtons = () => (
  <div className="flex items-center justify-end col-span-2">
    <div className="flex lg:flex-row flex-col w-full lg:w-auto items-center justify-center gap-4">
      <Link
        href="https://panel.takipkira.com"
        target="_blank"
        className="bg-primary text-white px-8 shadow-lg py-2 rounded-3xl flex items-center gap-2 transition hover:brightness-75 w-full lg:w-auto justify-center"
      >
        <TbLogin className="w-5 h-5" /> Giriş Yap
      </Link>
      <Link
        href="https://panel.takipkira.com/musteri"
        target="_blank"
        className="bg-secondary text-white px-8 shadow-lg py-2 rounded-3xl flex items-center gap-2 transition hover:brightness-75 w-full lg:w-auto justify-center"
      >
        <TbUserPlus className="w-5 h-5" /> Üye Ol
      </Link>
    </div>
  </div>
);

export default NavButtons;
