import React from "react";
import { getPosts } from "@/lib/service";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const posts = await getPosts(100);

  return (
    <>
      <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post: any) => {
          return (
            <>
              <div className="post-block p-2 rounded-md">
                <Link href={`/blog/${post.slug}`}>
                  {post.featuredImage?.node.sourceUrl && (
                    <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        fill
                        alt={post.title}
                        className="absolute rounded-md h-full w-full object-cover"
                      />
                    </div>
                  )}
                </Link>
                <Link href={`/blog/${post.slug}`} className="post-content my-4">
                  <h3 className="text-2xl py-4">{post.title}</h3>
                  <div
                    className="italic"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  ></div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default page;
