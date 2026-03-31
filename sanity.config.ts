// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'garuda-om-cms',
  title: 'Garuda OM Admin Panel',

  projectId: 'tuxe1ipn',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) => {
        return S.list()
          .title('Content')
          .items([
            // GPS Solution Cards
            S.listItem()
              .title('GPS Solution Cards')
              .schemaType('gpsSolutionCard')
              .child(
                S.documentTypeList('gpsSolutionCard')
                  .title('GPS Solution Cards')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
            
            // GPS Solution Pages - with custom title
            S.listItem()
              .title('GPS Solution Pages')  // ← This controls the sidebar text
              .schemaType('solutionPage')
              .child(
                S.documentTypeList('solutionPage')
                  .title('GPS Solution Pages')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
            
            S.divider(),
            
            // Other document types
            S.documentTypeListItem('industryPage').title('Industry Pages'),
            S.documentTypeListItem('featureCard').title('Why Us Feature Cards'),
            S.documentTypeListItem('fastagContent').title('FASTag Content'),
            S.documentTypeListItem('siteSettings').title('Site Settings'),
          ])
      },
    }),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
        preview: '/',
        previewMode: {
          enable: '/api/preview',
          disable: '/api/exit-preview',
        },
      },
      resolve: {
        locations: {
          'solutionPage': {
            select: {
              title: 'title',
              slug: 'slug.current',
            },
            resolve: (doc: any) => {
              if (!doc.slug) return null
              return {
                locations: [
                  {
                    title: doc.title || 'Untitled',
                    href: `/solutions/${doc.slug}`,
                  },
                ],
              }
            }
          },
          'industryPage': {
            select: {
              title: 'title',
              slug: 'slug.current',
            },
            resolve: (doc: any) => {
              if (!doc.slug) return null
              return {
                locations: [
                  {
                    title: doc.title || 'Untitled',
                    href: `/industries/${doc.slug}`,
                  },
                ],
              }
            }
          },
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})