import { TbArrowRight } from "react-icons/tb";
import Card from "../../Blog/Card";
import blogData from "@/models/blogs.json";

const Blog = () => {
  return (
    <section className="mt-10 sm:mt-20 px-4">
      <div className="container flex items-center justify-center flex-col gap-6 sm:gap-10 max-w-[1255px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6 sm:gap-8">
          <div className="flex flex-col gap-2 sm:gap-3 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
              Ufkunuzu Açacak{" "}
              <span className="text-primary">Blog Yazıları</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-[600px]">
              Takip Kira, blog yazılarımızda mülk sahiplerinin mülklerini takip
              etmek harici birçok hizmet sunuyor.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-primary text-white px-6 sm:px-8 py-2.5 rounded-full group flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] text-sm sm:text-base">
              Tüm Bloglar
              <TbArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4 sm:gap-6">
          {blogData.map((post) => (
            <Card key={post.id} post={post} home={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
