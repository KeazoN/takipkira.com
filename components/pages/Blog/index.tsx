import Card from "./Card";
import FeaturedPosts from "./FeaturedPosts";
import Categories from "./Categories";
import blogs from "@/models/blogs.json";

const Blog = () => {
  return (
    <main className="container max-w-[1255px] mx-auto py-12 mt-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold mb-8">Blog Yazıları</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((post) => (
              <Card key={post.id} post={post} home={false} />
            ))}
          </div>
        </div>

        <div className="lg:w-1/3">
          <FeaturedPosts />
          <Categories />
        </div>
      </div>
    </main>
  );
};

export default Blog;
