import Link from "next/link";
import { TbChevronDown } from "react-icons/tb";

const NavLinks = () => (
  <ul className="flex items-center justify-center gap-6 col-span-3 [&>li>a]:font-medium">
    <li>
      <Link href="/">
        <p className="!text-primary">Anasayfa</p>
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
        <p>Blog</p>
      </Link>
    </li>
    <li>
      <Link href="/">
        <p>İletişim</p>
      </Link>
    </li>
    <li>
      <Link href="/">
        <p className="flex items-center gap-1">
          Yardım <TbChevronDown className="w-3 h-3" />
        </p>
      </Link>
    </li>
  </ul>
);

export default NavLinks;
