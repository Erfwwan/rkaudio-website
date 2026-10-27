import type { Metadata } from "next";
import { Manrope, Vazirmatn } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const vazirmatn = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazirmatn" });

export const metadata: Metadata = {
  title: "RK Audio — The silence between the notes.",
  description: "A bold audio identity shaped by engineering, design, and music."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" className={`${manrope.variable} ${vazirmatn.variable}`}><body>{children}</body></html>;
}
