import { defineType, defineField } from 'sanity'

export const solutionPage = defineType({
  name: 'solutionPage',
  title: 'Solution Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: Rule => Rule.required() }),
    defineField({ name: 'badge', title: 'Badge Label', type: 'string', description: 'e.g. Fleet Solution' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'overview', title: 'Overview Text', type: 'text', rows: 5 }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Feature Title', type: 'string' },
          { name: 'description', title: 'Feature Description', type: 'text' },
        ]
      }]
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits & Use Cases',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Benefit Title', type: 'string' },
          { name: 'description', title: 'Benefit Description', type: 'text' },
        ]
      }]
    }),
    defineField({
      name: 'whyChoose',
      title: 'Why Choose Garuda Points',
      type: 'array',
      of: [{ type: 'string' }]
    }),
  ],
})