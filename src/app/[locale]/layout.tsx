import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getDirection, isLocale, locales } from "@/lib/locale";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <div lang={locale} dir={getDirection(locale)} data-locale={locale}>{children}</div>;
}
