import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  const imageUrl = post?.mainImage
    ? builder.image(post.mainImage).width(1200).height(630).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-4xl px-4 py-8 md:px-8">
      <Link
        href="/posts"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline mb-8"
      >
        <span className="mr-1">←</span> Back to posts
      </Link>

      {imageUrl && (
        <div className="mb-8">
          <img
            src={imageUrl || ""}
            alt={post.title || ""}
            className="w-full rounded-xl object-cover"
            width={1200}
            height={630}
          />
        </div>
      )}

      <article className="prose prose-lg max-w-none dark:prose-invert">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
          {post.author && (
            <span className="flex items-center">By {post.author}</span>
          )}
          {post.publishedAt && (
            <time dateTime={post.publishedAt} className="flex items-center">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.categories.map(
                (category: string | null) =>
                  category && (
                    <span
                      key={category}
                      className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {category}
                    </span>
                  )
              )}
            </div>
          )}
        </div>
        <div className="prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg">
          <PortableText value={post.body as any} />
        </div>
      </article>
    </main>
  );
}
