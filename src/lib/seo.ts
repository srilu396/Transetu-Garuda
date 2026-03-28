import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/siteUrl";

export const SITE_BRAND = "Garuda OM";

/** Primary and alternate spellings — used in meta keywords and structured data. */
export const BRAND_KEYWORDS = [
  "Garuda OM",
  "GarudaOM",
  "garudaom",
  "garuda om",
  "Garuda OM GPS",
  "Garuda OM FASTag",
  "garudaom.online",
] as const;

export const SERVICE_KEYWORDS = [
  "GPS tracking India",
  "fleet management",
  "vehicle tracking",
  "FASTag",
  "FASTag partner",
  "video telematics",
  "AIS-140 GPS",
  "fuel monitoring",
  "dash cam fleet",
  "telematics",
] as const;

export const DEFAULT_DESCRIPTION =
  "Garuda OM (GarudaOM) — GPS fleet tracking, vehicle monitoring, FASTag issuance & partnerships, video telematics, fuel sensors, and dash cams for businesses across India. Real-time visibility on one platform.";

export const OG_IMAGE_PATH = "/assets/logos/logo.png";

const allKeywords = [...BRAND_KEYWORDS, ...SERVICE_KEYWORDS];

export function keywordList(extra: string[] = []): string[] {
  const merged = [...allKeywords, ...extra];
  return Array.from(new Set(merged));
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website";
  /** Use for the homepage so the layout title template is not applied twice. */
  absoluteTitle?: boolean;
};

/** Canonical, Open Graph, and Twitter cards for indexable routes. */
export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website",
  absoluteTitle = false,
}: PageSeoInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const url = absoluteUrl(canonicalPath);
  const imageUrl = absoluteUrl(OG_IMAGE_PATH);

  const titleField: Metadata["title"] = absoluteTitle
    ? { absolute: title }
    : title;

  return {
    title: titleField,
    description,
    keywords: keywordList(keywords),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_BRAND,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: `${SITE_BRAND} — GPS & FASTag solutions`,
        },
      ],
      locale: "en_IN",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
