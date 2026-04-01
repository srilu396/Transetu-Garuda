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
            
            // FASTag Section Sidebar
            S.listItem()
              .title('FASTag Section')
              .child(
                S.list()
                  .title('FASTag Pages')
                  .items([
                    S.listItem()
                      .title('Buy FASTag for Your Vehicle')
                      .child(
                        S.document()
                          .schemaType('fastagPage')
                          .documentId('fastag-individual')
                      ),
                    S.listItem()
                      .title('Become a FASTag Business Partner')
                      .child(
                        S.document()
                          .schemaType('fastagPage')
                          .documentId('fastag-business')
                      ),
                  ])
              ),
            
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            
            S.listItem()
              .title('About Us Section')
              .child(
                S.document()
                  .schemaType('aboutSection')
                  .documentId('aboutSection')
              ),
            
            S.listItem()
              .title('Watch Platform Demo')
              .child(
                S.document()
                  .schemaType('watchPlatformDemoSection')
                  .documentId('watchPlatformDemoSection')
              ),
          ])
      },
    }),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: 'http://localhost:3000',
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
          'fastagPage': {
            select: {
              pageTitle: 'pageTitle',
              cardType: 'cardType',
            },
            resolve: (doc: any) => {
              if (!doc?.cardType) return null
              
              const hrefMap: Record<string, string> = {
                individual: '/fastag/customer',
                business: '/fastag/partner',
              }
              
              const href = hrefMap[doc.cardType as 'individual' | 'business']
                
              if (!href) return null
              
              return {
                locations: [
                  {
                    title: doc?.pageTitle || 'FASTag Page',
                    href,
                  },
                ],
              }
            }
          },
          'aboutSection': {
            select: {
              title: 'title',
            },
            resolve: () => {
              return {
                locations: [
                   {
                     title: 'About Us (Home)',
                     href: '/#about',
                   },
                ],
              }
            }
          },
          'watchPlatformDemoSection': {
            select: {
              title: 'heading',
            },
            resolve: () => {
              return {
                locations: [
                   {
                     title: 'Watch Platform Demo (Home)',
                     href: '/#videos',
                   },
                ],
              }
            }
          },
          'siteSettings': {
            select: {},
            resolve: () => {
              return {
                locations: [
                   {
                     title: 'Site Settings',
                     href: '/',
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

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId !== 'fastagPage' && templateItem.templateId !== 'aboutSection' && templateItem.templateId !== 'watchPlatformDemoSection' && templateItem.templateId !== 'siteSettings')
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'fastagPage' || schemaType === 'siteSettings') {
        return prev.filter(({ action }) => action === 'publish' || action === 'discardChanges' || action === 'restore')
      }
      return prev
    },
  },
})