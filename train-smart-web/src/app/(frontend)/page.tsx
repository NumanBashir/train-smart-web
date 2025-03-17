import Link from "next/link";
import { Sponsor } from "../sections/Sponsor";
import LatestNews from "../sections/LatestNews";
export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Sponsor />
      <LatestNews />
      <Link href="/posts">Se alle nyheder &rarr;</Link>
    </section>
  );
}
