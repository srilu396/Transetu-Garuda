// watchPlatformDemo.ts
import { defineField, defineType } from 'sanity'

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
  { title: 'Gauge — Speed / Dashboard',          value: 'Gauge' },

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
  { title: 'Camera — Camera / Video',            value: 'Camera' },
]

// ─── Icon Background Color Options ───────────────────────────────────────────
const ICON_BG_COLORS = [
  { title: 'Orange (Fuel)',    value: 'bg-orange-100  text-orange-500' },
  { title: 'Blue (Speed)',     value: 'bg-blue-100    text-blue-500'   },
  { title: 'Purple (Video)',   value: 'bg-purple-100  text-purple-500' },
  { title: 'Green',            value: 'bg-green-100   text-green-500'  },
  { title: 'Red',              value: 'bg-red-100     text-red-500'    },
  { title: 'Yellow',           value: 'bg-yellow-100  text-yellow-500' },
  { title: 'Teal',             value: 'bg-teal-100    text-teal-500'   },
  { title: 'Pink',             value: 'bg-pink-100    text-pink-500'   },
]

// ─── Reusable Demo Card object type ──────────────────────────────────────────
export const demoCard = defineType({
  name: 'demoCard',
  title: 'Demo Card',
  type: 'object',
  fields: [
    // 1. Icon - Now with searchable dropdown
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: LUCIDE_ICONS,
        layout: 'dropdown', // Changed from 'radio' to 'dropdown'
      },
      description: 'Select a Lucide icon from the dropdown. You can search by typing.',
      validation: (Rule) => Rule.required(),
    }),

    // 2. Icon background colour
    defineField({
      name: 'iconColor',
      title: 'Icon Color Theme',
      type: 'string',
      options: {
        list: ICON_BG_COLORS,
        layout: 'dropdown', // Changed to dropdown for consistency
      },
      initialValue: 'bg-orange-100  text-orange-500',
      description: 'Background + icon colour. Matches Tailwind utility classes.',
    }),

    // 3. Video thumbnail image (shown before user clicks play)
    defineField({
      name: 'thumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      options: { hotspot: true },
      description: 'Thumbnail image shown before the YouTube video loads.',
      validation: (Rule) => Rule.required(),
    }),

    // 4. YouTube video URL
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Video URL',
      type: 'url',
      description: 'Full YouTube URL — e.g. https://www.youtube.com/watch?v=XXXXX',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['https'],
        }),
    }),

    // 5. Card title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "Fuel Monitoring"',
      validation: (Rule) => Rule.required().max(60),
    }),

    // 6. Description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short paragraph shown below the title (2–3 sentences max).',
      validation: (Rule) => Rule.required().max(300),
    }),

    // 7. Watch Video button label (editable so you can localise)
    defineField({
      name: 'watchVideoLabel',
      title: '"Watch Video" Button Label',
      type: 'string',
      initialValue: 'Watch Video',
      description: 'Label for the CTA link. Default: "Watch Video".',
      validation: (Rule) => Rule.required().max(30),
    }),
  ],

  // Preview in Sanity Studio list
  preview: {
    select: {
      title: 'title',
      subtitle: 'youtubeUrl',
      media: 'thumbnail',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title ?? 'Untitled Card',
        subtitle: subtitle ?? 'No YouTube URL yet',
        media,
      }
    },
  },
})

// ─── Main Section document / object ──────────────────────────────────────────
export const watchPlatformDemoSection = defineType({
  name: 'watchPlatformDemoSection',
  title: 'Watch Platform Demo Section',
  type: 'document',
  fields: [
    // Section badge label
    defineField({
      name: 'badgeLabel',
      title: 'Badge Label',
      type: 'string',
      initialValue: 'WATCH DEMOS',
      description: 'Small pill/badge text above the heading.',
    }),

    // Section heading
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Watch Platform Demo',
      validation: (Rule) => Rule.required(),
    }),

    // Section sub-heading
    defineField({
      name: 'subheading',
      title: 'Sub-heading',
      type: 'text',
      rows: 2,
      initialValue:
        'With our advanced fleet vehicle tracking systems you have complete control over your fleet and their activities.',
    }),

    // The 3 fixed cards
    defineField({
      name: 'cards',
      title: 'Demo Cards (Fixed — exactly 3)',
      type: 'array',
      of: [{ type: 'demoCard' }],
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(3)
          .error('This section must always have exactly 3 cards.'),
      description:
        'Exactly 3 cards. You can edit content but cannot add or remove cards.',
    }),
  ],

  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: title ?? 'Watch Platform Demo Section' }
    },
  },
})