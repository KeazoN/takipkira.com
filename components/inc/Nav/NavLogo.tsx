import Link from "next/link";
import Image from "next/image";

const NavLogo = () => (
  <Link href="/">
    <Image
      src="/assets/img/logo/logoPrimary.png"
      alt="Takip Kira"
      width={100}
      height={100}
      className="w-28 h-fit"
    />
  </Link>
);

export default NavLogo;
