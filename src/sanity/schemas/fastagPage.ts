import { defineType, defineField } from 'sanity'

export const fastagPage = defineType({
  name: 'fastagPage',
  title: 'FASTag Pages',
  type: 'document',
  description:
    'Published content appears on the live website. Drafts are visible only in Presentation preview until you publish.',
  fieldsets: [
    { name: 'main', title: 'Main Content' },
    { name: 'docs', title: 'Documents' }
  ],
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      fieldset: 'main',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cardType',
      title: 'Card Type',
      type: 'string',
      fieldset: 'main',
      options: {
        list: [
          { title: 'Buy FASTag for Your Vehicle', value: 'individual' },
          { title: 'Become a FASTag Business Partner', value: 'business' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'object',
      fieldset: 'main',
      fields: [
        defineField({
          name: 'mediaType',
          title: 'Media Type',
          type: 'string',
          options: {
            list: [
              { title: 'Image', value: 'image' },
              { title: 'YouTube Video', value: 'youtube' },
              { title: 'Direct Video URL', value: 'video' },
            ],
            layout: 'radio',
          },
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          hidden: ({ parent }) => parent?.mediaType !== 'image',
        }),
        defineField({
          name: 'youtubeUrl',
          title: 'YouTube Video URL',
          type: 'url',
          hidden: ({ parent }) => parent?.mediaType !== 'youtube',
        }),
        defineField({
          name: 'videoUrl',
          title: 'Direct Video URL (.mp4)',
          type: 'url',
          hidden: ({ parent }) => parent?.mediaType !== 'video',
        }),
      ],
    }),
    defineField({
      name: 'overviewText',
      title: 'Overview Text',
      type: 'text',
      fieldset: 'main',
    }),
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      fieldset: 'docs',
      of: [
        {
          type: 'object',
          title: 'Document',
          fields: [
            defineField({
              name: 'documentName',
              title: 'Document Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'file',
              title: 'Upload Document',
              type: 'file',
              options: { accept: '.pdf,.doc,.docx' },
            }),
          ],
          preview: {
            select: { title: 'documentName', subtitle: 'description' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'pageTitle', media: 'media.image' },
    prepare({ title, media }) {
      return { title: title || 'Untitled FASTag Page', media }
    },
  },
})
