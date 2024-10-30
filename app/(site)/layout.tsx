import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages()
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {pages.map((page) => (
          <Link key={page._id} href={`/${page.slug}`} className="pr-2 hover:underline">{page.title}</Link>
        ))}
        <main>{children}</main>
      </body>
    </html>
  );
}
