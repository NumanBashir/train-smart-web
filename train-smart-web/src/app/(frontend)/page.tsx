import Link from "next/link";
import { Sponsor } from "../sections/Sponsor";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Sponsor />
      <Link href="/posts">Se alle nyheder &rarr;</Link>
    </section>
  );
}
