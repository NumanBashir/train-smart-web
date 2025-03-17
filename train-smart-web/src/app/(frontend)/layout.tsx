import { SanityLive } from "@/sanity/lib/live";
import Navbar from "../components/Navbar";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <SanityLive />
    </>
  );
}
