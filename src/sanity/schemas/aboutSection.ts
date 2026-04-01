import { defineType, defineField } from 'sanity'
import { Users, Info, Eye, Target, Award, Building2 } from 'lucide-react'

export const aboutSection = defineType({
  name: 'aboutSection',
  title: 'About Us Section',
  type: 'document',
  // Singleton pattern: hide from "New Document" menu (handled in sanity.config.ts)
  fields: [
    defineField({
      name: 'stats',
      title: 'Stats Cards',
      type: 'array',
      description: 'Exactly 4 stats cards (Active Clients, Years Experience, etc.)',
      of: [
        {
          name: 'statCard',
          type: 'object',
          fields: [
            defineField({
              name: 'statValue',
              title: 'Stat Value',
              type: 'string',
              description: 'e.g. 2000+, 6+, 15K+, 99.9%',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g. Active Clients, Years Experience',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'statValue',
            },
          },
        },
      ],
      validation: (Rule) => Rule.length(4).error('Exactly 4 stats cards are required'),
    }),

    defineField({
      name: 'founder',
      title: 'Founder Card',
      type: 'object',
      icon: Users,
      fields: [
        defineField({
          name: 'founderImage',
          title: 'Founder Photo',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'founderName',
          title: 'Founder Name',
          type: 'string',
        }),
        defineField({
          name: 'founderBadge',
          title: 'Founder Badge',
          type: 'string',
          description: 'e.g. Founder & Business Strategist',
        }),
        defineField({
          name: 'founderEducation',
          title: 'Education',
          type: 'string',
          description: 'e.g. MBA in Logistics & Supply Chain Management',
        }),
        defineField({
          name: 'founderPreviousRoles',
          title: 'Previous Roles',
          type: 'text',
          description: 'e.g. Ex-BlackBuck... | Ex-Paytm...',
        }),
        defineField({
          name: 'founderBio',
          title: 'Founder Bio',
          type: 'text',
          description: 'Long paragraph for the founder section',
        }),
      ],
    }),

    defineField({
      name: 'companyOverview',
      title: 'Company Overview',
      type: 'object',
      icon: Info,
      fields: [
        defineField({
          name: 'overviewDescription',
          title: 'Description',
          type: 'text',
          description: 'The main long paragraph for the overview',
        }),
      ],
    }),

    defineField({
      name: 'visionMission',
      title: 'Vision & Mission',
      type: 'object',
      fields: [
        defineField({
          name: 'visionDescription',
          title: 'Vision Description',
          type: 'text',
          icon: Eye,
        }),
        defineField({
          name: 'missionDescription',
          title: 'Mission Description',
          type: 'text',
          icon: Target,
        }),
      ],
    }),

    defineField({
      name: 'keyAchievements',
      title: 'Key Achievements',
      type: 'array',
      icon: Award,
      of: [{ type: 'string' }],
      description: 'Tick icon will be added automatically in the UI',
    }),

    defineField({
      name: 'clients',
      title: 'Trusted By Industry Leaders',
      type: 'array',
      icon: Building2,
      of: [
        {
          name: 'client',
          type: 'object',
          fields: [
            defineField({
              name: 'clientName',
              title: 'Client Name',
              type: 'string',
            }),
            defineField({
              name: 'clientLogo',
              title: 'Client Logo',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'clientWebsiteUrl',
              title: 'Website URL',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'clientName',
              media: 'clientLogo',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Us Section',
        subtitle: 'Singleton Content',
      }
    },
  },
})
