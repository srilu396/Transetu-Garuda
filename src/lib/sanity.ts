import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from '@sanity/image-url'

const projectId = 'tuxe1ipn'
const dataset = 'production'
const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
})

// Client used for live preview only
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Must be false for live preview
  token: process.env.SANITY_API_TOKEN, // Reuse existing token or SANITY_API_READ_TOKEN
  perspective: 'previewDrafts',
})

// Helper function to choose the correct client
export function getClient(preview?: boolean) {
  return preview ? previewClient : client
}

const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) =>
  builder.image(source)