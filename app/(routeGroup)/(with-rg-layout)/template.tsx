"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

// templates are similar to layouts bc they wrap each child layout or page
// but when a user navigates bt routes that share a template, like login, forgot-pw or register, a new instance of the component is mounted and DOM el are recreated, state is NOT preserved
// you just use template.tsx

const routeGroupLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-pw" },
];

export default function RouteGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [input, setInput] = useState(""); // routes wont remount layout components so the input value will NOT change when you navigate to /login /register or /forgot-pw. but since this is a tempalte file, the value will change when you navigate to /login /register or /forgot-pw bc the state is not preserved anymore and the components shared using the template will be remounted

  return (
    <div className="text-center my-5 mb-10">
      <span className="pb-3 block">Inner Route Group Layout</span>

      <input
        className="mb-4 border-lime-400 border-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />

      {routeGroupLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={isActive ? "text-blue-500 font-bold mr-4" : "mr-4"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}

      {children}
    </div>
  );
}
