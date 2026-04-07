import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  // This secret should be set in your Environment Variables and match Sanity's configuration
  if (secret !== process.env.SANITY_PREVIEW_SECRET && process.env.NODE_ENV === 'production') {
    return new Response('Invalid token', { status: 401 })
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable()

  // Redirect to the path if provided, otherwise to the home page
  redirect(slug ? `/fastag/${slug}` : '/')
}
