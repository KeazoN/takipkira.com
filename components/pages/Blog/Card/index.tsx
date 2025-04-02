import Image from "next/image";
import Link from "next/link";
import { TbArrowRight, TbPhoto } from "react-icons/tb";
import { IBlogPost } from "@/interface/IBlogPost";

const Card = ({ post, home }: { post: IBlogPost; home: boolean }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div
        className={`h-60 bg-gray-200 flex items-center justify-center ${
          home ? "h-44" : "h-60"
        }`}
      >
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        ) : (
          <TbPhoto className="w-10 h-10 text-gray-400" />
        )}
      </div>
      <div className="p-6">
        <span className="text-sm text-primary font-medium">
          {post.category}
        </span>
        <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleDateString("tr-TR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary font-medium flex items-center gap-2"
          >
            Devamını Oku
            <TbArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
