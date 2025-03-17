import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { LATEST_POSTS_QUERY } from "@/sanity/lib/queries";
import type { Post } from "@/sanity/types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

export default async function LatestNews() {
  const { data } = await sanityFetch({ query: LATEST_POSTS_QUERY });
  const posts = data as Post[];

  if (!posts?.length) return null;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Seneste nyheder</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post._id}
            className="overflow-hidden rounded-lg bg-white shadow-md"
          >
            <Link
              className="group block"
              href={`/posts/${post?.slug?.current}`}
            >
              {post.mainImage && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={builder.image(post.mainImage).url()}
                    alt={post.title || ""}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold group-hover:text-blue-500">
                  {post.title}
                </h3>
                {post.publishedAt && (
                  <p className="mt-2 text-sm text-gray-600">
                    {new Date(post.publishedAt).toLocaleDateString("da-DK")}
                  </p>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
