import "@/app/globals.css";
import Navbar from "./components/Navbar";
import { SanityLive } from "@/sanity/lib/live";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <SanityLive />
        </Suspense>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
