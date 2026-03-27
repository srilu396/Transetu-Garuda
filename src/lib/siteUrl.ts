function normalizeSiteUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return trimmed;
  return trimmed.endsWith("/") ? trimmed.slice(0, -1) : trimmed;
}

export function getSiteUrl(): string {
  const fromSiteUrl = normalizeSiteUrl(process.env.SITE_URL ?? "");
  if (fromSiteUrl) return fromSiteUrl;

  // Vercel provides this in production/preview (no protocol).
  const vercelUrl = normalizeSiteUrl(process.env.VERCEL_URL ?? "");
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:3000";
}

