import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({
      name: 'addresses',
      title: 'Office Addresses',
      type: 'array',
      of: [{ type: 'text' }]
    }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string' }),
    defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({
      name: 'companyDocs',
      title: 'Company Documents',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'companyDoc',
          fields: [
            { name: 'documentName', title: 'Document Name', type: 'string' },
            { name: 'file', title: 'Document File', type: 'file' }
          ]
        }
      ]
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global configuration (Phone, Email, Social)',
      }
    },
  },
})