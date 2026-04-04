import { defineType, defineField } from 'sanity'
import { LUCIDE_ICONS } from './iconConstants'

export const industrialCard = defineType({
  name: 'industrialCard',
  title: 'Industrial Cards',
  type: 'document',
  description:
    'Published content appears on the live website. Drafts are visible only in Presentation preview until you publish.',
  fields: [
    defineField({
      name: 'iconName',
      title: 'Icon',
      type: 'string',
      description: 'Choose an icon for this card.',
      options: {
        list: LUCIDE_ICONS,
        layout: 'dropdown',
      },
      initialValue: 'Building2',
    }),
    defineField({
      name: 'title',
      title: 'Card Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge Label',
      type: 'string',
      description: 'e.g., "Logistics", "Manufacturing"',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      description: 'Cards are sorted in ascending order (1 comes first).',
      type: 'number',
      validation: (Rule) => Rule.integer().positive(),
    }),
    defineField({
      name: 'detailedPage',
      title: 'Detailed Page Reference',
      type: 'reference',
      to: [{ type: 'industrialDetail' }],
      weak: true,
      description:
        'Link this card to its detailed page. Clicking the card will open this page.',
      validation: (Rule) =>
        Rule.required().error('Each card must be linked to a detail page.'),
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
      subtitle: 'order',
      linkedPageTitle: 'detailedPage.title',
      iconName: 'iconName',
    },
    prepare({ title, subtitle, linkedPageTitle }: {
      title?: string
      subtitle?: number
      linkedPageTitle?: string
    }) {
      return {
        title: title ?? 'Untitled Card',
        subtitle: subtitle
          ? `Order: ${subtitle} → ${linkedPageTitle ?? '⚠️ Link missing'}`
          : '⚠️ Set order',
        media: undefined, // Could use an icon component if available, but text preview is fine.
      }
    },
  },
})
