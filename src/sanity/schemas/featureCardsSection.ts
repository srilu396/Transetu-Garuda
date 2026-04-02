import { defineType, defineField } from 'sanity'
import { LayoutGrid } from 'lucide-react'
import { LUCIDE_ICONS } from './iconConstants'

export const featureCardsSection = defineType({
  name: 'featureCardsSection',
  title: 'Feature Cards',
  type: 'document',
  icon: LayoutGrid,
  fields: [
    defineField({
      name: 'cards',
      title: 'Feature Cards',
      type: 'array',
      description: 'Add multiple feature cards to the section',
      of: [
        {
          name: 'card',
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Card Icon',
              type: 'string',
              description: 'Select an icon for this feature card',
              options: {
                list: LUCIDE_ICONS.map(icon => ({ title: icon.title, value: icon.value })),
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'iconColor',
              title: 'Icon Color',
              type: 'string',
              description: 'Select a color for the icon',
              options: {
                list: [
                  // Reds
                  { title: 'Red', value: 'red' },
                  { title: 'Rose', value: 'rose' },
                  { title: 'Pink', value: 'pink' },
                  // Oranges & Yellows
                  { title: 'Orange', value: 'orange' },
                  { title: 'Amber', value: 'amber' },
                  { title: 'Yellow', value: 'yellow' },
                  // Greens
                  { title: 'Green', value: 'green' },
                  { title: 'Emerald', value: 'emerald' },
                  { title: 'Teal', value: 'teal' },
                  // Blues
                  { title: 'Blue', value: 'blue' },
                  { title: 'Sky', value: 'sky' },
                  { title: 'Cyan', value: 'cyan' },
                  // Purples
                  { title: 'Indigo', value: 'indigo' },
                  { title: 'Violet', value: 'violet' },
                  { title: 'Purple', value: 'purple' },
                  { title: 'Fuchsia', value: 'fuchsia' },
                  // Neutrals
                  { title: 'Slate', value: 'slate' },
                  { title: 'Gray', value: 'gray' },
                  { title: 'Zinc', value: 'zinc' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Card Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).error('At least one feature card is required'),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Feature Cards',
        subtitle: 'Manage feature cards',
      }
    },
  },
})