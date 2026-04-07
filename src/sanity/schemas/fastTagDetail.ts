import { defineType, defineField } from 'sanity'

export const fastTagDetail = defineType({
  name: 'fastTagDetail',
  title: 'Fast Tag Details',
  type: 'document',
  description: 'Detailed content for Fast Tag pages (Buy and Partner).',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'The main heading of the detail page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL identifier (e.g., "buy" or "partner").',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (slug, context) => {
          const { document, getClient } = context;
          if (!document) return true;
          const id = document._id.replace(/^drafts\./, '');
          const type = document._type;
          const query = `!defined(*[_type == "${type}" && slug.current == "${slug}" && _id != "${id}" && _id != "drafts.${id}"][0]._id)`;
          return getClient({apiVersion: '2024-01-01'}).fetch(query);
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      description: 'A detailed description or overview displayed on the page.',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Video URL',
      type: 'url',
      description: 'Link to a YouTube video for this section.',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      description: 'List of downloadable documents or resources.',
      of: [
        {
          type: 'object',
          name: 'documentItem',
          fields: [
            defineField({
              name: 'documentName',
              title: 'Document Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'shortDescription',
              title: 'Short Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'file',
              title: 'File Upload',
              type: 'file',
              description: 'PDF, DOC, or other document files.',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'documentName',
              subtitle: 'shortDescription',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})
