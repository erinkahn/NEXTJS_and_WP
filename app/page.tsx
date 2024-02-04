import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      NEXTJS PRACTICE -- source :
      https://github.com/JeffreyChix/nextjs-headless-wordpress/tree/main
      <Link href="/blog">Blog</Link>
    </main>
  );
}
