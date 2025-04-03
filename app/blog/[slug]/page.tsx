import type { Metadata } from "next";
import BlogDetail from "@/components/pages/Blog/Detail";
import blogData from "@/models/blogs.json";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogData.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı | Takip Kira",
      robots: "noindex",
    };
  }

  return {
    title: `${post.title} | Takip Kira Blog`,
    description: post.excerpt,
    keywords: `${post.tags?.join(
      ", "
    )}, kira takibi, mülk yönetimi, gayrimenkul yönetimi, emlak yönetimi`,
    openGraph: {
      title: `${post.title} | Takip Kira Blog`,
      description: post.excerpt,
      type: "article",
      locale: "tr_TR",
      siteName: "Takip Kira",
      publishedTime: post.createdAt,
      authors: ["Takip Kira"],
      images: [post.coverImage],
    },
    alternates: {
      canonical: `https://takipkira.com/blog/${post.slug}`,
    },
    robots: "index, follow",
    authors: [{ name: "Takip Kira" }],
    category: "blog",
  };
}

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
