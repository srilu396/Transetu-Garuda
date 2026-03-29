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
      description: 'Enter a number (1, 2, 3...) to arrange cards. Lower numbers appear first.',
      type: 'number',
      validation: Rule => Rule.integer().positive(),
    }),
  ],
  orderings: [
    {
      title: 'Display Order (Low to High)',
      name: 'displayOrderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'order',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title,
        subtitle: subtitle ? `Order: ${subtitle}` : '⚠️ Set order number',
        media: media,
      }
    },
  },
})