// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  name: "garuda-om-cms",
  title: "Garuda OM Admin Panel",
  basePath: "/studio",

  projectId: "tuxe1ipn",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) => {
        return S.list()
          .title("Content")
          .items([
            // GPS Solution Cards
            S.listItem()
              .title("GPS Solution Cards")
              .schemaType("gpsSolutionCard")
              .child(
                S.documentTypeList("gpsSolutionCard")
                  .title("GPS Solution Cards")
                  .defaultOrdering([{ field: "order", direction: "asc" }]),
              ),

            // GPS Solution Pages - with custom title
            S.listItem()
              .title("GPS Solution Pages") // ← This controls the sidebar text
              .schemaType("solutionPage")
              .child(
                S.documentTypeList("solutionPage")
                  .title("GPS Solution Pages")
                  .defaultOrdering([{ field: "order", direction: "asc" }]),
              ),

            S.divider(),

            // Industrial Cards
            S.listItem()
              .title("Industrial Cards")
              .schemaType("industrialCard")
              .child(
                S.documentTypeList("industrialCard")
                  .title("Industrial Cards")
                  .defaultOrdering([{ field: "order", direction: "asc" }]),
              ),

            // Industrial Detail Pages
            S.listItem()
              .title("Industrial Pages")
              .schemaType("industrialDetail")
              .child(
                S.documentTypeList("industrialDetail")
                  .title("Industrial Pages")
                  .defaultOrdering([{ field: "order", direction: "asc" }]),
              ),

            S.divider(),

            // Other document types

            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings"),
              ),

            S.listItem()
              .title("About Us Section")
              .child(
                S.document()
                  .schemaType("aboutSection")
                  .documentId("aboutSection"),
              ),

            S.listItem()
              .title("Watch Platform Demo")
              .child(
                S.document()
                  .schemaType("watchPlatformDemoSection")
                  .documentId("watchPlatformDemoSection"),
              ),

            S.listItem()
              .title("Feature Cards")
              .child(
                S.document()
                  .schemaType("featureCardsSection")
                  .documentId("featureCardsSection"),
              ),

            S.divider(),

            // Fast Tag Detail Pages (Restricted)
            S.listItem()
              .title("Fast Tag Details")
              .child(
                S.list()
                  .title("Select Page to Edit")
                  .items([
                    S.listItem()
                      .title("Buy Fast Tag")
                      .child(
                        S.document()
                          .schemaType("fastTagDetail")
                          .documentId("buy"),
                      ),
                    S.listItem()
                      .title("Become a Partner")
                      .child(
                        S.document()
                          .schemaType("fastTagDetail")
                          .documentId("partner"),
                      ),
                  ]),
              ),
          ]);
      },
    }),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: "http://localhost:3000",
        preview: "/api/preview",
        previewMode: {
          enable: "/api/preview",
          disable: "/api/exit-preview",
        },
      },
      resolve: {
        locations: {
          industrialDetail: {
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc: any) => {
              if (!doc?.slug) return null;
              return {
                locations: [
                  {
                    title: doc.title || "Untitled",
                    href: `/industrial/${doc.slug}`,
                  },
                ],
              };
            },
          },
          solutionPage: {
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc: any) => {
              if (!doc?.slug) return null;
              return {
                locations: [
                  {
                    title: doc.title || "Untitled",
                    href: `/solutions/${doc.slug}`,
                  },
                ],
              };
            },
          },

          aboutSection: {
            select: {
              title: "title",
            },
            resolve: () => {
              return {
                locations: [
                  {
                    title: "About Us (Home)",
                    href: "/#about",
                  },
                ],
              };
            },
          },
          watchPlatformDemoSection: {
            select: {
              title: "heading",
            },
            resolve: () => {
              return {
                locations: [
                  {
                    title: "Watch Platform Demo (Home)",
                    href: "/#videos",
                  },
                ],
              };
            },
          },
          fastTagDetail: {
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc: any) => {
              if (!doc?.slug) return null;
              return {
                locations: [
                  {
                    title: doc.title || "Untitled",
                    href: `/fastag/${doc.slug}?preview=true`,
                  },
                ],
              };
            },
          },
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (templateItem) =>
            templateItem.templateId !== "aboutSection" &&
            templateItem.templateId !== "watchPlatformDemoSection" &&
            templateItem.templateId !== "siteSettings" &&
            templateItem.templateId !== "featureCardsSection" &&
            templateItem.templateId !== "fastTagDetail",
        );
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === "siteSettings" || schemaType === "fastTagDetail") {
        return prev.filter(
          ({ action }) =>
            action === "publish" ||
            action === "discardChanges" ||
            action === "restore",
        );
      }
      return prev;
    },
  },
});