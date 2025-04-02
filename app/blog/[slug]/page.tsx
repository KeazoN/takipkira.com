import BlogDetail from "@/components/pages/Blog/Detail";
import blogData from "@/models/blogs.json";

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogData.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogDetail post={post} />;
}
