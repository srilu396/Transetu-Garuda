import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
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
            // GPS Solution Cards with clean ordered view
            S.listItem()
              .title('GPS Solution Cards')
              .schemaType('gpsSolutionCard')
              .child(
                S.documentTypeList('gpsSolutionCard')
                  .title('GPS Solution Cards')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
                  .filter('_type == "gpsSolutionCard"')
                  .canHandleIntent((intentName) => 
                    intentName === 'create' || intentName === 'edit'
                  )
              ),
            
            S.divider(),
            
            // Other document types
            S.documentTypeListItem('solutionPage').title('Solution Pages'),
            S.documentTypeListItem('industryPage').title('Industry Pages'),
            S.documentTypeListItem('featureCard').title('Why Us Feature Cards'),
            S.documentTypeListItem('fastagContent').title('FASTag Content'),
            S.documentTypeListItem('siteSettings').title('Site Settings'),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})