import type { MetadataRoute } from "next";
import { DEFAULT_DESCRIPTION, SITE_BRAND } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_BRAND} — GPS Tracking & FASTag`,
    short_name: "GarudaOM",
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#6467f2",
    lang: "en-IN",
    icons: [
      {
        src: "/assets/logos/favicon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/assets/logos/favicon-180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/assets/logos/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
