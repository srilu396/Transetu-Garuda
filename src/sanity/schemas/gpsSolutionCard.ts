import { defineType, defineField } from 'sanity'

export const gpsSolutionCard = defineType({
  name: 'gpsSolutionCard',
  title: 'GPS Solution Card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Card Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'bulletPoints',
      title: 'Bullet Points',
      description: 'The dot points shown at bottom of card e.g. Dual camera recording',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Must match existing solutions URL e.g. dash-cam-system',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      description: 'Lower number appears first. 1, 2, 3...',
      type: 'number',
    }),
  ],
})