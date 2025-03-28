import { TbArrowRight } from "react-icons/tb";
import Card from "../../Blog/Card";

const Blog = () => {
  return (
    <section className="mt-20">
      <div className="container flex items-center justify-center flex-col gap-10 max-w-[1255px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-extrabold">
              Ufkunuzu Açacak{" "}
              <span className="text-primary">Blog Yazıları</span>
            </h2>
            <p className="text-gray-500">
              Takip Kira, blog yazılarımızda mülk sahiplerinin mülklerini takip
              etmek harici birçok hizmet sunuyor.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-primary text-white px-8 shadow-lg py-2 rounded-3xl group flex items-center gap-2 transition hover:brightness-75">
              Tüm Bloglar
              <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Blog;
