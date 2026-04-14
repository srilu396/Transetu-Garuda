import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const pathname = searchParams.get('sanity-preview-pathname') || '/'

  // Enable Draft Mode safely if secret matches
  if (secret === process.env.SANITY_PREVIEW_SECRET) {
    draftMode().enable()
  } else if (process.env.NODE_ENV === 'production') {
     console.error("Preview secret mismatch in production");
     return new Response('Invalid token', { status: 401 })
  } else {
    // In development, we might allow it for convenience but log it
    console.warn("Preview accessed without secret or invalid secret in development.");
    draftMode().enable() 
  }

  // Redirect securely to the frontend URL requested
  redirect(pathname.startsWith('/') ? pathname : `/${pathname}`)
}
