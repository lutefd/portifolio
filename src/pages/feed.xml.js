import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  const workBlog = await getCollection("work-blog");
  const filteredBlog = blog.filter((post) => !post.data.isDraft);
  const filteredWorkBlog = workBlog.filter(
    (post) =>
      !post.data.isDraft &&
      post.data.title !== "Migrating a Product from Drupal to Next.js",
  );

  return rss({
    site: context.site || "https://luisdourado.com",
    title: `Lute's Blog`,
    stylesheet: "/rss/styles.xsl",
    description:
      "My ramblings about web development, system design, software architecture and other things.",
    items: [
      ...filteredBlog.map((post) => ({
        title: post.data.title,
        site: context.site || "https://luisdourado.com",
        description: post.data.description,
        link: `https://luisdourado.com/blog/${post.slug}`,
        pubDate: post.data.date,
      })),
      ...filteredWorkBlog.map((post) => ({
        title: post.data.title,
        site: context.site || "https://luisdourado.com",
        description: post.data.description,
        link: `https://luisdourado.com/work-blog/${post.slug}`,
        pubDate: post.data.date,
      })),
    ],
  });
}
