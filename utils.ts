import {readdirSync, readFileSync} from "fs";
import matter from "gray-matter";
import {PostType} from "./PostType";

export const buildGetPostBySlug = function (slug: string): PostType {
  const rawMatter = matter(readFileSync("content/blog/" + slug + ".md"));

  return JSON.parse(JSON.stringify({
    data: {...rawMatter.data, excerpt: rawMatter.excerpt, slug},
    content: rawMatter.content,
  })) as unknown as PostType;
}

export const buildGetPosts = function (): PostType[] {
  const files = readdirSync("content/blog");

  const posts = files.map((filePath) => {
    const slug = filePath.replace(".md", "");
    return buildGetPostBySlug(slug);
  });

  // Sort by date
  return posts.sort((a, b) => new Date(a.data.date) < new Date(b.data.date) ? 1 : -1);
};