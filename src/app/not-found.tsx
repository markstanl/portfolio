import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const NotFound = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-brand-bg font-jetbrains">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 gap-6 px-8 text-center min-h-[70vh]">
        <h1 className="text-brand-prim font-inter font-bold text-6xl md:text-8xl">
          404
        </h1>
        <p className="text-brand-text text-sm sm:text-base md:text-lg max-w-md">
          This page does not exist. It may have moved, or the link may be wrong.
        </p>
        <div className="flex gap-8 text-brand-text underline">
          <Link
            href="/"
            className="hover:text-brand-prim hover:tracking-wide transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="hover:text-brand-prim hover:tracking-wide transition-all duration-300"
          >
            Blog
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
