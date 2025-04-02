"use client";

import { DiscussionEmbed } from "disqus-react";
import { IBlogPost } from "@/interface/IBlogPost";

const Comment = ({ post }: { post: IBlogPost }) => {
  return (
    <DiscussionEmbed
      shortname="www-takipkira-com"
      config={{
        url: `https://takipkira.com/blog/${post.slug}`,
        identifier: post.id.toString(),
        title: post.title,
        language: "tr",
      }}
    />
  );
};

export default Comment;
