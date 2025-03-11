import Image from "next/image";

const AppGallery = ({ className }: { className?: string }) => {
  return (
    <a href="#" target="_blank">
      <Image
        src="/assets/img/mobile/huawei-gallery.svg"
        alt="appGallery"
        width={2500}
        height={814}
        className={`relative top-16 w-32 h-fit drop-shadow-lg ${className}`}
      />
    </a>
  );
};

export default AppGallery;
