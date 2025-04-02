import { TbPhoto } from "react-icons/tb";
import Image from "next/image";
import blogs from "@/models/blogs.json";

const FeaturedPosts = () => {
  const featuredPosts = blogs.slice(0, 3);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Öne Çıkanlar</h2>
      <div className="space-y-4">
        {featuredPosts.map((post) => (
          <div key={post.id} className="flex gap-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <TbPhoto className="w-6 h-6 text-gray-400" />
              )}
            </div>
            <div>
              <h3 className="font-medium mb-1 line-clamp-2">{post.title}</h3>
              <span className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
