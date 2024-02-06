import { getPostBySlug } from "@/app/lib/service";
import Link from "next/link";

// @ts-ignore
export default async function SinglePostPage({ params: { slug } }) {
  const post = await getPostBySlug(slug);

  return (
    <section className="container mx-auto py-12">
      <div
        className="post-header relative flex flex-col items-center justify-center w-full min-h-[200px] rounded-md"
        style={{
          backgroundImage: `url(${post.featuredImage?.node.sourceUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute w-full h-full z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
        ></div>
        <div className="z-20 text-center">
          <h1 className="text-2xl md:text-4xl mb-4">{slug}</h1>
          <p className="italic">By Jeffrey</p>
        </div>
      </div>
      <div
        className="post-content w-full md:w-3/5 mx-auto mt-20 py-6 text-lg"
        dangerouslySetInnerHTML={{ __html: `${post.content}` }}
      ></div>

      <Link href="/blog">Back to Posts</Link>
    </section>
  );
}
