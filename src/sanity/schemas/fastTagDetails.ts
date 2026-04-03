import { defineField, defineType } from 'sanity'

export const fastTagDetailsSection = defineType({
  name: 'fastTagDetailsSection',
  title: 'Fastag Details Section',
  type: 'document',
  description: 'Manage the two fixed FASTag cards and their detailed pages.',
  fields: [
    defineField({
      name: 'cards',
      title: 'FASTag Cards',
      type: 'array',
      description: 'Exactly 2 cards are required: "Buy FASTag" and "Become a Partner".',
      validation: (Rule) => Rule.length(2).required().error('You must have exactly 2 cards.'),
      of: [
        {
          type: 'object',
          name: 'card',
          fields: [
            defineField({
              name: 'identifier',
              title: 'Identifier',
              type: 'string',
              description: 'Internal ID used for routing. DO NOT CHANGE.',
              options: {
                list: [
                  { title: 'Buy FASTag for Your Vehicle (buyFastTag)', value: 'buyFastTag' },
                  { title: 'Become a FASTag Business Partner (businessPartner)', value: 'businessPartner' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Card Title',
              type: 'string',
              description: 'The title displayed on the main page card.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'pageTitle',
              title: 'Detail Page Title',
              type: 'string',
              description: 'The main heading on the detailed page.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'youtubeUrl',
              title: 'YouTube URL',
              type: 'url',
              description: 'Accepts only YouTube links for the detail page video.',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https'],
                }).custom((url) => {
                  if (!url) return true
                  return url.includes('youtube.com') || url.includes('youtu.be')
                    ? true
                    : 'Must be a valid YouTube URL'
                }),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 5,
              description: 'The detailed content for the detail page.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'documents',
              title: 'Required Documents',
              type: 'array',
              description: 'List of documents required for this service.',
              validation: (Rule) => Rule.min(1).required().error('At least one document is required.'),
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
                      name: 'description',
                      title: 'Document Description',
                      type: 'text',
                      rows: 3,
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'file',
                      title: 'Sample/Template File',
                      type: 'file',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'identifier',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Untitled Card',
                subtitle: `ID: ${subtitle || 'Not set'}`,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      cards: 'cards',
    },
    prepare({ cards }) {
      const cardCount = cards?.length || 0
      return {
        title: 'FASTag Details Section',
        subtitle: `${cardCount} card${cardCount === 1 ? '' : 's'} configured`,
      }
    },
  },
})
