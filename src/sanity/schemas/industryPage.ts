import { defineType, defineField } from 'sanity'

export const industryPage = defineType({
  name: 'industryPage',
  title: 'Industry Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Industry Name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: Rule => Rule.required() }),
    defineField({ name: 'badge', title: 'Badge Label', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'image', title: 'Industry Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'overview', title: 'Industry Overview', type: 'text', rows: 5 }),
    defineField({
      name: 'stats',
      title: 'Stats (e.g. +25% Efficiency)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Stat Value', type: 'string', description: 'e.g. +25%' },
          { name: 'label', title: 'Stat Label', type: 'string', description: 'e.g. Efficiency Gain' },
        ]
      }]
    }),
    defineField({
      name: 'keySolutions',
      title: 'Key Solutions List',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'coreFeatures',
      title: 'Core Features',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'keyBenefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{ type: 'string' }]
    }),
  ],
})