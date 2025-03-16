import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import { notFound } from "next/navigation";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  body,
  image,
  "author": author->name
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;

  const encodedSlug = encodeURIComponent(slug);

  const post = await client.fetch<SanityDocument>(POST_QUERY, {
    slug: encodedSlug,
  });

  if (!post) {
    notFound();
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(800).height(400).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-4xl px-4 py-8 md:px-8">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline mb-8"
      >
        <span className="mr-1">←</span> Back to posts
      </Link>

      {postImageUrl && (
        <div className="mb-8">
          <img
            src={postImageUrl}
            alt={post.title}
            className="w-full rounded-xl object-cover"
            width={800}
            height={400}
          />
        </div>
      )}

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center text-gray-600 mb-8">
          {post.author && <span className="mr-4">By {post.author}</span>}
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        {Array.isArray(post.body) && (
          <div className="prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg">
            <PortableText value={post.body} />
          </div>
        )}
      </article>
    </main>
  );
}
