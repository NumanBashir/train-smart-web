import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  mainImage,
  publishedAt,
  "author": author->name,
  "categories": categories[]->title
}`);

export const LATEST_POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...4]{
    _id,
    title,
    mainImage,
    publishedAt,
    slug
}`);

export const HERO_QUERY = defineQuery(`*[_type == "hero"][0] {
  heroTitle,
  body,
  heroImage
}`);
