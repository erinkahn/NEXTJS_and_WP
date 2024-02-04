import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        NEXTJS PRACTICE
        <Link href="/blog">blog</Link>
      </main>
    </>
  );
}
