'use server'

import { draftMode } from 'next/headers'
import { getClient } from '@/lib/sanity'

// This server action fetches data directly from Sanity.
// It detects draft mode and uses either the preview client or published client.
export async function fetchSanityQuery(query: string, params: Record<string, unknown> = {}) {
  // 1. Check if draft mode is ON securely on the server
  const isDraftMode = draftMode().isEnabled

  // 2. Load the correct client (published or preview)
  const client = getClient(isDraftMode)

  // 3. Force non-cache behavior for draft mode
  const fetchOptions = isDraftMode
    ? { cache: 'no-store' as RequestCache }
    : { next: { revalidate: 60 } }

  // 4. Return data securely without leaking token to the client component
  return await client.fetch(query, params, fetchOptions)
}
