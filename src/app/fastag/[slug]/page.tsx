import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { FileText, Download, ArrowLeft, CreditCard, Handshake } from "lucide-react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { fetchSanityQuery } from "@/actions/sanity";
import { fastagIdsForUrlSlug } from "@/lib/fastagCanonical";
import {
  FASTAG_ALL_SLUGS_QUERY,
  FASTAG_DETAIL_RESOLVED_QUERY,
} from "@/lib/queries";
import { pageMetadata, SITE_BRAND } from "@/lib/seo";

export const revalidate = 0;

function youtubeIdFromUrl(url: string | undefined): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
  );
  return match ? match[1] : null;
}

const overviewComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-lg text-slate-600 leading-relaxed mb-4 last:mb-0">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/40 pl-4 my-4 text-slate-600 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 text-slate-600 space-y-2">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-primary underline hover:text-accent font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

interface FastagDoc {
  _id?: string;
  _type?: string;
  title?: string;
  badge?: string;
  overview?: PortableTextBlock[];
  youtubeVideoUrl?: string;
  documents?: {
    documentName?: string;
    documentDescription?: string;
    documentFileUrl?: string;
  }[];
}

const FASTAG_STATIC_SLUGS = ["buy-fastag", "become-a-partner"] as const;

export async function generateStaticParams() {
  const canonical = FASTAG_STATIC_SLUGS.map((slug) => ({ slug }));
  try {
    const rows = await fetchSanityQuery(FASTAG_ALL_SLUGS_QUERY);
    const list = (rows ?? []) as { slug?: string }[];
    const fromCms = list
      .filter((r) => r.slug)
      .map((r) => ({ slug: r.slug as string }));
    const merged: { slug: string }[] = [...canonical];
    for (const row of fromCms) {
      if (!merged.some((m) => m.slug === row.slug)) merged.push(row);
    }
    return merged;
  } catch {
    return canonical;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const ids = fastagIdsForUrlSlug(slug);
  const data = (await fetchSanityQuery(FASTAG_DETAIL_RESOLVED_QUERY, {
    slug,
    ids,
  })) as FastagDoc | null;

  if (!data?.title) {
    return { title: `FASTag | ${SITE_BRAND}` };
  }

  return pageMetadata({
    title: data.title,
    description: `${data.title}. FASTag services by ${SITE_BRAND} (GarudaOM) in India.`,
    path: `/fastag/${slug}`,
    keywords: ["FASTag", "Garuda OM", "GarudaOM", data.title],
  });
}

export default async function FastagDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const ids = fastagIdsForUrlSlug(slug);

  const data = (await fetchSanityQuery(FASTAG_DETAIL_RESOLVED_QUERY, {
    slug,
    ids,
  })) as FastagDoc | null;

  if (!data?.title) {
    notFound();
  }

  const videoId = youtubeIdFromUrl(data.youtubeVideoUrl);
  const docs = data.documents ?? [];
  const rawId = data._id?.replace(/^drafts\./, "");
  const isBuy = rawId === "fastagDetailPage-buy-fastag";

  // Default icons based on page type
  const Icon = isBuy ? CreditCard : Handshake;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/#fastag-management"
            className="flex items-center gap-2 text-slate-500 hover:text-[#7E60F4] transition-colors mb-8 group font-medium w-fit"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to FASTag</span>
          </Link>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200/60 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7E60F4]/10 to-[#ec39b0]/10 rounded-full blur-3xl -mr-20 -mt-20" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-lg text-white">
                  <Icon size={48} className="text-white drop-shadow-md" />
                </div>
                <div>
                  <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                    {data.badge || "FASTag Portal"}
                  </div>
                  <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                    {data.title}
                  </h1>
                </div>
              </div>

              {videoId && (
                <div className="mb-8 w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={data.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {data.overview &&
                Array.isArray(data.overview) &&
                data.overview.length > 0 && (
                  <div className="prose prose-slate max-w-3xl mb-8">
                    <PortableText
                      value={data.overview}
                      components={overviewComponents}
                    />
                  </div>
                )}

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-primary text-white font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {isBuy ? "Get FASTag" : "Become a Partner"}
              </Link>
            </div>
          </div>

          {docs.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1.5 h-8 rounded-full bg-gradient-to-b from-primary to-accent" />
                <h2 className="text-2xl font-bold text-slate-900">
                  Required Documents & Forms
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {docs.map((doc, index) => (
                  <a
                    key={`${doc.documentName ?? "doc"}-${index}`}
                    href={doc.documentFileUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-[#7E60F4]/40 hover:shadow-xl hover:shadow-[#7E60F4]/5 transition-all duration-300"
                  >
                    <div className="flex items-start gap-5 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-[#7E60F4]/10 group-hover:text-[#7E60F4] transition-colors border border-slate-100 group-hover:border-[#7E60F4]/20">
                        <FileText size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-[#7E60F4] transition-colors">
                          {doc.documentName}
                        </h3>
                        {doc.documentDescription && (
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            {doc.documentDescription}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-slate-400 group-hover:text-[#7E60F4] transition-colors">
                      <span className="uppercase tracking-wider">
                        PDF Document
                      </span>
                      <div className="flex items-center gap-2">
                        <span>View</span>
                        <Download size={16} />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
