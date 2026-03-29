import { defineType, defineField } from 'sanity'

export const fastagContent = defineType({
  name: 'fastagContent',
  title: 'FASTag Content',
  type: 'document',
  fields: [
    defineField({ name: 'pageType', title: 'Page Type', type: 'string',
      options: { list: ['customer', 'partner'], layout: 'radio' },
      validation: Rule => Rule.required()
    }),
    defineField({ name: 'title', title: 'Page Title', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'overview', title: 'Overview', type: 'text', rows: 4 }),
    defineField({
      name: 'benefits',
      title: 'Benefits List',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Benefit Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
        ]
      }]
    }),
    defineField({
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [{ type: 'string' }]
    }),
  ],
})