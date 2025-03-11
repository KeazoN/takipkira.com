import Image from "next/image";

const AppStore = ({ className }: { className?: string }) => {
  return (
    <a
      href="https://apps.apple.com/us/app/takip-kira/id6479267890"
      target="_blank"
    >
      <Image
        src="/assets/img/mobile/appstore.svg"
        alt="appStore"
        width={2500}
        height={814}
        className={`relative top-16 w-32 h-fit drop-shadow-lg ${className}`}
      />
    </a>
  );
};

export default AppStore;
