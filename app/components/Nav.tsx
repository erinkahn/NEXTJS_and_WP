import { getPages } from "@/app/lib/service";
import Link from "next/link";

export const Nav = async () => {
  const pages = await getPages();

  return (
    <header className="container mx-auto py-4 px-4">
      <div className="navbar w-full md:w-3/5 mx-auto border-b-2">
        <nav className="flex items-center justify-center pb-4 text-base md:text-xl">
          <Link href="/" className="px-4">
            Home
          </Link>
          <Link href="/blog" className="px-4">
            Blog
          </Link>
          <Link href="/products" className="px-4">
            Products
          </Link>
          <Link href="/products/reviews" className="px-4">
            Reviews
          </Link>
          <Link href="/login" className="px-4">
            Login
          </Link>

          {/* 
          // from wordpress
          <ul className="ml-5 flex gap-5">
            {pages.map((page: any) => {
              return (
                <Link href={`/${page.title}`} key={page.id}>
                  {page.title}
                </Link>
              );
            })}
          </ul> */}
        </nav>
      </div>
    </header>
  );
};
