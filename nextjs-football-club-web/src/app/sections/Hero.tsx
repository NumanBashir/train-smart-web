import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import React from "react";
import { type SanityDocument } from "next-sanity";
import { PortableText } from "next-sanity";
import Link from "next/link";

const HERO_QUERY = `*[_type == "heroImage"][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function Hero() {
  const hero = await client.fetch<SanityDocument>(HERO_QUERY, {});

  const heroImageUrl = hero.heroImage ? urlFor(hero.heroImage)?.url() : null;

  return (
    <>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: heroImageUrl
            ? `url(${heroImageUrl})`
            : "url(https://jfcsports.co.uk/wp-content/uploads/2023/07/bigstock-Soccer-Training-And-Children-476974929.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-start">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold barlow text-white">
              {hero.heroTitle}
            </h1>
            <div className="mb-5 barlow text-lg text-white">
              {Array.isArray(hero.body) && <PortableText value={hero.body} />}
            </div>
            <Link href="/sign-up">
              <button className="btn green_btn">BLIV MEDLEM</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
