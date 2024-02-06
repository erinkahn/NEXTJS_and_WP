import { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/app/components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  // applies to all pages unless put in a page which will only apply to that page
  title: {
    default: "NEXTJS App",
    template: "%s | NEXTJS App",
  },
  description: "Just for learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="relative overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
