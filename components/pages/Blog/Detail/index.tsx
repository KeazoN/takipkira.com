import Image from "next/image";
import Categories from "../Categories";
import FeaturedPosts from "../FeaturedPosts";
import { IBlogPost } from "@/interface/IBlogPost";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";

const BlogDetail = ({ post }: { post: IBlogPost }) => {
  const getMDXContent = () => {
    try {
      if (
        post.content.startsWith("/content/") ||
        post.content.startsWith("content/")
      ) {
        const contentPath = post.content.startsWith("/")
          ? post.content.substring(1)
          : post.content;

        const filePath = path.join(process.cwd(), "public", contentPath);

        console.log("Trying to load file:", filePath);

        if (!fs.existsSync(filePath)) {
          console.error("File does not exist:", filePath);

          const altPath = path.join(process.cwd(), contentPath);
          console.log("Trying alternative path:", altPath);

          if (!fs.existsSync(altPath)) {
            console.error("Alternative path also does not exist");
            return <div>Content not found: File does not exist</div>;
          }

          const content = fs.readFileSync(altPath, "utf8");
          return <MDXRemote source={content} />;
        }

        const content = fs.readFileSync(filePath, "utf8");
        return <MDXRemote source={content} />;
      }
      return <div>{post.content}</div>;
    } catch (error) {
      console.error("Error reading MDX file:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      return <div>Content not found: {errorMessage}</div>;
    }
  };

  return (
    <div className="container max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2">
          <div className="max-w-3xl">
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/img/logo/icon.png"
                    alt="Takip Kira"
                    width={40}
                    height={40}
                    className="rounded-full bg-sky-100 w-10 h-10"
                  />
                  <span>Takip Kira</span>
                </div>
                <span>•</span>
                <time>
                  {new Date(post.createdAt).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg w-full prose-sky prose-headings:font-bold prose-a:text-sky-600 hover:prose-a:text-sky-500">
              {getMDXContent()}
            </div>

            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        <div className="h-full">
          <div className="h-fit flex flex-col gap-8">
            <FeaturedPosts />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
