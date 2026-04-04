import { defineType, defineField } from 'sanity'
import { LUCIDE_ICONS } from './iconConstants'

export const industrialDetail = defineType({
  name: 'industrialDetail',
  title: 'Industrial Pages',
  type: 'document',
  description:
    'Detailed page content for industries. Drafts appear only in preview until published.',
  fields: [
    // ── Basic Fields ──
    defineField({
      name: 'iconName',
      title: 'Page Icon',
      type: 'string',
      description: 'Icon shown in the page header.',
      options: {
        list: LUCIDE_ICONS,
        layout: 'dropdown',
      },
      initialValue: 'Building2',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge Label',
      type: 'string',
      description: 'e.g., "Industry Solution"',
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used for URL routing.',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Sort order (ascending)',
      validation: (Rule) => Rule.integer().positive(),
    }),

    // ── Info Cards (Below Image) ──
    defineField({
      name: 'infoCards',
      title: 'Info Cards',
      type: 'array',
      description: 'Exactly 3 info cards shown below the image.',
      validation: (Rule) => Rule.min(3).max(3).error('You must provide exactly 3 info cards.'),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'iconName',
              title: 'Icon',
              type: 'string',
              options: { list: LUCIDE_ICONS, layout: 'dropdown' },
              initialValue: 'Activity',
            }),
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'value', type: 'string', title: 'Value' }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
    }),

    // ── Industry Overview ──
    defineField({
      name: 'industryOverview',
      title: 'Industry Overview',
      type: 'object',
      fields: [
        defineField({ name: 'smallParagraph', title: 'Small Paragraph', type: 'text', rows: 2 }),
        defineField({ name: 'largeParagraph', title: 'Large Paragraph', type: 'text', rows: 4 }),
      ],
    }),

    // ── Core Features ──
    defineField({
      name: 'coreFeatures',
      title: 'Core Features',
      description: 'Points list (rendered with a single default icon in the UI).',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'text', type: 'string', title: 'Text' }),
          ],
          preview: {
             select: { title: 'text' }
          }
        },
      ],
    }),

    // ── Key Benefits ──
    defineField({
      name: 'keyBenefits',
      title: 'Key Benefits',
      description: 'Points list (rendered with dot-style icons in the UI).',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'text', type: 'string', title: 'Text' }),
          ],
          preview: {
            select: { title: 'text' }
          }
        },
      ],
    }),

    // ── Key Solutions ──
    defineField({
      name: 'keySolutions',
      title: 'Key Solutions',
      description: 'List of solutions (rendered with numbered icons in the UI).',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'solutionText', type: 'string', title: 'Solution Text' }),
          ],
          preview: {
            select: { title: 'solutionText' }
          }
        },
      ],
    }),
  ],

  orderings: [
    {
      title: 'Display Order (Low to High)',
      name: 'displayOrderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      order: 'order',
    },
    prepare({ title, order }: { title?: string; order?: number }) {
      return {
        title: title ?? 'Untitled Detail',
        subtitle: order ? `Order: ${order}` : 'No order set',
      }
    },
  },
})
