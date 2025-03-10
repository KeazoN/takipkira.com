import Image from "next/image";

const PlayStore = () => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.takipkira.mobile&hl=tr"
      target="_blank"
    >
      <Image
        src="/assets/img/mobile/googleplay.svg"
        alt="googlePlay"
        width={2500}
        height={814}
        className="relative top-16 w-32 h-fit drop-shadow-lg"
      />
    </a>
  );
};

export default PlayStore;
