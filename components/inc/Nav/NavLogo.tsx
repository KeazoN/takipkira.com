import Link from "next/link";
import Image from "next/image";

const NavLogo = () => (
  <Link href="/" className="flex-shrink-0 flex items-center justify-center">
    <Image
      src="/assets/img/logo/logoPrimary.png"
      alt="Takip Kira"
      width={50}
      height={100}
      className="w-28 h-fit"
    />
  </Link>
);

export default NavLogo;
