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

    // ── REFERENCE TO DETAILED PAGE ─────────────────────────────────────────
    // Slug lives ONLY in solutionPage. We fetch it via this reference at runtime.
    // No duplicate slugs — the card just points to the detailed page document.
    defineField({
      name: 'detailedPage',
      title: 'Detailed Solution Page',
      type: 'reference',
      to: [{ type: 'solutionPage' }],
      weak: true,
      description:
        "Link this card to its detailed solution page. The \"Learn More\" button will navigate to that page's slug automatically.",
      validation: Rule => Rule.required().error('Each card must be linked to a solution page.'),
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
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'order',
      media: 'image',
      linkedPageTitle: 'detailedPage.title',
    },
    prepare({ title, subtitle, media, linkedPageTitle }: {
      title?: string
      subtitle?: number
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      media?: any
      linkedPageTitle?: string
    }) {
      return {
        title: title ?? 'Untitled Card',
        subtitle: subtitle
          ? `Order: ${subtitle} → ${linkedPageTitle ?? '⚠️ Link a solution page'}`
          : '⚠️ Set order number',
        media: media,
      }
    },
  },
})