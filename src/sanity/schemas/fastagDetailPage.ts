import { defineType, defineField } from 'sanity'

export const fastagDetailPage = defineType({
  name: 'fastagDetailPage',
  title: 'FASTag Detail Page',
  type: 'document',
  description:
    'Published content appears on the live website. Drafts are visible only in Presentation preview until you publish.',

  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge Label',
      type: 'string',
      description: 'The small label above the title (e.g. "FASTAG PORTAL")',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Optional URL slug for Presentation links. The website always opens /fastag/buy-fastag and /fastag/become-a-partner via fixed document IDs, so this does not need to match those paths.',
      options: {
        source: 'title',
        maxLength: 96,
        // Only two fixed desk documents exist; global uniqueness checks caused false “already in use” errors.
        isUnique: async () => true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overview',
      title: 'Page Overview',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'youtubeVideoUrl',
      title: 'YouTube Video URL',
      type: 'url',
    }),
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'documentName',
              title: 'Document Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'documentDescription',
              title: 'Document Description',
              type: 'text',
            }),
            defineField({
              name: 'documentFile',
              title: 'Upload Document',
              type: 'file',
              options: {
                accept: 'application/pdf,.doc,.docx',
              },
            }),
          ],
          preview: {
            select: { title: 'documentName' },
            prepare({ title }: { title?: string }) {
              return { title: title ?? 'Document' }
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: { title: 'title', slug: 'slug.current' },
    prepare({ title, slug }: { title?: string; slug?: string }) {
      return {
        title: title ?? 'FASTag page',
        subtitle: slug ? `/fastag/${slug}` : '',
      }
    },
  },
})
