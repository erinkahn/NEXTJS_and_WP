"use client";
import { getPages } from "@/app/lib/service";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  // export const Nav = async () => {
  //   const pages = await getPages();

  const pathname = usePathname();
  const NavLinks = [
    { href: "/", title: "Home" },
    { href: "/blog", title: "Blog" },
    { href: "/products", title: "Products" },
    { href: "/products/order-products", title: "Order" },
    { href: "/login", title: "Login" },
  ];

  return (
    <header className="container mx-auto py-4 px-4">
      <div className="navbar w-full md:w-3/5 mx-auto border-b-2">
        <nav className="flex items-center justify-center pb-4 text-base md:text-xl">
          {NavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={
                pathname === link.href
                  ? `font-bold text-blue-600 px-4`
                  : `text-black px-4`
              }
            >
              {link.title}
            </Link>
          ))}
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
