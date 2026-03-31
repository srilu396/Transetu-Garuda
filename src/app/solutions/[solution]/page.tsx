import { notFound } from "next/navigation";
import { Metadata } from "next";
import { solutions } from "@/sections/gps/data/gpsData";
import GPSTrackingDetails from "@/sections/gps/GPSTrackingDetails";
import { pageMetadata, SITE_BRAND } from "@/lib/seo";
import { getClient } from "@/lib/sanity";
import { draftMode } from "next/headers";
import { SOLUTION_BY_SLUG_QUERY, ALL_SOLUTIONS_QUERY } from "@/lib/queries";

// ── Fetch one solution from Sanity by slug ─────────────────────────────────
async function fetchFromSanity(slug: string, isPreview: boolean = false) {
  try {
    const activeClient = getClient(isPreview);
    return await activeClient.fetch(
      SOLUTION_BY_SLUG_QUERY,
      { slug },
      isPreview ? { next: { revalidate: 0 } } : { next: { revalidate: 60 } }
    );
  } catch {
    return null;
  }
}

// ── Types ──────────────────────────────────────────────────────────────────
interface SanityBenefit {
  iconName?: string;
  title?: string;
  description?: string;
}

interface SanityFeature {
  iconName?: string;
  title?: string;
  description?: string;
}

interface SanityUseCase {
  title?: string;
  description?: string;
}

interface SanityMedia {
  mediaType: 'image' | 'video' | 'youtube';
  image?: string;
  youtubeUrl?: string;
  videoUrl?: string;
}

interface SanitySolution {
  title?: string;
  tagline?: string;
  iconName?: string;
  overview?: string;
  benefits?: SanityBenefit[];
  keyFeatures?: SanityFeature[];
  useCases?: SanityUseCase[];
  media?: SanityMedia;
}

// ── Convert Sanity shape → GPSTrackingDetails shape ────────────────────────
function mapSanityData(solution: SanitySolution) {
  return {
    title:    solution.title    ?? "",
    tagline:  solution.tagline  ?? "",
    icon:     solution.iconName ?? "Satellite",
    bgColor:  "from-blue-500 to-purple-600",
    overview: solution.overview ?? "",
    benefits: (solution.benefits ?? []).map((b: SanityBenefit) => ({
      icon: b.iconName ?? "Shield",
      title: b.title ?? "",
      description: b.description ?? "",
    })),
    features: (solution.keyFeatures ?? []).map((f: SanityFeature) => ({
      icon: f.iconName ?? "Zap",
      title: f.title ?? "",
      description: f.description ?? "",
    })),
    useCases: (solution.useCases ?? []).map((u: SanityUseCase) => ({
      title: u.title ?? "",
      description: u.description ?? "",
    })),
    steps: [],
    media: solution.media ? {
      mediaType: solution.media.mediaType,
      imageUrl:  solution.media.image,
      youtubeUrl: solution.media.youtubeUrl,
      videoUrl:  solution.media.videoUrl,
    } : undefined,
    seoMeta: {
      title: solution.title ?? "",
      description: solution.tagline ?? solution.overview ?? "",
    },
  };
}

// ── SEO Metadata ───────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { solution: string };
}): Promise<Metadata> {
  const { solution: slug } = params;

  const sanity = await fetchFromSanity(slug);
  if (sanity) {
    return pageMetadata({
      title: sanity.title,
      description: `${sanity.tagline ?? sanity.overview} Offered by ${SITE_BRAND} in India.`,
      path: `/solutions/${slug}`,
      keywords: [sanity.title, "Garuda OM", "GarudaOM"],
    });
  }

  const local = solutions[slug];
  if (!local) return { title: "Solution Not Found" };

  return pageMetadata({
    title: local.seoMeta.title,
    description: `${local.seoMeta.description} Offered by ${SITE_BRAND} in India.`,
    path: `/solutions/${slug}`,
    keywords: [local.title, "Garuda OM", "GarudaOM"],
  });
}

// ── Page ───────────────────────────────────────────────────────────────────
export default async function SolutionPage({
  params,
}: {
  params: { solution: string };
}) {
  const { solution: slug } = params;
  const { isEnabled: isPreview } = draftMode();

  // Try Sanity first
  const sanity = await fetchFromSanity(slug, isPreview);
  if (sanity) {
    return (
      <GPSTrackingDetails
        data={mapSanityData(sanity)}
        icon={sanity.iconName ?? "Satellite"}
      />
    );
  }

  // Fallback to local file
  const local = solutions[slug];
  if (!local) notFound();

  return (
    <GPSTrackingDetails
      data={local}
      icon={local.icon as string}
    />
  );
}

// ── Static Params ──────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const localSlugs = Object.keys(solutions).map((slug) => ({
    solution: slug,
  }));

  try {
    const sanitySolutions = await getClient(false).fetch(
      ALL_SOLUTIONS_QUERY,
      {},
      { next: { revalidate: 60 } }
    );

    const sanitySlugs = (sanitySolutions ?? [])
      .filter((s: { slug?: string }) => s.slug)
      .map((s: { slug: string }) => ({ solution: s.slug }));

    // Merge without duplicates
    const merged = [...localSlugs];
    for (const ss of sanitySlugs) {
      if (!merged.find((ls) => ls.solution === ss.solution)) {
        merged.push(ss);
      }
    }
    return merged;
  } catch {
    return localSlugs;
  }
}