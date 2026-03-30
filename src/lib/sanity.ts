import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from '@sanity/image-url'

export const client = createClient({
  projectId: 'tuxe1ipn',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) =>
  builder.image(source)