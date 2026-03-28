import { getSiteUrl } from "@/lib/siteUrl";
import { BRAND_KEYWORDS, DEFAULT_DESCRIPTION, SITE_BRAND } from "@/lib/seo";

/**
 * Organization + WebSite JSON-LD for brand discovery (Garuda OM / GarudaOM variants).
 */
export default function RootJsonLd() {
  const siteUrl = getSiteUrl();
  const orgId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

  const graph = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: SITE_BRAND,
      alternateName: BRAND_KEYWORDS.filter((k) => k !== SITE_BRAND),
      url: siteUrl,
      logo: `${siteUrl}/assets/logos/logo.png`,
      email: "info@garudaom.online",
      telephone: "+917780274792",
      description: DEFAULT_DESCRIPTION,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: SITE_BRAND,
      description: DEFAULT_DESCRIPTION,
      inLanguage: "en-IN",
      publisher: { "@id": orgId },
    },
  ];

  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
