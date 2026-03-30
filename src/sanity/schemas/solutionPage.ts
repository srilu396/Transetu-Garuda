// ============================================================
// SCHEMA: GPS Solution Pages
// File:   sanity/schemas/solutionPage.ts
//
// Icon strategy (matches live UI exactly):
//   • Page-level icon  → manual dropdown (Lucide)
//   • Benefits (3 cards) → manual dropdown (Lucide, content-driven)
//   • Key Features     → manual dropdown (Lucide, content-driven)
//   • Use Cases        → NO icon field — frontend renders auto-numbers (01, 02…)
//   • Why Choose       → Icon dropdown with CheckCircle2 as default
//
// UI Title Mapping:
//   • Benefits field   → NO title displayed in UI (just the 3 cards)
//   • Use Cases field  → Displays as "Benefits & Use Cases" in UI
// ============================================================

import { defineType, defineField } from 'sanity'

// ──────────────────────────────────────────────────────────────────────────────
// LUCIDE ICON LIST
// These are the exact icons already used across your solution pages and
// gpsData / featureCard schemas. Only meaningful, GPS/fleet-relevant icons
// are included — no generic clutter.
// ──────────────────────────────────────────────────────────────────────────────
const LUCIDE_ICONS = [
  // Tracking & Location
  { title: 'MapPin — Location / Tracking',       value: 'MapPin' },
  { title: 'Navigation — Route / Direction',     value: 'Navigation' },
  { title: 'Navigation2 — GPS Arrow',            value: 'Navigation2' },
  { title: 'Route — Path / Journey',             value: 'Route' },
  { title: 'Map — Map View',                     value: 'Map' },
  { title: 'Satellite — Satellite / Signal',     value: 'Satellite' },
  { title: 'Signal — Network / Connectivity',    value: 'Signal' },
  { title: 'Wifi — Wireless / Live Feed',        value: 'Wifi' },

  // Fleet & Vehicles
  { title: 'Truck — Fleet / Heavy Vehicle',      value: 'Truck' },
  { title: 'Bus — Bus / School Transport',       value: 'Bus' },
  { title: 'Car — Car / Personal Vehicle',       value: 'Car' },
  { title: 'Package — Cargo / Delivery',         value: 'Package' },

  // Fuel & Engine
  { title: 'Fuel — Fuel Level / Consumption',    value: 'Fuel' },
  { title: 'Battery — Power / Battery',          value: 'Battery' },
  { title: 'Zap — Power / Efficiency',           value: 'Zap' },
  { title: 'Cpu — Device / Hardware',            value: 'Cpu' },

  // Camera & Vision
  { title: 'Video — Dash Cam / Recording',       value: 'Video' },
  { title: 'Monitor — Live View / Dashboard',    value: 'Monitor' },
  { title: 'Radio — Wireless / IoT',             value: 'Radio' },

  // Security & Compliance
  { title: 'Shield — Security / Protection',     value: 'Shield' },
  { title: 'ShieldCheck — Verified / Compliant', value: 'ShieldCheck' },
  { title: 'Lock — Locked / Secure',             value: 'Lock' },
  { title: 'Flag — Compliance / Milestone',      value: 'Flag' },

  // Performance & Analytics
  { title: 'BarChart2 — Reports / Analytics',    value: 'BarChart2' },
  { title: 'PieChart — Data / Breakdown',        value: 'PieChart' },
  { title: 'TrendingUp — Growth / Efficiency',   value: 'TrendingUp' },
  { title: 'Activity — Live / Real-time',        value: 'Activity' },
  { title: 'Timer — Time / Speed',               value: 'Timer' },
  { title: 'Clock — Schedule / Uptime',          value: 'Clock' },

  // Operations & Service
  { title: 'Settings — Configuration',           value: 'Settings' },
  { title: 'Wrench — Maintenance',               value: 'Wrench' },
  { title: 'Bell — Alert / Notification',        value: 'Bell' },
  { title: 'AlertCircle — Warning / Alert',      value: 'AlertCircle' },
  { title: 'CheckCircle2 — Success / Done',      value: 'CheckCircle2' },
  { title: 'Star — Quality / Premium',           value: 'Star' },
  { title: 'Award — Achievement / Reliability',  value: 'Award' },
  { title: 'Target — Goal / Precision',          value: 'Target' },
  { title: 'ThumbsUp — Approval / Trust',        value: 'ThumbsUp' },
  { title: 'LifeBuoy — Support / Help',          value: 'LifeBuoy' },
  { title: 'Phone — Support / Contact',          value: 'Phone' },
  { title: 'Smartphone — App / Mobile',          value: 'Smartphone' },

  // Business & Logistics
  { title: 'Building2 — Enterprise / Company',   value: 'Building2' },
  { title: 'Users — Team / Fleet Operators',     value: 'Users' },
  { title: 'Globe — Coverage / Nationwide',      value: 'Globe' },
  { title: 'CreditCard — Payment / FASTag',      value: 'CreditCard' },
  { title: 'Tag — Tagging / Label',              value: 'Tag' },
  { title: 'Layers — Integration / Multi-layer', value: 'Layers' },
  { title: 'Cloud — Cloud / Remote Access',      value: 'Cloud' },
  { title: 'Database — Data / Storage',          value: 'Database' },
  { title: 'FileText — Reports / Documents',     value: 'FileText' },
  { title: 'Link — Integration / API',           value: 'Link' },

  // Search & Find
  { title: 'Search — Search / Find',             value: 'Search' },
  { title: 'Camera — Camera / Video',             value: 'Camera' },
]

// ──────────────────────────────────────────────────────────────────────────────
// SCHEMA DEFINITION
// ──────────────────────────────────────────────────────────────────────────────
export const solutionPage = defineType({
  name: 'solutionPage',
  title: 'GPS Solution Pages',
  type: 'document',

  fields: [

    // ── 1. Page Icon ────────────────────────────────────────────────────────
    defineField({
      name: 'iconName',
      title: 'Page Icon',
      type: 'string',
      description:
        'Icon shown in the page header. Pick the icon that best represents this solution (e.g. Navigation2 for GPS Tracking, Fuel for Fuel Sensors, Video for Dash Cam).',
      options: {
        list: LUCIDE_ICONS,
        layout: 'dropdown',
      },
      initialValue: 'MapPin',
      validation: (Rule) => Rule.required().error('Page icon is required.'),
    }),

    // ── 2. Badge Label ──────────────────────────────────────────────────────
    defineField({
      name: 'badge',
      title: 'Badge Label',
      type: 'string',
      description: 'Small label shown above the title. e.g. "Fleet Solution"',
      initialValue: 'Fleet Solution',
    }),

    // ── 3. Page Title (Full title for the solution page) ───────────────────
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Full title shown on the solution page (e.g., "Advanced GPS Tracking Solution")',
      validation: (Rule) => Rule.required(),
    }),

    // ── 4. Slug (Generated from title) ─────────────────────────────────────
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Automatically generated from Page Title',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),

    // ── 5. Tagline ──────────────────────────────────────────────────────────
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'One-line subtitle shown below the page title.',
    }),

    // ── 6. MEDIA FIELD (Image or YouTube Link) ─────────────────────────────
    defineField({
      name: 'media',
      title: 'Media (Image, Video, or YouTube)',
      type: 'object',
      description: 'Add an image, a direct video link, or a YouTube video to display on the page',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'mediaType',
          title: 'Media Type',
          type: 'string',
          options: {
            list: [
              { title: 'Image', value: 'image' },
              { title: 'YouTube Video', value: 'youtube' },
            ],
            layout: 'radio',
          },
          initialValue: 'image',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          description: 'Upload an image to display',
          hidden: ({ parent }) => parent?.mediaType !== 'image',
        }),
        defineField({
          name: 'videoUrl',
          title: 'Direct Video URL',
          type: 'url',
          description: 'Enter a direct link to a video file (e.g., .mp4, .webm)',
          hidden: ({ parent }) => parent?.mediaType !== 'video',
          validation: (Rule) =>
            Rule.custom((url, context) => {
              const parent = context.parent as { mediaType?: string };
              if (parent?.mediaType === 'video' && !url) {
                return 'Video URL is required when direct video is selected';
              }
              return true;
            }),
        }),
        defineField({
          name: 'youtubeUrl',
          title: 'YouTube Video URL',
          type: 'url',
          description: 'Enter YouTube video URL (e.g., https://www.youtube.com/watch?v=... or https://youtu.be/...)',
          hidden: ({ parent }) => parent?.mediaType !== 'youtube',
          validation: (Rule) =>
            Rule.custom((url, context) => {
              const parent = context.parent as { mediaType?: string };
              if (parent?.mediaType === 'youtube' && !url) {
                return 'YouTube URL is required when YouTube type is selected';
              }
              if (url && !url.includes('youtube.com') && !url.includes('youtu.be')) {
                return 'Please enter a valid YouTube URL';
              }
              return true;
            }),
        }),
      ],
      preview: {
        select: {
          mediaType: 'mediaType',
        },
        prepare({ mediaType }) {
          let title = 'Image';
          if (mediaType === 'youtube') title = 'YouTube Video';
          if (mediaType === 'video') title = 'Direct Video';
          return { title };
        },
      },
    }),

    // ── 7. Overview Text ────────────────────────────────────────────────────
    defineField({
      name: 'overview',
      title: 'Overview Text',
      type: 'text',
      rows: 5,
      description: 'Introductory paragraph shown in the Overview section.',
    }),

    // ── 8. BENEFITS SECTION (3 cards after Overview) ────────────────────────
    // UI: Shows NO title, just the 3 cards
    defineField({
      name: 'benefits',
      title: 'Benefits (3 Cards)',
      type: 'array',
      description:
        'Exactly 3 benefit cards shown after the Overview. These display as cards with icons. NO section title is shown in the UI.',
      validation: (Rule) =>
        Rule.max(3).warning('This section is designed for exactly 3 cards.'),
      of: [
        {
          type: 'object',
          title: 'Benefit Card',
          preview: {
            select: { title: 'title', subtitle: 'iconName' },
            prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
              return {
                title: title ?? 'Untitled Benefit',
                subtitle: subtitle ? `Icon: ${subtitle}` : 'No icon selected',
              }
            },
          },
          fields: [
            defineField({
              name: 'iconName',
              title: 'Icon',
              type: 'string',
              description:
                'Choose an icon that reflects this benefit. Example: "TrendingUp" for Efficiency, "Shield" for Security, "Star" for Service Quality.',
              options: {
                list: LUCIDE_ICONS,
                layout: 'dropdown',
              },
              validation: (Rule) => Rule.required().error('Please select an icon for this benefit card.'),
            }),
            defineField({
              name: 'title',
              title: 'Benefit Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Benefit Description',
              type: 'text',
              rows: 2,
            }),
          ],
        },
      ],
    }),

    // ── 9. Key Features ────────────────────────────────────────────────────
    defineField({
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'array',
      description:
        "Feature blocks shown in the Key Features section. Choose icons that match each feature's meaning.",
      of: [
        {
          type: 'object',
          title: 'Feature',
          preview: {
            select: { title: 'title', subtitle: 'iconName' },
            prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
              return {
                title: title ?? 'Untitled Feature',
                subtitle: subtitle ? `Icon: ${subtitle}` : 'No icon selected',
              }
            },
          },
          fields: [
            defineField({
              name: 'iconName',
              title: 'Icon',
              type: 'string',
              description:
                'Pick the icon that best represents this feature. Example: "Activity" for Real-Time Tracking, "Route" for Route Optimization, "BarChart2" for Reports.',
              options: {
                list: LUCIDE_ICONS,
                layout: 'dropdown',
              },
              validation: (Rule) => Rule.required().error('Please select an icon for this feature.'),
            }),
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              rows: 3,
            }),
          ],
        },
      ],
    }),

    // ── 10. USE CASES SECTION (formerly "Benefits & Use Cases") ─────────────
    // UI: Displays as "Benefits & Use Cases" with auto-numbered items (01, 02...)
    defineField({
      name: 'useCases',
      title: 'Use Cases',
      type: 'array',
      description:
        'Use cases that showcase real-world applications. In the UI, this section is titled "Benefits & Use Cases" with auto-numbered items (01, 02…). No icon selection needed.',
      of: [
        {
          type: 'object',
          title: 'Use Case',
          preview: {
            select: { title: 'title' },
            prepare({ title }: { title?: string }) {
              return { title: title ?? 'Untitled Use Case' }
            },
          },
          fields: [
            defineField({
              name: 'title',
              title: 'Use Case Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Use Case Description',
              type: 'text',
              rows: 3,
            }),
          ],
        },
      ],
    }),

    // ── 11. Why Choose Garuda (with icon dropdown) ──────────────────────────
    defineField({
      name: 'whyChoose',
      title: 'Why Choose Garuda?',
      type: 'array',
      description: 'Points that showcase why customers choose Garuda. Each point can have its own icon.',
      of: [
        {
          type: 'object',
          title: 'Reason',
          preview: {
            select: { 
              title: 'description',
              subtitle: 'iconName' 
            },
            prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
              const preview = title && title.length > 60 ? title.slice(0, 60) + '…' : title
              return { 
                title: preview ?? 'Untitled Reason',
                subtitle: subtitle ? `Icon: ${subtitle}` : 'Icon: CheckCircle2'
              }
            },
          },
          fields: [
            defineField({
              name: 'iconName',
              title: 'Icon',
              type: 'string',
              description: 'Choose an icon for this point. Default is CheckCircle2.',
              options: {
                list: LUCIDE_ICONS,
                layout: 'dropdown',
              },
              initialValue: 'CheckCircle2',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              description: 'e.g. "Enterprise-grade reliability and 99.9% uptime validation."',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      initialValue: [
        {
          iconName: 'CheckCircle2',
          description: 'Enterprise-grade reliability and 99.9% uptime validation.'
        },
        {
          iconName: 'CheckCircle2',
          description: 'Seamless integration with existing fleet management workflows.'
        },
        {
          iconName: 'CheckCircle2',
          description: 'Dedicated 24/7 technical support and rapid incident response.'
        }
      ],
    }),

    // ── 12. ORDER FIELD ─────────────────────────────────────────────────────
    defineField({
      name: 'order',
      title: 'Display Order',
      description: 'Lower number appears first. Use 10, 20, 30... for easy reordering',
      type: 'number',
      validation: (Rule) => Rule.integer().positive(),
    }),

  ],

  // ── Orderings for the document list ───────────────────────────────────────
  orderings: [
    {
      title: 'Display Order (Low to High)',
      name: 'displayOrderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }]
    },
  ],

  // ── Studio Document Preview ───────────────────────────────────────────────
  preview: {
    select: { 
      title: 'title',
      order: 'order' 
    },
    prepare({ title, order }: { title?: string; order?: number }) {
      return {
        title: title ?? 'Untitled Solution',
        subtitle: order ? `Order: ${order}` : 'GPS Solution Page',
      }
    },
  },
})