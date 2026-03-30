import { defineType, defineField } from 'sanity'

export const featureCard = defineType({
  name: 'featureCard',
  title: 'Why Us Feature Card',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Feature Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'iconName', title: 'Icon Name', type: 'string', description: 'Lucide icon name e.g. Shield, Zap, Globe' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
})